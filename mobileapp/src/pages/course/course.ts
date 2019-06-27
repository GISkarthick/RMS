import { Component, ViewChild, OnInit,TemplateRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Constant } from '../../constants/Constant.var';
import { HttpProvider } from '../../providers/http/http';
import { API_URL } from '../../constants/API_URLS.var';
import { LoaderService, SocketService } from '../../service';
import { Storage } from '@ionic/storage';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@IonicPage({
  name: 'course-page'
})
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
  providers: [Constant]

})
export class CoursePage implements OnInit {
  showAssigned: boolean = false;
  showProgress: boolean = true;
  showCompleted: boolean = true;
  showSignRequire: boolean = true;
  statusKey;
  userInformation: any = [];
  userAssigned: any;
  userProgress: any;
  userCompleted: any;
  courseList:any =[];
  allCourses: any = [];
  assignedCount;
  assignedCoursesList = [];
  progressCoursesList = [];
  completeCoursesList = [];
  noRecordsFoundMessage;
  paramsData ={};
  currentUser;
  status;
  notificationCount;
  showSearchBar: boolean = false;
  search;
  signRequireCount;
  signRequireList;
  uploadPath;
  tab;
  modalRef: BsModalRef;
  className;
  showToastr;
  msgTitle;
  msgDes;
  

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController,public modalService:BsModalService,public socketService: SocketService ,public storage: Storage, public navParams: NavParams, public constant: Constant, public http: HttpProvider, public loader: LoaderService) {
        this.tab = this.navParams.data; 
      
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
            let self = this;
            this.storage.get('currentUser').then((user: any) => {
            if (user) {
             self.currentUser = user;
             this.getCourseStatus('assigned','');
              this.status = 'assigned';
              this.getNotification();
                if(this.tab && this.tab == 'signReq'){
                  this.getSignRequired();
                }
            }
        });
  }


  successMessage(msg){
    this.showToastr = true;
    this.className = "notify-box alert alert-success";
    this.msgTitle = "Success";
    this.msgDes = msg ;
    let self = this;
    setTimeout(function(){ 
      self.showToastr = false;
      }, 3000); 
  }

  ionViewDidEnter() {
    this.assignedCoursesList = [];
    this.progressCoursesList = [];
    this.completeCoursesList = [];
    this.getCoursesList(); 
  }
  goToNotification() {
    this.navCtrl.setRoot('notification-page');
  }

   goToForum(){
     this.navCtrl.setRoot('forum-page');
  }
  
  openTrainingClass(courseId) 
  {
    if(this.status == 'assigned'){
    let userId = this.currentUser ? this.currentUser.userId : 8;
        let data={
        'courseId' :courseId,
        'userId' : userId,
        'status': "inProgress"
        }
        this.http.put(false,API_URL.URLS.updateTrainingStatus, data).subscribe((res) => {      
        },(err) => {

        });
      }
    this.paramsData['courseId'] = courseId;
    this.paramsData['status'] = this.status;
    this.navCtrl.setRoot('training-page',this.paramsData);
  }

  openSignRequireDetail(Files){
    let data = {
      'files' : Files,
      'uploadPath' : this.uploadPath,
      'type' : 'signReq'
    }
    this.navCtrl.setRoot('signrequire-page', data);
  }

  //getcourse 
  async getCoursesList(){
    this.loader.showLoader();
    await this.getCourse();
    this.loader.hideLoader();
  }
  
  getCourseStatus(status, search) {
    let self = this;
    this.courseList = [];
    return new Promise(resolve => {
      let userId = this.currentUser ? this.currentUser.userId : 8;
      this.http.get(API_URL.URLS.trainingCourseAPI + '?status=' + status + '&userId=' + userId + '&search=' +search).subscribe((res) => {
        if(res['data']['rows']){
          self.courseList    = res['data']['rows'];
          self.assignedCount = res['data']['count'];
        }else{
          self.assignedCount = 0;
          self.noRecordsFoundMessage = res['message'];
        }
        resolve('resolved');
      },(err) => {
        resolve('rejected');
      });
    });
  }

  getSignRequired(){
    this.showAssigned = true;
    this.showProgress = true;
    this.showCompleted = true;
    this.showSignRequire = false;
    let userId =  this.currentUser.userId;
    let resortId = this.currentUser.ResortUserMappings[0].resortId;
    let status='signRequired';
    this.http.get(API_URL.URLS.signRequired+'?userId=' +userId +'&resortId='+resortId+'&status='+status+'&mobile='+1).subscribe(res=>{
    if(res['data']['rows']){
      this.signRequireList =res['data']['rows'];
      this.signRequireCount = res['data']['count'];
      this.uploadPath =res.data.uploadPath.uploadPath;
    }else{
      this.signRequireCount = 0;
      this.noRecordsFoundMessage = res['message'];
    }
    })
  }

   toggleSearchBox() {
    this.showSearchBar = !this.showSearchBar;
   }

   onInput($e) {
    if (this.search) {
      this.getCourseStatus(this.status, this.search)
    } else {
      this.showSearchBar = false;
      this.getCourseStatus(this.status, '');
    }
  }
  onCancel($e) {
    this.showSearchBar = false;
    this.getCourseStatus(this.status, '');
  }


    getNotification(){
    let userId = this.currentUser.userId;
    let socketObj = {
      userId : userId
    };
   this.socketService.getNotification(socketObj).subscribe((data)=>{
      this.notificationCount = data['unReadCount'];
   });
  }


  getCourse() {
    return new Promise(resolve => {
      this.http.getData(API_URL.URLS.getCourse).subscribe((data) => {
        this.allCourses = data;
        var self = this;
        this.allCourses.assigned.map(function (value, key) {
          value['expireDate']=self.calculateExpireDays(value.dueDate);
          self.assignedCoursesList.push(value);          
        });
        this.allCourses.inprogress.map(function (value, key) {
          value['expireDate']=self.calculateExpireDays(value.dueDate);
          self.progressCoursesList.push(value);
        });
        this.allCourses.completed.map(function (value, key) {
          self.completeCoursesList.push(value);
        });        
        resolve('resolved');
      }, (err) => {
        console.log('error occured', err);
        resolve('rejected');
      });
    });
  }

  calculateExpireDays(dueDate) {
    const a = moment(new Date());
    const b = moment(new Date(dueDate));
    return a.to(b, true);
  }


  openLaunchModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  launchApp(){
    let postData = {
      userId : this.currentUser.userId
    }
    this.http.post(false,API_URL.URLS.contentEmail,postData).subscribe(res=>{
      if(res['isSuccess']){
        this.successMessage(res['message']);
        this.modalRef.hide();
      }
    })
  }

  // show tabs
  showData(show) {
    this.status = show;
    switch (show) {
      case 'assigned':
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
        this.showSignRequire = true;
        break;
      case 'inProgress':
        this.showAssigned = true;
        this.showProgress = false;
        this.showCompleted = true;
        this.showSignRequire = true;
        break;
      case 'completed':
        this.showAssigned = true;
        this.showProgress = true;
        this.showCompleted = false;
        this.showSignRequire = true;
        break;
      default:
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
        this.showSignRequire = true;
    }

    this.getCourseStatus(show,'');

  }

 

}


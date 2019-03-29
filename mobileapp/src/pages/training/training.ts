import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Content } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { TrainingDetailPage } from '../training-detail/training-detail';
import { Constant } from '../../constants/Constant.var';
import { API_URL } from '../../constants/API_URLS.var';
import { Storage } from '@ionic/storage';
import { LoaderService } from '../../service/loaderService';

@IonicPage({
  name: 'training-page'
})
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
  providers: [Constant]
})
export class TrainingPage {
  training;
  assignedList;
  inprogressList;
  completedList;
  paramsData = {};
  selectedModule;
  modules;
  moduleId = 0;
  showAssigned: boolean = false;
  showProgress: boolean = true;
  showCompleted: boolean = true;
  detailObject;
  statusKey;
  userInformation: any = [];
  userAssigned: any;
  userProgress: any;
  userCompleted: any;
  allCourses: any = [];
  assignedCoursesList = [];
  progressCoursesList = [];
  completeCoursesList = [];
  assign: any = [];
  progress: any = [];
  complet: any = [];
  @ViewChild(Content) content: Content;
  allProgramsAssignedCourses = [];
  allProgramsProgressCourses = [];
  allProgramsCompletedCourses = [];
  totalCount;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, public constant: Constant, public apiUrl: API_URL, public storage: Storage, public loader: LoaderService) {
    this.detailObject = this.navParams.data;
    this.statusKey = this.detailObject['status'] ? this.detailObject['status'] : 'assigned';
    this.selectedModule = constant.pages.dashboardLabels.selectModules;
  }
  @ViewChild('myTabs') tabRef: Tabs;
  //first load
  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }
  ionViewDidEnter() {
    this.assignedCoursesList = [];
    this.progressCoursesList = [];
    this.completeCoursesList = [];
    this.allProgramsAssignedCourses = [];
    this.allProgramsProgressCourses = [];
    this.allProgramsCompletedCourses = [];
    this.selectedModule = this.constant.pages.dashboardLabels.selectModules;

    this.showData(this.statusKey);
    this.getCousesList();
    this.getModules();
  }
  getLocalStorageInfo() {
    return new Promise(resolve => {
      this.storage.get('userDashboardInfo').then(
        (val) => {
          this.userInformation = val.users[0];
          this.userAssigned = this.userInformation.assignedCourses;
          this.userProgress = this.userInformation.inProgressCourses;
          this.userCompleted = this.userInformation.completedCourses;
          resolve('resolved');
        }, (err) => {
          console.log('error occured', err);
          resolve('rejected');
        });
    });
  }
  getCoursesSeparate() {
    return new Promise(resolve => {
      this.http.getData(API_URL.URLS.getCourses).subscribe((data) => {
        this.allCourses = data;
        var self = this;
        this.userAssigned.map(function (value, key) {
          let assignedobject = self.allCourses.find(x => x.courseId === value);
          self.assignedCoursesList.push(assignedobject);
        });
        this.userProgress.map(function (value, key) {
          let progressObject = self.allCourses.find(x => x.courseId === value);
          self.progressCoursesList.push(progressObject);
        });
        this.userCompleted.map(function (value, key) {
          let completedObject = self.allCourses.find(x => x.courseId === value);
          self.completeCoursesList.push(completedObject);
        });
        self.allProgramsAssignedCourses = self.assignedCoursesList;
        self.allProgramsProgressCourses = self.progressCoursesList;
        self.allProgramsCompletedCourses = self.completeCoursesList;

        if (self.statusKey === 'assigned') {
          self.totalCount = self.allProgramsAssignedCourses.length;
        } else if (self.statusKey === 'inprogress') {
          self.totalCount = self.allProgramsProgressCourses.length;
        } else if (self.statusKey === 'complete') {
          self.totalCount = self.allProgramsCompletedCourses.length;
        }
        resolve('resolved');
      }, (err) => {
        console.log('error occured', err);
        resolve('rejected');
      });
    });
  }

  // show tabs
  showData(show) {
    switch (show) {
      case 'assigned':
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
        break;
      case 'inprogress':
        this.showAssigned = true;
        this.showProgress = false;
        this.showCompleted = true;
        break;
      case 'complete':
        this.showAssigned = true;
        this.showProgress = true;
        this.showCompleted = false;
        break;
      default:
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
    }
    this.statusKey = show;
    this.selectedCourses(this.moduleId, show);
  }

  getModules() {
    this.http.getData(API_URL.URLS.getModules).subscribe((data) => {
      if (data['isSuccess']) {
        this.modules = data['programList'];
      }
    });
  }
  //open  page
  openTrainingDetail(detailObj, selectedIndex, status) {
    this.paramsData['status'] = status;
    this.paramsData['setData'] = detailObj;
    this.paramsData['selectedIndex'] = selectedIndex;
    this.navCtrl.push(TrainingDetailPage, this.paramsData);
  }
  //getcourse 
  async getCousesList() {
    this.loader.showLoader();
    await this.getLocalStorageInfo();
    await this.getCoursesSeparate();
    this.loader.hideLoader();
  }
  changeModule(list) {
    this.selectedModule = list.name;
    this.moduleId = list.id;
    this.selectedCourses(list.id, this.statusKey);
  }
  resetToAllCourses() {
    this.assignedCoursesList = this.allProgramsAssignedCourses;
    this.progressCoursesList = this.allProgramsProgressCourses;
    this.completeCoursesList = this.allProgramsCompletedCourses;
    if (this.statusKey === 'assigned') {
      this.totalCount = this.allProgramsAssignedCourses.length;
    } else if (this.statusKey === 'inprogress') {
      this.totalCount = this.allProgramsProgressCourses.length;
    } else if (this.statusKey === 'complete') {
      this.totalCount = this.allProgramsCompletedCourses.length;
    }
  }
  selectedCourses(moduleId, status) {
    this.resetToAllCourses();
    this.assign = [];
    this.progress = [];
    this.complet = [];
    let self = this;
    if (moduleId !== 0) {
      if (status === 'assigned') {
        this.assignedCoursesList = this.allProgramsAssignedCourses;
        this.assignedCoursesList.map(function (value) {
          if (value.moduleId === self.moduleId) {
            self.assign.push(value);
          }
        });
        this.assignedCoursesList = [];
        this.assignedCoursesList = this.assign;
        this.totalCount = this.assign.length;
      }
      if (status === 'inprogress') {
        this.progressCoursesList = this.allProgramsProgressCourses;
        this.progressCoursesList.map(function (value) {
          if (value.moduleId === self.moduleId) {
            self.progress.push(value);
          }
        });
        this.progressCoursesList = [];
        this.progressCoursesList = this.progress;
        this.totalCount = this.progress.length;
      }
      if (status === 'complete') {
        this.completeCoursesList = this.allProgramsCompletedCourses;
        this.completeCoursesList.map(function (value) {
          if (value.moduleId === self.moduleId) {
            self.complet.push(value);
          }
        });
        this.completeCoursesList = [];
        this.completeCoursesList = this.complet;
        this.totalCount = this.complet.length;
      }
    } else {
      this.resetToAllCourses();
    }
  }
  goToNotification() {
    this.navCtrl.setRoot('notification-page');
  }
}

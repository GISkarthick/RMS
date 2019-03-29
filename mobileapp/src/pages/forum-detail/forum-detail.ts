import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Content } from 'ionic-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constant } from '../../constants/Constant.var';
import { ToastrService } from '../../service/toastrService';
import { API_URL } from '../../constants/API_URLS.var';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal/modal';


@IonicPage({
  name: 'forumdetail-page'
})
@Component({
  selector: 'page-forum-detail',
  templateUrl: 'forum-detail.html',
})
export class ForumDetailPage implements OnInit {

  @ViewChild(Content) content: Content;

  forumTopics: any;
  QuestionForm: FormGroup;
  forum = {
    'question': ''
  }
  forumDetailObject;
  indexs;
  employees;
  topics;
  like: boolean = false;
  forumFavor: any = [];
  forumRecent: any = [];
  forumFeature: any = [];
  recentList: any = [];
  favoriteList: any = [];
  featureList: any = [];
  commentList: any = [];
  currentUser;
  userId;
  comment;
  hideQuestionBtn:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalService: BsModalService, public constant: Constant, private toastr: ToastrService, public API_URL: API_URL, private http: HttpProvider, private storage: Storage, public modalCtrl: ModalController) {
    this.forumDetailObject = this.navParams.data;
    this.employees = this.forumDetailObject['setData']['employees'];
    this.topics = this.forumDetailObject['setData']['topics'];
    this.indexs = this.forumDetailObject['selectedIndex'];
  }
  ionViewDidLoad() {
    this.forumTopics = 'mostRecent';
    console.log('ionViewDidLoad ForumPage');
  }
  ionViewDidEnter() {
    this.getTopicsRelated();
  }
  ngOnInit() {
    this.forumTopics = 'mostRecent';
    this.QuestionForm = new FormGroup({
      question: new FormControl('', [Validators.required])
    });
    this.getUser();
    this.getComments();
  }
  getTopicsRelated() {
    var self = this;
    this.employees.map(function (val, key) {
      val = Object.assign({}, val);
      val.isActive = false;
      val.isComment = false;
      if (val.status === 'Recent') {
        self.recentList.push(val);
      } else if (val.status === 'Featured') {
        self.featureList.push(val);
      } else if (val.like === true) {
        self.favoriteList.push(val);
      }
    });
  }
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  questionSubmit(QuestionForm) {
    console.log(this.forum);
    this.toastr.success("Question Saved Successfully");
    this.forum.question = '';
    QuestionForm.reset();
    this.modalRef.hide();
  }
  likeUnlikeQuestion(emp, j) {
    emp[j]['like'] = !(emp[j]['like']);
  }
  hideShowDesc(emp, j) {
    emp[j]['isActive'] = !(emp[j]['isActive']);
  }
  showCommentSet(emp, j) {
    emp[j]['isComment'] = !(emp[j]['isComment']);
    this.hideQuestionBtn = !this.hideQuestionBtn ;
  }
  getComments() {
    this.http.getData(API_URL.URLS.getComments).subscribe((data) => {
      if (data['isSuccess']) {
        this.commentList = data['commentList'];
      }
    });
  }
  getUser() {
    this.storage.get('currentUser').then(
      (val) => {
        if (val) {
          this.currentUser = val;
          this.userId = this.currentUser.userId;
        }
      }, (err) => {
        console.log('currentUser not received in forum-detail.component.ts', err);
      });
  }
  saveComment(list) {
    console.log(list);
    if (!this.comment) {
      this.toastr.error("Comment is required");
    } else {
      this.comment = '';
      this.toastr.success("Comment added successfully");
    }
  }
  async presentModal(repliesObj) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { value: repliesObj }
    });
    return await modal.present();
  }
  goBackLevel(){
    this.navCtrl.setRoot('forum-page');
  }
}

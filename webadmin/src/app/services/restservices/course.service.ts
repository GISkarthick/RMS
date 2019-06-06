import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import {UtilService} from '../util.service';
import { map } from 'rxjs/operators';
import { API_URL } from '../../Constants/api_url';

@Injectable({    
    providedIn: 'root'
})
export class CourseService {
  
  url;

  constructor (private http: HttpService,private utilService : UtilService) {
     this.url = API_URL.URLS;
  }


  addCourse(userData){
    return this.http.post('local',this.url.courseAdd, userData);
  }

  getCourse(currentPage,size,query){
    return this.http.getLocal('local',this.url.courseList+'?page='+currentPage+'&size='+size+query);
  }

  getAllCourse(){
    let userId = this.utilService.getUserData().userId;
    return this.http.getLocal('local',this.url.courseList+'?created='+userId);
  }

  getCourseById(courseId){
    return this.http.getLocal('local',this.url.courseList+'?courseId='+courseId)
  }

  getTrainingclassesById(courseId){
    return this.http.getLocal('local',this.url.getTrainingClassById+'?courseId='+courseId)
  }
  getCourseTrainingClassById(classId,courseId){
    return this.http.getLocal('local',this.url.getCourseTrainingClassById+'?trainingClassId='+classId)
  }

  updateCourse(courseId, userData){
      return this.http.put('local',this.url.courseUpdate+courseId,userData)
  }
  updateTrainingClassName(trainingClassId, trainingClassName) {
    return this.http.put('local', this.url.trainingClassUpdate + trainingClassId, trainingClassName)
  }
  updateTrainingClass(trainingClassId,params) {
    return this.http.put('local', this.url.courseTrainingClassUpdate + trainingClassId,params)
  }
  deleteCourse(courseId){
    return this.http.delete('local',this.url.courseDelete+courseId)
  }

  deleteDocument(docId){
    return this.http.delete('local',this.url.fileDelete+docId)
  }

  addTrainingClass(userData){
    return this.http.post('local',this.url.trainingClassAdd,userData);
  }

  getCourseTrainingClass(currentPage,size,query){
    return this.http.getLocal('local',this.url.trainingClassCourse+'?page='+currentPage+'&size='+size+query);
    // return this.http.getLocal('local',this.url.trainingClassCourse);
  }

  getTrainingClass(){
    return this.http.getLocal('local',this.url.trainingClass);
  }

  getTrainingClassById(trainingClassId){
    return this.http.getLocal('local',this.url.trainingClass+'?trainingClassId='+trainingClassId)
  }

  getTrainingClassQuiz(trainingClassId,courseId){
    if(courseId === ''){
      return this.http.getLocal('local',this.url.trainingClassQuiz+'?trainingClassId='+trainingClassId)
    }
    else{
      return this.http.getLocal('local',this.url.trainingClassQuiz+'?trainingClassId='+trainingClassId+'&courseId='+courseId)
    }
  }

  getQuizList(userId){
     return this.http.getLocal('local',this.url.trainingClassQuiz+'?createdBy='+userId)
  }

  scheduleTraining(data){
    return this.http.post('local',this.url.scheduleTraining, data)
  }

  getDivision(resortId,resortType){
      let resort = resortType === "parent" ? 'parentResort='+resortId : 'childResort='+resortId
      return this.http.getLocal('local',this.url.getResortDivision+'?'+resort+'&type=division');
  }

  getChildResort(resortId){
    return this.http.getLocal('local',this.url.getResortDivision+'?childResort='+resortId);
  }

  getDepartment(divisionId){
    return this.http.post('local',this.url.departmentList,{'divisionId':divisionId});
  }

  getCreatedByDetails(){
    return this.http.getLocal('local',this.url.getCreatedByDetails);
  }

  getFiles(params){
    if(params.classId){
      return this.http.getLocal('local',this.url.fileList+'?fileType='+params.type+'&trainingClassId='+params.classId+'&page='+params.page+'&size='+params.size+params.query);
    }else if(params.courseId){
      return this.http.getLocal('local',this.url.fileList+'?courseId='+params.courseId);
    }else{
      return this.http.getLocal('local',this.url.fileList+'?fileType='+params.type+'&page='+params.page+'&size='+params.size+params.query);
    }
    
  }

  assignVideosToCourse(data){
    return this.http.post('local',this.url.assignVideoToCourse,data);
  }

  getEditCourseDetails(fileType,courseId,classId){
    return this.http.getLocal('local',this.url.courseEditFileList+'?fileType='+fileType+'&courseId='+courseId+'&trainingClassId='+classId);
  }

  updateCourseList(courseId,params){
    return this.http.put('local',this.url.courseListUpdate+courseId,params)
  }
    
  addQuiz(data){
    return this.http.post('local',this.url.quizAdd,data);
  }

  updateQuizList(quizId,params){
    return this.http.put('local',this.url.quizListUpdate+quizId,params)
  }
  updateQuestion(questionId,params){
    return this.http.put('local',this.url.questionUpdate+questionId,params)
  }
  deleteQuizList(queId){
    return this.http.delete('local',this.url.quizDelete+queId)
  }
  searchQuery(CMSFilterSearchEventSet){
    let query = '';
    if(CMSFilterSearchEventSet !== undefined && CMSFilterSearchEventSet !== '')
    {
      let courseId           = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.courseId)?CMSFilterSearchEventSet.courseId:'';
      let trainingClassId    = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.trainingClassId)?CMSFilterSearchEventSet.trainingClassId:'';
      let divisionId         = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.parentDivisionId)?CMSFilterSearchEventSet.parentDivisionId:((CMSFilterSearchEventSet && CMSFilterSearchEventSet.childDivisionId)?CMSFilterSearchEventSet.childDivisionId:'');
      let departmentId       = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.parentDepartmentId)?CMSFilterSearchEventSet.parentDepartmentId:((CMSFilterSearchEventSet && CMSFilterSearchEventSet.childDepartmentId)?CMSFilterSearchEventSet.childDepartmentId:'');
      let subResortId        = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.childResortId)?CMSFilterSearchEventSet.childResortId:'';
      let createdBy          = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.createdBy)?CMSFilterSearchEventSet.createdBy:'';
      let search             = (CMSFilterSearchEventSet && CMSFilterSearchEventSet.search)?CMSFilterSearchEventSet.search:''

      courseId=  (courseId == 'null')?'':courseId;
      trainingClassId = (trainingClassId == 'null')?'':trainingClassId;
      divisionId= (divisionId == 'null')?'':divisionId;
      departmentId= (departmentId == 'null')?'':departmentId;
      subResortId=   (subResortId == 'null')?'':subResortId;
      createdBy =(createdBy == 'null')?'':createdBy;
      query = '&courseId='+courseId+'&trainingClassId='+trainingClassId+'&subResortId='+subResortId+'&divisionId='+divisionId+'&departmentId='+departmentId+'&createdBy='+createdBy+'&search='+search;

    }
    return query;
  }
  addCourseDuplicate(params){
    return this.http.post('local',this.url.addDuplicateCourse,params);
  }

  getEmployeeListDetails(resortId,courseId){
    return this.http.getLocal('local',this.url.getEmployeeList+'?resortId='+resortId+'&courseId='+courseId);
  }

  getEmployeeDetails(resortId,userId){
    return this.http.getLocal('local',this.url.getEmployeeDetails+'?resortId='+resortId+'&userId='+userId);
  }

  getCalendarSchedule(resortId){
    return this.http.getLocal('local',this.url.getScheduleTraining+'?resortId='+resortId);
  }
  getPopupSchedule(scheduleId){
    return this.http.getLocal('local',this.url.getPopupScheduleData+'?trainingScheduleId='+scheduleId);
  }
  updateScheduleTraining(scheduleId,params){
    //updateScheduleTraining
    return this.http.put('local',this.url.updateScheduleTraining+scheduleId,params)
  }

  setPermission(params){
    return this.http.post('local',this.url.setPermissions,params);
  }

  addTypeOneNotification(params){
    return this.http.post('local',this.url.addTypeOneNotification,params);
  }

  addTypeTwoNotification(params){
    return this.http.post('local',this.url.addTypeTwoNotification,params);
  }

  getNotification(query){
    return this.http.getLocal('local',this.url.getNotification+query);
  }

  updateNotification(notifyId,params){
    // updateNotification
    return this.http.put('local',this.url.updateNotification+notifyId,params)
  }

}

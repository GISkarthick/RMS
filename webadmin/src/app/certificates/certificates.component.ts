import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService,CommonService ,UtilService,CourseService} from '../services';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../services/http.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CertificateVar } from '../Constants/certificate.var';
import { API_URL } from '../Constants/api_url';
import { AlertService } from '../services/alert.service';
import { CommonLabels } from "../Constants/common-labels.var";

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.component.html',
    styleUrls: ['./certificates.component.css'],
})

export class CertificatesComponent implements OnInit {
//getCourse

    percentageArray = [];
    percentageTakenError = {
        platinum: false,
        gold: false,
        silver: false,
        bronze: false
    };
    resortId;
    imgSrc;
    batchDetails = [];
    editFieldEnable = false;
    htmlPath;
    htmlName;
    removeCertificateIds = [];
    filePath;
    certificateId;
    htmlView;


    constructor(private http: HttpService, public constant: CertificateVar, private modalService: BsModalService, private headerService: HeaderService, private toastr: ToastrService, private router: Router, private alertService: AlertService,public commonLabels:CommonLabels,private commonService : CommonService,private utilService : UtilService,private courseService : CourseService) {
        this.constant.url = API_URL.URLS;
    }
    ngOnInit() {
        this.headerService.setTitle({ title: this.commonLabels.titles.certificate, hidemodule: false });
        this.resortId = this.utilService.getUserData() && this.utilService.getUserData().ResortUserMappings[0].Resort.resortId;
        //get certificate

        this.getCertificate();

        //get course
        this.courseService.getAllCourse().subscribe(resp=>{
            
            if(resp && resp.isSuccess){
                this.constant.courseList = resp.data.rows.length && resp.data.rows
            }
        })
        this.getbadgepercentage();
        this.getAssignCertificateDetails();
    }

    getAssignCertificateDetails(){
        this.commonService.getAssignCertificate(this.resortId).subscribe(resp=>{
            if(resp && resp.isSuccess && resp.data.length){
                this.constant.templateAssign = resp.data.map(item=>{
                    let obj = {
                        course : item.courseId,
                        template : item.certificateId,
                        mappingId : item.certificateMappingId
                    }
                    return obj
                })
            }
        })
    }

    getCertificate() {
        this.commonService.getCertificate(this.resortId).subscribe(resp => {
            if (resp && resp.isSuccess) {
                this.filePath = resp.data && resp.data.path.uploadPath;
                this.constant.certificateList = resp.data && resp.data.certificates.length && resp.data.certificates.map(item => {
                    if (this.filePath) {
                        item.imageFile = this.filePath + item.certificateHtml;
                    }
                    return item;
                });
            }
        });
    }

    getbadgepercentage() {
        this.http.get(this.constant.url.getBadgePercentage).subscribe((data) => {
            this.constant.badgePercentage = data.badgePercentage;
            this.getBadgeDetails();
        });
    }

    getBadgeDetails(){
        this.commonService.getBadge(this.resortId).subscribe(resp=>{
            if(resp && resp.isSuccess){
                this.batchDetails = resp.data.length ? resp.data : [];
                this.editFieldEnable = true;
                this.batchDetails.forEach(item=>{
                    this.constant[item.badgeName] = item.percentage;
                })
            }
        },err=>{
            console.log(err.error)
            if(err.error.error == 'No Data Found'){
                this.alertService.info(this.commonLabels.mandatoryLabels.badgeDataFound);
            }
        })

    }

    resetPercentage() {
        this.getbadgepercentage();
        this.constant.gold = null;
        this.constant.platinum = null;
        this.constant.silver = null;
        this.constant.bronze = null;
    }

    badgePercentageUPdate(name, value) {
        this.constant.badgesRequired = false;
        if (this.percentageArray.length) {
            let index = this.percentageArray.find(x => x.value === value);
            if (index) {
                switch (name) {
                    case "platinum":
                        this.constant.platinum = "null";
                        this.percentageTakenError.platinum = true;
                        this.percentageTakenError.gold = false;
                        this.percentageTakenError.silver = false;
                        this.percentageTakenError.bronze = false;
                        break;
                    case "gold":
                        this.constant.gold = "null";
                        this.percentageTakenError.platinum = false;
                        this.percentageTakenError.gold = true;
                        this.percentageTakenError.silver = false;
                        this.percentageTakenError.bronze = false;
                        break;
                    case "silver":
                        this.constant.silver = "null";
                        this.percentageTakenError.platinum = false;
                        this.percentageTakenError.gold = false;
                        this.percentageTakenError.silver = true;
                        this.percentageTakenError.bronze = false;
                        break;
                    case "bronze":
                        this.constant.bronze = "null";
                        this.percentageTakenError.platinum = false;
                        this.percentageTakenError.gold = false;
                        this.percentageTakenError.silver = false;
                        this.percentageTakenError.bronze = true;
                        break;
                }
            }
            else if (value === "null") {
                let index = this.percentageArray.findIndex(x => x.name === name);
                this.percentageArray.splice(index, 1);
            }
            else {
                let index = this.percentageArray.findIndex(x => x.name === name);
                index >= 0 ? this.percentageArray.splice(index, 1) : '';
                value !== "null" ? this.percentageArray.push({ "name": name, "value": value }) : '';
                this.percentageTakenError.platinum = false;
                this.percentageTakenError.gold = false;
                this.percentageTakenError.silver = false;
                this.percentageTakenError.bronze = false;
            }
        }
        else {
            this.percentageArray.push({ "name": name, "value": value })
        }
    }

    customOptions: any = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        responsive: {
            0: {
                items: 1
            },
            307: {
                items: 2
            },
            614: {
                items: 3
            },
            921: {
                items: 4
            }
        },
        nav: true,
        navText: ['<', '>']
    }

  
   openDeleteTemplate(template: TemplateRef<any>,certificateId){
     this.constant.modalRef = this.modalService.show(template);
      this.certificateId = certificateId;
   }

   deleteCertificate(){
       this.commonService.deleteCertificate(this.certificateId).subscribe(res=>{
          if(res.isSuccess){
            this.constant.modalRef.hide();
            this.alertService.success(this.commonLabels.msgs.badgeSuccessMsg);
            this.getCertificate();
          }
       })
   }


    openAddtemplate(template: TemplateRef<any>, certificateId) {
        this.constant.modalRef = this.modalService.show(template, this.constant.modalConfig);
        if (certificateId) {
            this.certificateId = certificateId;
            this.commonService.getParticularCertificate(this.certificateId, this.resortId).subscribe(result => {
                const certificateValues = result.data.certificates[0];
                this.constant.tempName = certificateValues.certificateName;
                this.constant.fileToUpload = certificateValues.certificateHtml;
                this.filePath = result.data.path.uploadPath;
                this.htmlView = this.filePath + certificateValues.certificateHtml;
            });
        } else {
            this.certificateId = '';
        }
    }


     htmlFileUpload(htmlFile) {
        this.commonService.uploadFiles(htmlFile).subscribe(result => {
            if (result && result.isSuccess) {
                this.htmlPath = result.path;
                this.htmlName = result.data[0].filename;
                this.htmlView = this.certificateId ? this.filePath + this.htmlName : '';
            } else {
                this.alertService.error(result.error);
            }
        }, err => {
              this.alertService.error(err.error.error);
              return;
        });
     }

    // Template File Upload
    handleFileInput(files: FileList) {
        this.constant.fileToUpload = files.item(0);
        this.htmlFileUpload(this.constant.fileToUpload);
    }


    uploadTemplate() {

    }

    //dynamic add form
    addForm() {
        let checkEmpty = {};
        checkEmpty = this.constant.templateAssign.length ? this.constant.templateAssign.find(x=>{ return x.course == null}) : {};
        if(checkEmpty){
            this.alertService.error(this.commonLabels.mandatoryLabels.selectCourse)
        }else{
            let obj = {
                course: null,
                template: null
            };
            this.constant.templateAssign.push(obj);
        }
    }

    checkCourse(id){
        let valueArr = this.constant.templateAssign.map(function(item){ return parseInt(item.course) });
        let isDuplicate = valueArr.some(function(item, idx){ 
            return (valueArr.indexOf(item) != idx)
        });
        if(isDuplicate){
            let idx =  this.constant.templateAssign.length -1;
            this.constant.templateAssign[idx] = {
                course: null,
                template: null
            };
            this.alertService.error(this.commonLabels.mandatoryLabels.courseUnique);
        }
    }

    //Assign template to batch
    assignBatchTemplate(form) {
        let checkEmpty = [];
        checkEmpty = this.constant.templateAssign.length ? this.constant.templateAssign.filter(x=>{ return (x.course == null || x.template == null)}) : [];
        if(checkEmpty.length){
            this.alertService.error(this.commonLabels.mandatoryLabels.profileMandatory);
        }
        else{
            let data = this.constant.templateAssign.map(item=>{
                let obj = {
                    courseId : item.course,
                    certificateId : item.template,
                    certificateMappingId : ''
                }
                item.mappingId ? obj.certificateMappingId = item.mappingId : delete obj.certificateMappingId;
                return obj
            })
            let params = {"certificateCourses":data,removeCertificateIds : []};
            this.removeCertificateIds.length ? params.removeCertificateIds = this.removeCertificateIds : delete params.removeCertificateIds;
            // console.log(params ,"checkEmpty",this.constant.templateAssign)
            this.commonService.assignCertificate(params).subscribe(resp=>{
                if(resp && resp.isSuccess){
                    this.getAssignCertificateDetails();
                }  
            })
        }     
    }

    //Batch percentage selection
    batchSelection(form) {
        const badges = form.value;
        if (badges.gold != null && badges.platinum != null && badges.silver != null && badges.bronze != null) {
           if(this.batchDetails.length){
                let data = this.batchDetails.map((item,i)=>{
                    delete item.created;
                    delete item.updated;
                    if(item.badgeName == 'platinum'){
                        item.percentage = this.constant.platinum;
                    }
                    if(item.badgeName == 'gold'){
                        item.percentage = this.constant.gold;
                    }
                    if(item.badgeName == 'silver'){
                        item.percentage = this.constant.silver;
                    }
                    if(item.badgeName == 'bronze'){
                        item.percentage = this.constant.bronze;
                    }
                    return item;
                })
                let obj = {"badges" : data}
                this.commonService.addBadges(obj).subscribe(resp=>{
                    // console.log(resp);
                })
           }
           else{
            let obj = 
            {"badges" :
                [
                    {"badgeName" : "platinum","percentage" : form.value.platinum,"resortId" : this.resortId},
                    {"badgeName" : "gold","percentage" : form.value.gold,"resortId" : this.resortId},
                    {"badgeName" : "silver","percentage" : form.value.silver,"resortId" : this.resortId},
                    {"badgeName" : "bronze","percentage" : form.value.bronze,"resortId" : this.resortId}
                ]   
            }
            this.commonService.addBadges(obj).subscribe(resp=>{
                if(resp && resp.isSuccess){
                    this.getBadgeDetails();
                }
                else{
                    console.log(resp.message)
                }
            },err=>[
                this.alertService.error(err.message)
            ])
           }
            // window.scrollTo(0, 0);
            this.alertService.success(this.commonLabels.msgs.badgeSuccessMsg);
            // this.clearbatchSelection();
        } else {
            this.constant.badgesRequired = true;
        }
    }

    //Reset Badge Form
    clearbatchSelection() {
        this.editFieldEnable = false;
        this.constant.platinum = null;
        this.constant.gold = null;
        this.constant.silver = null;
        this.constant.bronze = null;
        this.percentageArray = [];
        this.constant.badgesRequired = false;
        this.percentageTakenError.platinum = false;
        this.percentageTakenError.gold = false;
        this.percentageTakenError.silver = false;
        this.percentageTakenError.bronze = false;
    }

    //Reset Form
    clearAssignTemplate() {
        this.constant.templateAssign = [{
            course: null,
            template: null
        }];
    }

    clearMessage() {
        this.clearAssignTemplate();
    }

    removeForm(i) {
        this.constant.templateAssign[i].mappingId ? this.removeCertificateIds.push(this.constant.templateAssign[i].mappingId) : '';
        this.constant.templateAssign.splice(i, 1);
    }

    // Add Certificate Template
    onSave(form) {
        if (form.valid) {
            let apiService;
            // if (this.constant.fileToUpload) {
                const postData = {
                    certificateName: this.constant.tempName,
                    certificateHtml: this.htmlName,
                    certificateHtmlPath: this.htmlPath,
                    resortId: this.utilService.getUserData().ResortUserMappings[0].resortId
                };
                if (!this.certificateId) {
                    apiService =  this.commonService.addCertificate(postData);
                } else {
                    apiService = this.commonService.updateCertificate(this.certificateId, postData);
                }
                apiService.subscribe(result => {
                    if (result && result.isSuccess) {
                        this.alertService.success(result.data);
                        this.getCertificate();
                    } else {
                        this.alertService.error(result.error.error);
                    }
                 } , err => {
                      this.alertService.error(err.error.error);
                      return;
                });
                this.alertService.success(this.commonLabels.msgs.uploadSuccessMsg);
                this.clearAddForm();
            // } else {
            //     //  this.toastr.error(this.constant.uploadErrMsg);
            //     this.alertService.error(this.commonLabels.mandatoryLabels.uploadErrMsg);
            // }
        }

    }

    //clear Add Certificate
    clearAddForm() {
        this.constant.modalRef.hide();
        this.constant.tempName = "";
        this.constant.fileToUpload = null;
    }
}

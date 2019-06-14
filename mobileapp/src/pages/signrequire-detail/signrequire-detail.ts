import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constant } from '../../constants/Constant.var';

@IonicPage({
    name: 'signrequire-page'
})

@Component({
  selector: 'page-signrequire-detail',
  templateUrl: 'signrequire-detail.html',
})

export class SignrequireDetailPage {
  
    @ViewChild("videoTag") videotag: ElementRef;
  Files;
  imageType;
  filePath;
  fileType;
  truncating = true;
  showPreView;
  uploadPath;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public constant:Constant) {
          console.log(this.navParams.data);
          let data = this.navParams.data;
          this.Files = data.files;
          this.uploadPath = data.uploadPath;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignrequireDetailPage');
    this.showPreView = this.getFileExtension(this.Files.fileUrl);
  }


    getFileExtension(filename) {
        let ext = /^.+\.([^.]+)$/.exec(filename);
        let fileType = ext == null ? "" : ext[1];
        let fileLink;
        switch (fileType) {
            case "pdf":
                fileLink = "assets/imgs/pdf.png";
                this.imageType = true;
                this.filePath = filename;
                this.fileType = fileType;
                break;
            case "txt":
                fileLink = "assets/imgs/text.png";
                this.imageType = true;
                this.filePath = filename;
                this.fileType = fileType;
                break;
            case "doc":
                fileLink = "assets/imgs/doc.png";
                this.imageType = true;
                this.filePath = filename;
                this.fileType = fileType;
                break;
            case "ppt":
                fileLink = "assets/imgs/ppt.png";
                this.imageType = true;
                this.filePath = filename;
                this.fileType = fileType;
                break;
            case "xlsx":
                 fileLink = 'assets/imgs/xlsx.png';
                 this.imageType = true;
                 this.filePath = filename;
                 this.fileType = fileType;
                 break;
            case "png" :
            case "jpg" :
                 fileLink = this.uploadPath + filename;
                 this.imageType = true;
                 this.filePath = filename;
                 this.fileType = fileType;
                 break;
            default:
                fileLink = this.uploadPath + filename;
                this.imageType = false;
                this.filePath = filename;
                this.fileType = fileType;
        }
       
        return fileLink;
    }

    goBack(){
      this.navCtrl.setRoot('course-page');
    }

}

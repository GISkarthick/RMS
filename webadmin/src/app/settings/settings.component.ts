import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from '../services/header.service';
import { ToastrService } from 'ngx-toastr';
import {SettingVar} from '../Constants/setting.var';
import { Location } from '@angular/common';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
})

export class SettingsComponent implements OnInit {

    settings: any = {
        oldPwd: '',
        newPwd: '',
        confirmPwd: '',
    };
   constructor(private location: Location,private headerService:HeaderService,private toastr:ToastrService,private router:Router,private constant:SettingVar){}

   ngOnInit(){
    this.headerService.setTitle({ title: 'Settings', hidemodule: false});
   }
   updatePwd(){
    if(this.settings.newPwd !== this.settings.confirmPwd){
        this.toastr.error('Password Mismatch');
    }else{
        this.toastr.success('Password updated successfully');
        this.router.navigateByUrl('/dashboard');
    }
    }

}
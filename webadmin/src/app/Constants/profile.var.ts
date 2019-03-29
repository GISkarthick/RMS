import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProfileVar {
    profileLabels = {
      name        :  'Name',
      dob         :  'DOB',
      email       :  'Email',
      mobile      :  'Mobile',
      designation :  'Designation',
      dept        :  'Department',
      empId       :  'Employee ID'
    };
    btns = {
        save        : 'SAVE',
        editProfile : 'Edit Profile'
     };
     mandatoryLabels ={
         name        : 'Name is required',
         email       : 'Email is required',
         mobile      : 'Mobile Number is required',     
         designation : 'Designation is required',
         invalidEmail: 'Invalid Email',
         invalidMobile : 'Invalid Mobile Number' ,  
         dept        : 'Department is required'  
     };
     successMsg='Profile saved Successfully';
     title= 'Profile';
     userName;
     dob;
     empId;
     dept;
     designation;
     mobile;
     email;
     split_url;
     hideProfile=false;
     hideEditProfile=true;
    
}
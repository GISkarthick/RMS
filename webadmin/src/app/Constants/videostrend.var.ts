import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideosTrendVar {
   videosTrendLabels = {
       courseTitle    : 'Course & Title',
       duration       : 'Duration',
       uploadedDate   : 'Uploaded Date',
       totalEmployees : 'Total Employees' 
   };

   videosTrendDetailsLabels ={
       courseName   : 'Course Name',
       videoName    : 'Video Name',
       uploadedDate : 'Uploaded Date',
       totalEmployees : 'Total No of Employees'
   };
   empTableTitle={
       empName    : 'Employee Name',
       status     : 'Status',
       viewDate   : 'View Date',
       completedDate : 'Completed Date'
   };

   exportTo   = 'Export To';
   excel      = 'Excel';
   select     = 'Select';
   pdf        = 'PDF';
   noData     = 'No Data';
   title      = 'Course Trend';
   pdfExcelTitle ='Course Trend';
   videosTrend;
   moduleList:any=[];
   moduleType=null;
   pageLimitOptions=[];
   pageLimit;
   videoId;
   filterEmployeeList=[];
   url;

}
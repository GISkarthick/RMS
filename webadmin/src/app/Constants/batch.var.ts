import { Injectable } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Injectable({ providedIn: 'root' })

export class BatchVar{

   labels = {
        from       : 'Assigned Date',
        to         : 'Due Date',
        batchName  : 'Training Schedule Name',
        selectDept  : 'Department',
        module     : 'Program',
        mandatory  : 'Mandatory',
        optional   : 'Optional',
        percentage : 'Pass %',
        courses    : 'Courses'    ,
        regNote    : 'Send Notification Every'    
    };
    calLabels = {
        next     : 'Next',
        today    : 'Today',
        previous : 'Previous',
        month    : 'Month',
        week     : 'Week',
        day      : "Day"
    };
    btns={
        clear  : 'CANCEL',
        create : 'CREATE',
        save   : 'SAVE'
    };
    mandatoryLabels = {
         from         : 'From date is required.',
         to           : 'To date is required.',
         batchName    : 'Training Schedule is required.',
         selectDept   : 'Department is required.',
         dateValidate : 'From date should be less than To Date.',
         passpercentage : 'Pass Percentage is required.' ,
         dateLimitError : 'Assigned date should be less than due date'  ,
         minCountError : 'Minutes value should be less than 60',
         hourCountError : 'Hours value should be less than 24',
         notificationError : 'Valid notification reminder count is required'
    };
     
    title = 'Add New Training Schedule';
    editTitle = 'Edit New Training Schedule';
    calendarTitle = 'Training Schedule Calendar';
    calendarView = 'Calendar View';
    batchSuccessMsg = 'Training Schedule Added Successfully';
    batchErrMsg = 'Training Schedule Updated Successfully';
    invalidModule = 'Invalid Program Selection';
    select = 'Select';
    dategreater=false;
    empValidate=false;
    moduleDuplicate= false;
    employeeList: IMultiSelectOption[];
    selectedEmp;
    moduleList;
    programList;
    percentageList;
    url;
    moduleForm = [{
        moduleId : 1,
        program: "null",
        passpercentage:"null",
        mandatory :"true",
     }];
     batchFrom;
     batchTo;
     min;
     employeeId;
     batchName;
     batchList;
     batchId;
     regDuration=[
         {"id":1,"name":"minutes"},
         {"id":2,"name":"hours"},
         {"id":3,"name":"days"}
     ];
}
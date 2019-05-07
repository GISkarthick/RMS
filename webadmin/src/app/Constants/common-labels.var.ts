import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CommonLabels{
        
    labels = {
        "createdBy"         :   "Create By",
        "createdOn"         :   "Created On",
        "lastModifiedOn"    :   "Last Modified On",
        "noOfTrainingClass" :   "No. of Training Class",
        "noOfContentFiles"  :   "No. of Content Files",
        "noOfEmployee"      :   "No. of Employees",
        "fileSize"          :   "File Size",
        "file"              :   "Files",       
        "count"             :   "Count:",
        "edit"              :   "Edit",
        "viewQuiz"          :   "View Quiz",
        "video"             :   "Video(s)",
        "document"          :   "Document(s)",
        "filter"            :   "Filter",                
        "deleteDoc"         :   "Delete Document",
        "deleteCourse"      : "Delete Course",
        "deleteDocConfirmation": "Are you sure you want to delete this document?",
        "upload"            :   "Upload",
        "cancel"            :   "Cancel",
        "cmsLibrary"        :   "CMS Library",
        "course"            :   "Course",
        "trainingClass"     :   "Training Class",
        "videos"            :   "Videos",
        "documents"         :   "Documents",
        "notification"      :   "Notification",
        "quiz"              :   "Quiz",
        "selectUsers"       :   "User",
        "recentlyDelete"    :   "Recently Deleted",
        "duplicate"         :   "Duplicate",        
        "saveAsNew"         :   "Save As New Version",
        "desktop"           :   "Desktop",
        "fileName"          :   "File Name",
        "description"       :   "Description",
        "isRequired"        :   "is Required",
        "fileisRequired"    :   "File is Required",         
        "type"              :   "Type",
        "length"            :   "Length",
        "noofEmp"           :   "No.of Emp.",
        "permission"        :   "Permission",
        "action"            :   "Action",
        "select"            :   "Select" ,
        "courseName"        :   "Course Name",
        "videoTitle"        :   "Video Title",       
        "uploadVideos"      :   "Upload Videos",
        "active"            :   "Active",
        "resort"            :   "Resort",
        "division"          :   "Division",
        "department"        :   "Department",
        "employees"         :   "All Employees",       
        "deleteVideo"       :   "Delete Video",
        "coursedeleteConfirmation": "This file will be deleted from all courses,Do you still want to  continue?",
        "courseDelConfirmation": "Are you sure you want to delete this course?", 
        "selectopt"         :   "--Select Training Class--",
        "selectcourse"      :   "--Select course--",
        // "video"           : "Video",
        "assignTo"          :   "Assign To",
        "questionType"      :   "Question Type",
        "question"          :   "Question",
        "options"           :   "Options",
        "answer"            :   "Answer",
        "true"              :   "True",
        "false"             :   "False",
        "weightage"         :   "Weightage",
        "totalNoOfQuestions":   "Total No of Question(s)",
        "deleteQuiz"        :   "Delete Quiz",
        "deleteConfirmation":   "Are you sure you want to delete this quiz question?",
        "a"                 :   "A",
        "b"                 :   "B",
        "c"                 :   "C",
        "d"                 :   "D",
        "selectptdivision"  :   "--Select Parent Division--",
        "selectptdpmt"      :   "--Select Parent Department --",
        "selectchildresort" :   "--Select Child Resort--",
        "selectchilddivi"   :   "--Select Child Division--",
        "selectchilddpmt"   :   "--Select Child Department --",
        "selectcreateuser"  :   "--Select Create user --",
        "selectcoursestoschedule" : "Select courses to Schedule a training",
        "userName"          :   "User Name",
        "role"              :   "Role",        
        "mobile"            :   "Mobile",
        "reportingTo"       :   "Reporting to",
        "defaultSetting"    :   "Default Setting",
        "email"             :   "Email",
        "employeeId"        :   "Emp ID",
        "updateRestrictMsg" :   "Unable to perform update user",
        "addRestrictMsg"    :   "Unable to perform add user",
        "mandatoryFields"   :   "Fill all user data fields",
        "emailError"        :   "Please enter valid mail id",
        "mobileError"       :   "Please enter valid mobile number",
        "userUpdated"       :   "User updated successfully",
        "userAdded"         :   "User added successfully",
        "removeUser"        :   "removed from the list",
        "deleteUser"        :   "Delete User",
        "deleteDivision"    :   "Delete Division",
        "deleteConfirmuser" :   "Are you sure you want to delete this user?",
        "deleteRole"        :   "Delete Role",
        "deleteRoleConfirmation": "Are you sure you want to delete this role?",
        "deleteDivisionConfirmation": "Are you sure you want to delete this division?",       
        "noData"            :   "No data",
        "addDivision"       :   "Add Division",
        "editDivision"      :   "Edit Division",
        "addRole"           :   "Add Role",
        "editRole"          :   "Edit Role",
        "userManagement"    :   "User Management",
        "hierarchy"         :   "Hierarchy",
        "listofRole"        :   "List Of Role",
        "rolesPermission"   :   "Roles & Permission",
        "divisionName"      :   "Division Name",
        "entertheDepartment":   "Enter the Department",
        "resortName"        :   "Resort Name",
        "location"          :   "Location",      
        "utilizedSpace"     :   "Utilized Space",
        "numberOfUser"      :   "No.of Users",
        "status"            :   "Status",            
        "deleteResort"      :   "Delete Resort",
        "deleteResortConfirmation" : "Are you sure you want to delete this resort?",       
        "subscribTyp"       :   "Subscription Type",
        "totalStorage"      :   "Total Storage Space",       
	    "roles"             :   "Roles",	    
	    "menu"              :   "Menu",
	    "view"              :   "View",	 
	    "editdele"          :   "Edit / Delete",
        "web"               :   "Web",
        "addModule"         :   "Add Program",
        "editModule"        :   "Edit Program",
        "editCourse"        :   "Edit Course",
        "accessTo"          :   "Access To",
        // "topics"            :   "Topic",
        "coursesAdded"      :   "Training Class Added",
        "addCourseTitle"    :   "Add New Training Class",
        "editCourseTitle"   :   "Edit Training Class",
        "trainingClassName" :   "Training Class Name",    
        "showAll"           :   "Show All",
        "videoAddedToast"   :   "Course files added successfully",
        "videoUpdatedToast" :   "Course files updated successfully",       
        "moduleCreateMsg"   :   "Course Created Successfully",
        "moduleUpdateMsg"   :   "Course Updated Successfully",
        "moduleCreateError" :   "Unable to create course",
        "courseError"       :   "Minimum one training class is required*",
        "noDatacreate"      :   "No Training Classes Created Yet",
        "activeMsg"         :   "is Activated",
        "deactiveMsg"       :   "is Deativated",
        "moduleNameValidation": "Program Name already taken",
        "addCourseSuccess"  :   "Training Class added successfully",
        "updateCourseSuccess":  "Training Class updated successfully",
        // "removeVideoSuccess" : " removed from the file list",
        "topicName"         :   "Topic Name",        
        "contentFiles"      :   "Content Files",
        "createNotification":   "Create Notification",
        "scheduleTraining"  :   "Schedule A Training",
        "createCourse"      :   "Create Course",        
        "acceptedFileTypes" :   "Accepted file types: PPT, TXT, MP4, JPG, DOC, MPEG, AVI",
        "from"              :   "Assigned Date",
        "to"                :   "Due Date",
        "batchName"         :   "Training Schedule Name",        
        "module"            :   "Program",
        "mandatory"         :   "Mandatory",
        "optional"          :   "Optional",
        "percentage"        :   "Pass %",
        "courses"           :   "Courses",
        "regNote"           :   "Send Notification Every",
        "invalidModule"     :   "Invalid Program Selection",
        "calendarView"      :   "Calendar View",
        "forumName"         :   "Forum Name",
        "empCount"          :   "Employee count",
        "activeInActive"    :   "Active / Inactive",
        "lastactivedate"    :   "Last Active Date",
        "editForum"         :   "Edit Forum",
        "createForum"       :   "Create Forum",
        "forum"             :   "Forum",
        "topics"            :   "Topics",
        // empName     : 'Department',
        "admin"             :   "Admin",
        "selDept"           :   "Select Department",
        "selAdmin"          :   "Select Admin",
        "star"              :   "*",
        "votes"             :   "Votes",
        "batch"             :   "Batch",      
        "template"          :   "Template",
        "tempName"          :   "Template Name",      
        "fileUpload"        :   "Upload your HTML File",
        "chooseFile"        :   "Choose File",
        "badge"             :   "Badge",
        "gold"              :   "Gold",
        "silver"            :   "Silver",
        "bronze"            :   "Bronze",
        "diamond"           :   "Diamond",
        "platinum"          :   "Platinum",
        "subName"           :   "Subscription Name",
        "allocatedSpace"    :   "Allocated Space",
        "availableSpace"    :   "Available Space",
        "maxcourse"         :   "Max no of Courses",
        "license"           :   "No of Licenses",
        "tenure"            :   "Tenure",
        "year"              :   "Years",
        "month"             :   "Months",
        "actFrom"           :   "Active From",
        "expOn"             :   "Expire On",              
    };

    btns = {
        "ok"                :   "Ok",
        "update"            :   "Update",
        "cancel"            :   "Cancel",
        "save"              :   "Save",
        "print"             :   "Print",
        "workinProgress"    :   "Work in Progress",
        "scheduleTraining"  :   "Schedule a Training",
        "createNotification":   "Create Notification",
        "createCourse"      :   "Create Course",
        "add"               :   "Add",
        "addNew"            :   "Add New",
        "assign"            :   "Assign",
        "yes"               :   "Yes",
        "no"                :   "No",
        "create"            :   "Create",
        "set"               :   "Set",
        "addvideocourse"    :   "Add Video to Course",
        "addQuiz"           :   "Add Quiz",
        "apply"             :   "Apply",
        "clearFilter"       :   "Clear Filter",
        "uploadEmp"         :   "Bulk Upload",
        "addUser"           :   "Add User",
        "editUser"          :   "Edit User",
        "next"              :   "Next",
        "publish"           :   "Publish",       
        "today"             :   "Today",
        "previous"          :   "Previous",
        "month"             :   "Month",
        "week"              :   "Week",
        "day"               :   "Day",
        "back"              :   "Back",
        "renewPlan"         :   "Renew Plan",
        "availPlan"         :   "Available Plan"
    };

    titles = {
        "cmsLibrary"        :  "CMS Library",
        "userManagement"    :  "User Management",
        "resortmanagement"  :  "Resort Management",
        "addresortmagnt"    :  "Add Resort Management",
        "rolepermission"    :  "Roles & Permissions",
        "calendarTitle"     :  "Training Schedule Calendar",
        "editTitle"         :  "Edit New Training Schedule",
        "forumtitle"        :  "Forum",
        "certificate"       :  "Certificates",
        "certiTempl"        :  "Certificates Templates",
        "subscription"      :  "Subscription Model"   
    };

    imgs = {
        "profile" : "assets/images/Add_Profile_Picture.png",
        "close"   : "assets/images/close.png",
        "close1"  : "assets/images/Close-1.png",
        "ok"      : "assets/images/Done.png",
        "cancel"  : "assets/images/cancel2.png",
        "cancel1" : "assets/images/cancel-icon.png",
        "calendar": "assets/images/cal.png",
        "user1"   : "assets/images/user-icon1.png",
        "user2"   : "assets/images/user-icon2.png"


    };

    mandatoryLabels = {
        "videoTitle"        :  "Video Title is required",
        "courseName"        :  "Course Name is required",
        "description"       :  "Description is required",   
        // "selectDept"     :  "Department is required.",
        "selectResort"      :  "Resort is required.",
        "selectEmp"         :  "Employee is required.",
        // "selectDivision" :  "Division is required." ,
        "courseRequired"    :  "Course is required." ,
        "trainingClassrequired" : "Training Class is required.",
        "videoName"         :  "Video name is required",
        "isRequired"        :  "is required",
        "empId"             :  "Employee Id is required",
        "empIdExist"        :  "User ID already exist",
        "empName"           :  "Employee name is required",
        "dept"              :  "Department is required.",
        "designation"       :  "Designation is required",
        "emailId"           :  "Email Id is required",
        "emailInvalid"      :  "Invalid Email",
        "mobNo"             :  "Mobile number is required",
        "invalidMobNo"      :  "Invalid Mobile Number",
        "reportingTo"       :  "Reporting is required",
        "division"          :  "Division is required",
        "divisionName"      :  "Division",
        "department"        :  "Department",
        "locationRequired"  :  "Location is required",
        "resortRequired"    :  "Resort Name is required",
        "statusRequired"    :  "Status is required",  
        "roles"             :  "Role is required",
        "mandatFieldsmiss"  :  "mandatory fields missing",
        "courseNameError"   :  "Training Class name is required",
        "videoError"        :  "Minimum one file data required", 
        "from"              :  "From date is required.",
        "to"                :  "To date is required.",
        "batchName"         :  "Training Schedule is required.",     
        "dateValidate"      :  "From date should be less than To Date.",
        "passpercentage"    :  "Pass Percentage is required.",
        "dateLimitError"    :  "Assigned date should be less than due date"  ,
        "minCountError"     :  "Minutes value should be less than 60",
        "hourCountError"    :  "Hours value should be less than 24",
        "notificationError" :  "Valid notification reminder count is required",  
        "forumRequired"     :  "Forum Name is required",
        "topicRequired"     :  "Topic is required",          
        "adminRequired"     :  "Admin is required" ,
        "tempNameMandatory" :  "Template Name is required.",
        "uploadErrMsg"      :  "Template File is mandatory",
        "badgepercentageError" : "Badge pass percentage already assigned",
        "badgeRequiredMsg"  :  "Select All Badge Percentages",
        "assignErrMsg"      :  "Invalid Batch Selection",
        "subsRequired"      :  "Subscription Name is required",
        "storageSpace"      :  "Total Storage Space is required",
        "MaxcourseRequired" :  "Max no of Courses is required",
        "licenseRequired"   :  "No of Licenses is required",
        "tenureYear"        :  "Year is required",
        "tenureMonth"       :  "Month is required",
        "accessTo"          :  "Access To is Required",
        "roleName"          :   "Role Name is Required",
        "users"             :  "User is required"
     };

     modaltitle ={
        "addnewtrainingschedule" : "Add New Training Schedule",
        "editVideo"              : "Edit Video",
        "addcertTemplate"        : "Add Certificate Template" 
     }
     msgs = {
        "rolesuccessMsg"    :   "Roles & Permissions Saved Successfully",
        "updateSuccessMsg"  :   "Forum updated successfully",
        "addSuccessMsg"     :   "Forum created Successfully",
        "nameUniqueErr"     :   "Forum Name is already exist.",
        "uploadSuccessMsg"  :   "Certificate Template uploaded successfully",
        "assignSuccessMsg"  :   "Template Assigned Successfully",
        "badgeSuccessMsg"   :   "Badges Selected Successfully",

    }

}
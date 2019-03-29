import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardVar {

   topEmployees = [];
   topResorts = [];
   userName;
   courses;
   url;
   keyStat;
   badgesCertification;
   newEmployee;
   weekGrowth;
   moduleList;
   moduleType = null;
   yearList;
   years = "2018";
   taskChart;
   courseTrendData;
   certificationTrend;
   feedbackData;
   empProgress;
   visitorsResort;
   resortList;
   empDropdown = 1;
   visitorsData;
   staffData;
   total = 'total';
   title = 'Dashboard';
   task = 'Task';
   select = 'Program';
   avgWeekly = 'Average weekly';
   avgQualification = 'Average Qualification';
   totEmp = "Total Employee";
   emp = 'Employees';
   selectResort = 'Select Resort';
   weeklyGrowth = 'Weekly Growth';
   cloudy = 'CLOUDY';
   temp = '-4';
   degree = 'o';
   celcius = 'C';
   monthDropdown = "This Month";
   recentComments;
   employeeTabLabel = 'Employee';
   resortTabLabel = 'Resort';
   recentComment = 'Recent Comment';
   employeeTabText = {
      'wishes': 'Good Morning',
      'name': 'Adams',
      'notification': 'You have 5 important tasks today, Some messages and notifications.'
   };
   symbols = {
      comma: ',',
      apostrophe: '!',
      percentage: '%'

   };
   btns = {
      editTasks: 'Edit Tasks',
      quickTasks: 'Quick Tasks',
      openCalendar: 'Open Calendar'
   };
   employeeGridsTitle = {
      totalCourses: 'Total Courses',
      availableCourses: 'Assigned Courses',
      completedCourses: 'Completed Courses',
      inProgress: 'In Progress',
      videosTrend: 'Course Trend',
      employeeProgress: 'Employee Progress',
      totalNoOfBadges: 'Total No. of Badges',
      certificationTrend: 'Employee Certification Trend',
      topEmployees: 'Top 5 Employees',
      topCourses: 'Top Rated Courses',
      keyStats: "Key Stats",
      name: "Name",
      module: "Program",
      score: "Score"
   };

   resortGridsTitle = {
      visitors: 'Visitors',
      staff: 'Staff',
      feedbackRating: 'Feedback & Rating',
      visitorsByResort: 'Visitors By Resort',
      reservationByResort: 'Reservation By Resort',
      topResorts: 'Top 10 Resorts',
      resort: 'Resort',
      badges: 'Badges',
      certification: 'Certification'
   };

   topEmployeeDropdown = [{
      "id": 1,
      "value": 'This Month'
   }, {
      "id": 2,
      "value": 'Previous Month'
   }, {
      "id": 3,
      "value": 'Last 3 Months'
   }]





}

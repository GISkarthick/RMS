import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class API_URL {

  public static URLS = {


    //Forum//
    getForumList: '5c32e1e22e00006b00121d6a',
    //*getForumList : '5c17879a2f00008200b087a8',
    getAdminList: '5c2e12912f00005d0017542a',


    //Program//
    ProgramModuleList: '5c416f6c0f0000233ee7b7b8',
    //ProgramModuleList : '5c36f14c3000005b001f60e1',

    //Certificate Templates//
    getTemplateList: '5c34b04e2e0000490037902a',
    getBadgePercentage: '5c3436f52e00006d00378c9a',
    getCoursesList: "5c34596a2e00007d00378d8d",


    //Training Batch//
    getNewBatchList: '5c34ae832e00004a0037901f',
    getProgramList: '5c2de3ee2f00001c3d1752bb',
    //getNewBatchList : '5c2e16a32f0000a052175443',

    //User//
    getDepartments: '5c25fa2a300000540067f651',
    getDesignations: '5c29c1d22e00006a00c18ac7',

    //Programs//
    getModuleCourseList: "5c35ccbf300000670021b539",
    getCoureseDetails: "5c2e11db2f00003847175427",

    //Dashboard//
    getKeyStat: "5c04dd7f330000e900d01e32",
    getCourses: "5c2dbf2e2f000056301751f7",
    getEmployeeProgress: '5c3458c92e00009000378d89',
    getCertificationTrend: '5c32f85c2e00007400121dcd',
    //getTopEmployees      : "5c04e6cf3300002900d01e56",
    getTopEmployees: "5c2e14522f0000ba47175436",
    getvisitorsByResorts: "5c2df1f32f0000384717533d",
    getTotalNoOfBadges: "5c3716a23000006f001f61b1",
    getTopResorts: "5c2df06d2f00005a00175329",
    getTopCourses: "5c25bdcc300000620067f58b",
    getBadgesAndCertification: '5c373a0830000086001f6309',
    getReservationByResort: '5c2df39d2f0000b73617534f',
    getQuiz: '5c0f73143100002c0924ec31',
    getFeedbackRating: '5c28ddc73300007400a58bb5',
    getVideoTrendList: '5c1b552b33000066007fd6db',
    getVideoTrendEmpList: '5c2e12ca2f00005d0017542c',
    //*Needed-getModuleList        : '5c18f3502f00002a00af12f9',
    //*getModuleDetails     : "5c1a2a833200006c0064afa0",
    getModuleDetails: '5c35c79d300000790021b503',
    getEmployeeStatus: '5c2debd22f0000ba47175307',
    getEmployeeDetails: '5c3330f72e00002b00121f06',
    getTaskResortChart: '5c3847ee3100003600a98f24',
    getCourseTrendChart: '5c2dbe012f000017331751f2',
    getYearList: '5c1355633400007500ecdf6f',
    //*needed - moduleCourseList     : '5c24973f30000077007a6042',
    getEmployeeList: '5c0928d52f0000c21f637cd0',
    getUsers: '5c35ea0a300000600021b667',
    getUsersList: '5c3344022e0000f508121fab',
    //*getUsersList      : '5c260d313000007f0067f6ba', 
    // Content To Bo Live
    getModuleList: '5c28b1fd3300005900a58b80',
    //moduleCourseList:'5c28aec43300004e00a58b7d'
    getResortList: '5c2df79b2f0000a230175376',
    //*** */ moduleCourseList: '5c2deec42f00003747175314',
    // moduleCourseList: '5c332c832e00006b00121ee1',
    //moduleCourseList :'5c359ca23000008e0021b3d2',
    moduleCourseList: '5c35f1bd3000008f0021b692',
    getNotifications: '5c2f13d23200001000590603',
    getVisitorsStaffData: '5c2ef7383200007200590561',
  }

}



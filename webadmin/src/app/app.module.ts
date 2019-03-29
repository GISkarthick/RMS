import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SettingsModule } from './settings/settings.module';
import { VideosTrendModule } from './videostrend/videostrend.module';
import { EmployeeModule } from './employee/employee.module';
import { ProfileModule } from './profile/profile.module';
import { ForumModule } from './forum/forum.module';
import { moduleModule } from './module/module.module';
import { BatchModule } from './batch/batch.module';
import { CertificatesModule } from './certificates/certificates.module';
import { UserModule } from './user/user.module';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './alert.component';
import { EmailModule } from './email/email.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword/:id', component: ResetpasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    moduleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    DashboardModule,
    CertificatesModule,
    BatchModule,
    HttpClientModule,
    SharedModule,
    ForumModule,
    SettingsModule,
    VideosTrendModule,
    ProfileModule,
    FormsModule,
    EmployeeModule,
    UserModule,
    EmailModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

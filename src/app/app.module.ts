import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmpComponent } from './task4/add-emp/add-emp.component';
import { ShowEmpComponent } from './task4/show-emp/show-emp.component';
import { DescriptionComponent } from './dashboard/description/description.component';
import { TabsComponent } from './dashboard/tabs/tabs.component';
import { EducationComponent } from './dashboard/education/education.component';
import { PersonalComponent } from './dashboard/personal/personal.component';
import { SkillsComponent } from './dashboard/skills/skills.component';
import { CompletedComponent } from './dashboard/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterAppComponent,
    FormComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddEmpComponent,
    ShowEmpComponent,
    DescriptionComponent,
    TabsComponent,
    EducationComponent,
    PersonalComponent,
    SkillsComponent,
    CompletedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

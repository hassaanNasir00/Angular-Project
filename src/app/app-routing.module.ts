import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },

  { path: 'counter', component: CounterAppComponent },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

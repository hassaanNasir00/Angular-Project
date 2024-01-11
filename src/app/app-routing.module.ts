import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'counter', component: CounterAppComponent },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

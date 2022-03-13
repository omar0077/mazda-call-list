import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallInUseComponent } from './features/customer-calls/pages/call-in-use/call-in-use.component';
import { CallListComponent } from './features/customer-calls/pages/call-list/call-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calls',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

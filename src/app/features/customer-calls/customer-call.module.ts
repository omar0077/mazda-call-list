import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CallListComponent } from './pages/call-list/call-list.component';
import { CallInUseComponent } from './pages/call-in-use/call-in-use.component';
import { CallDataService } from './services/customer-calls.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calls',
    component: CallListComponent,
  },
  {
    path: 'calls/:id',
    component: CallInUseComponent
  },
];

@NgModule({
  declarations: [
    CallListComponent,
    CallInUseComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [CallDataService],
  exports: [],
})
export class CustomerCallModule { }

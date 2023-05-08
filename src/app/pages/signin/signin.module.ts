import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  }
]

@NgModule({
  declarations: [
    SigninComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }

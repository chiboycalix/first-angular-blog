import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
              CommonModule, MaterialModule, RouterModule, FormsModule
           ],
  exports: [
              NavbarComponent, CommonModule, MaterialModule, RouterModule, FormsModule
           ],
  declarations: [NavbarComponent]
})
export class SharedModule { }

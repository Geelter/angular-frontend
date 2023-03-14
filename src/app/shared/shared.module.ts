import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    StepsModule,
  ],
  exports: [
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    StepsModule,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    PanelModule,
  ],
  exports: [
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    PanelModule,
  ],
})
export class SharedModule {}

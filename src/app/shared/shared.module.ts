import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { EditorModule } from 'primeng/editor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    PanelModule,
    TieredMenuModule,
    ImageModule,
    CardModule,
    EditorModule,
    ProgressSpinnerModule,
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    RippleModule,
    PanelModule,
    TieredMenuModule,
    ImageModule,
    CardModule,
    EditorModule,
    ProgressSpinnerModule,
  ],
})
export class SharedModule {}

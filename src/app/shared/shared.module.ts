import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    EditorModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SidebarModule,
    StyleClassModule,
    TieredMenuModule,
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    EditorModule,
    FormsModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SidebarModule,
    StyleClassModule,
    TieredMenuModule,
  ],
})
export class SharedModule {}

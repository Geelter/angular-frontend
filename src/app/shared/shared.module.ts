import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from 'primeng/steps';
import { StyleClassModule } from 'primeng/styleclass';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    EditorModule,
    FormsModule,
    ImageModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PaginatorModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SidebarModule,
    StepsModule,
    StyleClassModule,
    TieredMenuModule,
    ToastModule,
  ],
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    EditorModule,
    FormsModule,
    ImageModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PaginatorModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SidebarModule,
    StepsModule,
    StyleClassModule,
    TieredMenuModule,
    ToastModule,
  ],
})
export class SharedModule {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
})
export class PostEditorComponent {
  @Input() cardHeader: string;

  @Input() cardContent: string;

  editorActive = false;

  editorContent = '';

  toggleEditor() {
    this.editorActive = !this.editorActive;
  }
}

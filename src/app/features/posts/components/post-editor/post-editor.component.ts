import { Component } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
})
export class PostEditorComponent {
  editorActive = false;

  editorContent = '';
}

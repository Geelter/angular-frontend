import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  constructor(private messageService: MessageService) {}

  showSuccess(summary: string, detail = '') {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
    });
  }

  showError(summary: string, detail = '') {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      sticky: true,
    });
  }

  showErrorConfirm(summary: string, detail = '', key: string) {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      key: key,
      sticky: true,
    });
  }

  clearMessages(key: string) {
    this.messageService.clear(key);
  }
}

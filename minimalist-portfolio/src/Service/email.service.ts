import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { emailMessage } from '../Model/email.model';
import { MessageService } from 'primeng/api';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private pkey: string = environment.EMAILJS_PUBLIC_KEY;
  private sKey: string = environment.EMAILJS_SERVICE_ID;
  private tKey: string = environment.EMAILJS_TEMPLATE_ID;

  loading: boolean[] = [false];

  constructor(private messageService: MessageService,) { }

  initEmail(): boolean {
    try {
      if (!this.pkey) {
        this.showFailed();
        return false;
      }

      emailjs.init(this.pkey);
      return true;

    } catch (error) {
      this.showFailed();
      return false;
    }
  }


  sanitizeInput(template: emailMessage) {
    return {
      client_name: template.client_name.replace(/<[^>]*>?/gm, ''),
      client_email: template.client_email.replace(/<[^>]*>?/gm, ''),
      client_message: template.client_message.replace(/<[^>]*>?/gm, ''),
      destination_email: template.destination_email.replace(/<[^>]*>?/gm, ''),
    };
  }

  sendEmail(template: emailMessage) {

    const ini = this.initEmail();

    if (!ini) {
      return;
    }

    // Sanitize the input to prevent XSS attacks
    const sanitizeTemplate: Record<string, unknown> = this.sanitizeInput(template) as Record<string, unknown>;

    this.loading[0] = true;
    this.showInfo();

    emailjs.send(this.sKey, this.tKey, sanitizeTemplate).then(
      (resp) => {
        this.loading[0] = false;
        this.showSuccess();
      },
      (err) => {
        this.loading[0] = false;
        this.showFailed("Failed to send email");
      },
    );
  }


  showInfo(message: string = "Sending Email...") {
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: message, life: 3000 });
  }
  showSuccess(message: string = "Email Sent Successfully") {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }
  showFailed(message: string = "Failed to load") {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  }
}

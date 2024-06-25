import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../Service/email.service';
import { emailMessage } from '../../Model/email.model';
import { ToastModule } from 'primeng/toast';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule, SocialsComponent],
  templateUrl: './contact.component.html',
})
// This component is responsible for sending emails to the destination email address.
export class ContactComponent implements OnInit {
  // This property is used to access the form in the HTML template.
  @ViewChild('registerForm') registerForm: NgForm | undefined;
  // These properties are used to store the client's name, email, and message.
  name: string = '';
  email: string = '';
  message: string = '';
  // This property is used to validate the email address.
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // This property is used to store the loading state of the email sending process.
  emailSending: boolean[] = [false];

  // This constructor injects the EmailService to send emails.
  constructor(
    private emailService: EmailService,
  ) { this.emailSending = this.emailService.loading; }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  // This method sends an email to the destination email address with the client's name, email, and message. 
  sendEmail() {
    // Prevent the form from submitting without validation
    if (!this.registerForm?.invalid) {
      // Create an email message object
      const emailMessage: emailMessage = {
        client_name: this.name,
        client_email: this.email,
        client_message: this.message,
        destination_email: 'gabferreira983@gmail.com',
      }
      // Send the email message
      this.emailService.sendEmail(emailMessage);
      // Reset the form
      this.registerForm?.reset();
    }
  }
}

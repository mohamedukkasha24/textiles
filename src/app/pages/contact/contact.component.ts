import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  sendEmail(form: NgForm, event: Event) {
    if (form.valid) {
      const target = event.target as HTMLFormElement;

      emailjs
        .sendForm(
          'service_g31enas', // 🔑 your EmailJS Service ID
          'template_la0iyfe', // 🔑 your Template ID
          target, // ✅ actual HTML form element
          'C710QmoAQpHRQSJ1r' // 🔑 your Public Key
        )
        .then(() => {
          alert('✅ Message sent successfully!');
          form.reset();
        })
        .catch((err) => {
          console.error('EmailJS Error:', err);
          alert('❌ Failed to send message. Please try again later.');
        });
    }
  }
}

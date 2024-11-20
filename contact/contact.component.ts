import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageSent = false;
  blinkInterval: any;

  onSubmit() {
    this.messageSent = true;
    const messageBox = document.getElementById('msgBox');

    // Start blinking the message box
    if (messageBox) {
      let visible = true;
      this.blinkInterval = setInterval(() => {
        visible = !visible;
        messageBox.style.visibility = visible ? 'visible' : 'hidden';
      }, 500); // Toggle every 500ms
    }

    // Stop blinking after 3 seconds
    setTimeout(() => {
      this.messageSent = false;
      clearInterval(this.blinkInterval);
      if (messageBox) messageBox.style.visibility = 'visible'; // Ensure it remains visible after stopping
    }, 3000);
  }
}

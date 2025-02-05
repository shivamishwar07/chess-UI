import { Component } from '@angular/core';

@Component({
  selector: 'app-contect-us',
  templateUrl: './contect-us.component.html',
  styleUrls: ['./contect-us.component.scss']
})
export class ContactUsComponent {
  contactInfo = {
    addresses: [
      {
        location: 'Manasa Hospital Rd, opposite to Coastal Bommireddy Srinivas Hospital, Danavai Peta, Rajamahendravaram, Andhra Pradesh 533103',
        googleMapsLink: 'https://goo.gl/maps/U6ciZDtaKma5eXKY7'
      }
    ],
    phoneNumbers: ['+91 62821250967', '+91 9885302468'],
    emails: ['karthikgopal04@gmail.com', 'chandramouli545454@gmail.com'],
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100064992371383',
      twitter: 'https://www.twitter.com',
      instagram: 'https://www.instagram.com',
      linkedin: 'https://www.linkedin.com'
    }
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Data Submitted:', this.formData);
    alert('Thank you for contacting us!');
    this.formData = { name: '', email: '', message: '' }; // Reset form
  }
}
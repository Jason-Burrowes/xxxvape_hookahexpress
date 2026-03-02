import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { jsPDF } from 'jspdf';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

type AccountType = 'business' | 'individual';

@Component({
  selector: 'app-become-retailer',
  templateUrl: './become-retailer.component.html',
  styleUrls: ['./become-retailer.component.css'],
})
export class BecomeRetailerComponent {
  accountType: AccountType = 'business';
  isSubmitting = false;
  submitMessage = '';

  businessTypes = [
    'Smoke Shop',
    'Convenience Store',
    'Online Retailer',
    'Wholesale Distributor',
    'Other',
  ];

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    businessName: '',
    businessType: '',
  };

  get isBusiness(): boolean {
    return this.accountType === 'business';
  }

  setAccountType(type: AccountType): void {
    this.accountType = type;

    if (type === 'individual') {
      this.formData.businessName = 'Individual';
      this.formData.businessType = 'Individual';
      return;
    }

    if (this.formData.businessName === 'Individual') {
      this.formData.businessName = '';
    }

    if (this.formData.businessType === 'Individual') {
      this.formData.businessType = '';
    }
  }

  async submitForm(form: NgForm): Promise<void> {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('XXX Vape Retailer Application', 14, 20);

    doc.setFontSize(11);
    const rows = [
      ['First Name', this.formData.firstName],
      ['Last Name', this.formData.lastName],
      ['Email', this.formData.email],
      ['Address', this.formData.address],
      ['Account Type', this.accountType],
      ['Business Name', this.formData.businessName],
      ['Business Type', this.formData.businessType],
    ];

    let y = 35;
    rows.forEach(([label, value]) => {
      doc.text(`${label}: ${value}`, 14, y);
      y += 8;
    });

    const fileName = `xxxvape-retailer-${Date.now()}.pdf`;
    const pdfBlob = doc.output('blob');
    const pdfDataUri = doc.output('datauristring');

    try {
      const uploadUrl = `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloudName}/raw/upload`;
      const uploadData = new FormData();
      uploadData.append('file', pdfBlob, fileName);
      uploadData.append('upload_preset', environment.cloudinary.uploadPreset);
      uploadData.append('resource_type', 'raw');

      const uploadResponse = await fetch(uploadUrl, {
        method: 'POST',
        body: uploadData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Cloudinary upload failed');
      }

      const uploadResult = await uploadResponse.json();
      const hostedUrl = uploadResult.secure_url as string;

      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          to_email: environment.emailjs.toEmail,
          first_name: this.formData.firstName,
          last_name: this.formData.lastName,
          from_email: this.formData.email,
          address: this.formData.address,
          account_type: this.accountType,
          business_name: this.formData.businessName,
          business_type: this.formData.businessType,
          download_link: hostedUrl,
          download_name: fileName,
        },
        {
          publicKey: environment.emailjs.publicKey,
        },
      );

      doc.save(fileName);
      this.submitMessage =
        'Email sent with a hosted PDF link. PDF also downloaded locally.';
    } catch (error) {
      doc.save(fileName);
      this.submitMessage =
        'PDF downloaded. Upload/email failed—check Cloudinary and EmailJS settings.';
    } finally {
      this.isSubmitting = false;
    }
  }
}

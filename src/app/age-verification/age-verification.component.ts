import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.css']
})
export class AgeVerificationComponent implements OnInit {
  disclaimerAccepted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmAge(): void {
    if (this.disclaimerAccepted) {
      localStorage.setItem('ageVerified', 'true');
      this.router.navigate(['/landing']);
    }
  }

  decline(): void {
    window.location.href = 'https://www.google.com';
  }
}

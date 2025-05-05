import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { DividerModule } from 'primeng/divider';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DividerModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss',
})
export class DevisComponent implements OnInit {
  publicKey: string = 'qMKDtBUHNPpEPlfO7';
  serviceID: string = 'service_1z5qcga';
  templateID: string = 'template_lbg';
  form: FormGroup;
  isMobile: boolean = false;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.form = this.fb.group({
      from_firstname: ['', Validators.required],
      from_lastname: '',
      from_email: ['', Validators.required],
      from_phone: ['', Validators.required],
      message: ['', Validators.required],
      from_adress: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 769;
  }

  async send() {
    if (this.form.valid) {
      emailjs.init(this.publicKey);
      await emailjs.send(this.serviceID, this.templateID, {
        from_lastname: this.form.value.from_lastname,
        from_firstname: this.form.value.from_firstname,
        from_email: this.form.value.from_email,
        from_phone: this.form.value.from_phone,
        message: this.form.value.message,
        from_adress: this.form.value.from_adress,
      });
      this.alertService.showSuccessAlert('Vôtre message à bien été envoyé');
      this.form.reset();
    } else {
      this.alertService.showWarningAlert('Veuillez remplir tous les champs');
    }
  }
}

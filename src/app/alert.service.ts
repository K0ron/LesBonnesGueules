import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  showWarningAlert(message: string) {
    Swal.fire({
      title: 'Attention ⚠️',
      text: message,
      icon: 'warning',
      showConfirmButton: false,
      //confirmButtonText: 'OK',
      position: 'top',
      timer: 2000,
      width: '400px',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
      },
    });
  }

  showSuccessAlert(message: string) {
    Swal.fire({
      title: 'Succès 🚀',
      text: message,
      //icon: 'success',
      //confirmButtonText: 'Super !',
      position: 'top',
      timer: 3000,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
      },
    });
  }
}

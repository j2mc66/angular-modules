import { Injectable } from '@angular/core';
import Swal, { SweetAlertType } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private alert(text: string, title: string = null, icon: SweetAlertType = null) {
    return Swal({
        type: icon,
        title: title ? title : text,
        text: title ? text : null,        
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
  }

  success(text: string = 'Proceso realizado con éxito.', title: string = null) {
      return this.alert(text, title, 'success');
  }

  info(text: string, title: string = null) {
      return this.alert(text, title, 'info');
  }

  warning(text: string, title: string = null) {
      return this.alert(text, title, 'warning');
  }

  error(text: string = 'Error en el proceso.', title: string = null) {
      return this.alert(text, title, 'error');
  }

  confirm(text: string, danger: boolean = false, title: string = 'Confirmación') {      
    return Swal({
        title: title,
        text: text,
        type: 'info',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
        allowEscapeKey: false,
    })
  }
}

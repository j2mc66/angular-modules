import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private alert(text: string, title: string = null, icon: string = null) {
    return swal({
        title: title ? title : text,
        text: title ? text : null,
        icon: icon,
        closeOnClickOutside: false,
        closeOnEsc: false,
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
    return swal({
        title: title,
        text: text,
        icon: 'info',
        buttons: ['Cancelar', 'Aceptar'],
        dangerMode: danger,
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
  }
}

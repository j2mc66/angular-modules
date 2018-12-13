import { Injectable } from '@angular/core';
import { swal } from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private alert(text: string, title: string = null, icon) {
    return swal({
        title: title ? title : text,
        text: title ? text : null,
        icon: icon
    });
  }

  alertOk(text: string = 'Proceso realizado con éxito.', title: string = null) {
      return this.alert(text, title, 'success');
  }

  alertInfo(text: string, title: string = null) {
      return this.alert(text, title, 'info');
  }

  alertWarning(text: string, title: string = null) {
      return this.alert(text, title, 'warning');
  }

  alertError(text: string = 'Error en el proceso.', title: string = null) {
      return this.alert(text, title, 'error');
  }

  confirm(text: string, danger: boolean = false, title: string = 'Confirmación'): Promise<boolean> {
      return new Promise((res) => {
          swal({
              title: title,
              text: text,
              icon: 'info',
              buttons: ['CANCELAR', 'ACEPTAR'],
              dangerMode: danger
          }).then((ok) => {
              if (ok) {
                  res(true);
              } else {
                  res(false);
              }
          });
      });
  }

  alertRedirect(text: string, title: string = null) {
      return swal({
              title: title,
              text: text,
          });
  }
}

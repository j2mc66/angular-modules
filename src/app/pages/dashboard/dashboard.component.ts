import { Component, OnInit } from '@angular/core';
import { AlertService } from '@/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    swal({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    }).then(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file.value);
      reader.onload = (e) => {
        swal({
          title: 'Your uploaded picture',
          imageUrl: reader.result.toString(),
          imageAlt: 'The uploaded picture'
        })
      }
      
    })
  }  
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  angularForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

   }

  createForm(){
    this.angularForm = this.fb.group({
      email: '',
      pwd: '',
      address: '',
      city: '',
      zip: ''
    });
  }




myFrmSubmit(){
  console.log(this.angularForm);
}


  ngOnInit() {
  }

}

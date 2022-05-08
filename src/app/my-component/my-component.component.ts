import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  message: string = '';

  constructor() { }

  display(myForm: NgForm) {
    if (myForm.value.nom != '' && myForm.value.age!= '') {
      this.message= "hello "+myForm.value.nom+" vous avez "+myForm.value.age+" ans";
    } else {
      this.message = 'please enter your name and your age';
    }
   
  }

  ngOnInit(): void {
  }

}

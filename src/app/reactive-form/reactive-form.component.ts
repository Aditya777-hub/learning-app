
import { V } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  regForm!: FormGroup;
fname: any;

// constructor(){}
//   ngOnInit(){
//     this.regForm=new FormGroup({
//   id:new FormControl(),
//   fname:new FormControl(),
//   lname:new FormControl(),
//   email:new FormControl(),
//   mobileno:new FormControl(),
//     }) 
//   }

constructor(private _fb:FormBuilder){}

  ngOnInit(){
    this.regForm=this._fb.group({
  id:[''],
  fname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
  lname:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  mobileno:['',Validators.required],
    }) 

    // this.regForm.get('fname')?.valueChanges.subscribe(firstname=>{
    //   console.log('fname value :' +firstname)
    // })

    // this.regForm.get('lname')?.valueChanges.subscribe(lastname=>{
    //   console.log('lname value : '+lastname)
    // })

this.regForm.valueChanges.subscribe(formData=>{
  console.log('fname value : '+formData.fname);
  console.log('lname value : '+formData.lname);
  console.log('email value : '+formData.email);
  console.log('mobileno value : '+formData.mobileno);
})

  }

  register(formdata:FormGroup){
// console.log(formdata.value) // OR
console.log(this.regForm.value) // do this
console.log(formdata.valid);

console.log(this.regForm.get('fname')?.value);
console.log(this.regForm.get('email')?.value);
  }

  reset(){
    // this.regForm.reset()

    this.regForm.reset({
      fname: this.regForm.get('fname')?.value
    })
  }

  fillData(){
    this.regForm.patchValue({
      // id : 133,
      fname : 'Aditya',
      lname : 'gade',
      email : 'a@gamil.com',
      mobileno : '6575867857',
    })
  }
  
  }








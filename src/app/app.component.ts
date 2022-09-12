import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { LocalStorage } from '../../.angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'priya';

  // localStorage
  // document.cookie

  list=[
    1,2,3,4,5
  ];

  userInfo = this.fb.group({
    firstName:[''],
    lastName: [''],
    favFood: this.fb.array([
      [""],[""],[""],[""],[""]
    ])
  })

  ngOnInit(): void {


  }

  constructor(private fb: FormBuilder) {}

  display() {
    console.log(this.userInfo.value);
  }
}

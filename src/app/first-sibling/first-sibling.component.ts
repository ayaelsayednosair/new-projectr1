
import { Component,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-first-sibling',
  templateUrl: './first-sibling.component.html',
  styleUrls: ['./first-sibling.component.css']
})
export class FirstSiblingComponent{

@Output() userstran:EventEmitter< any>=new EventEmitter< any>();

  one: string = "name";
  two: string ="user name";
  three: string = "email";
  event: any = "";
  frist: number = 1;
  name: string = "aya";
  username: string = "nosair";
email:string="";

  message = "";

  inputData = {
    frist:" ",
    name: " ",
    username: " ",
    email:"",
  };
  listData: any[] = [];
  //void

  //return

  //event

  onclick(event: any) {

    this.inputData["name"] = this.name;
    this.inputData["username"] = this.username;
    this.inputData["email"] = this.email;
    this.listData.push({ ...this.inputData });

    console.log(this.inputData);
    console.log(this.listData);
  }
  remove(index: any) {
    this.listData.splice(index, 1);
  }

userstrans(pat: any){
this.userstran.emit(pat)
}
}

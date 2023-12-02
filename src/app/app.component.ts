import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two';
  users!:any;
  receivedData(para:any){
this.users=para;
console.log('parantdata'+para.name);
  }
}

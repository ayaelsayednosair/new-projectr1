import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-second-sibling',
  templateUrl: './second-sibling.component.html',
  styleUrls: ['./second-sibling.component.css']
})
export class SecondSiblingComponent {
@Input() user!:any;
}

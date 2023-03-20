import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack-agency';
  nums = [10, 20, 24, 32, 40, 52];
  sum = () => {
    return this.nums[0] + this.nums[1];
  }
  red = "background-color:red";
  green = "background-color:green";

  message = "";

  clickMe = (val: string) => {
    this.message = val;
  }

  show = true;
  toggle_show = () => {
    this.show = !this.show;
  }

  add_num = () => {
    this.nums.push(Math.floor(Math.random() * 100) + 1);
  }

  delete_num = () => {
    this.nums.pop();
  }
}

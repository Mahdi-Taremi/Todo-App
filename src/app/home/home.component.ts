import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  projectText: string = 'Angular';
  projects: string[] = [];
  constructor() {}
  ngOnInit(): void {
    this.counter = this.projects.length;
  }

  addTask() {
    this.projects.push(this.projectText);
    this.projectText = '';
    this.counter = this.projects.length;
  }
  // removeTask(i: number) {
  //   this.projects.splice(i, 1);
  //   this.counter = this.projects.length;
  // }
}

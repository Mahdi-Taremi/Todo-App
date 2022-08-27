import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

interface Task {
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  projectText: string = '';
  projects: Array<Task> = [];
  constructor(private ref: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.counter = this.projects.length;
  }
  addTask(input: any) {
    if (!this.projectText) {
      alert('Please type the desired Todo Task');
    } else {
      let value = input.value;
      input.value = '';

      this.projects.push({
        title: value,
      });
      this.projectText = '';
      this.counter = this.projects.length;
    }
  }
  deleteTask(id: number) {
    let do_delete = confirm('Are you sure to delete the task?');
    if (do_delete) {
      this.projects.splice(id, 1);
      // console.log(this.projects);
      this.counter = this.projects.length;
      this.ref.detectChanges();
    }
  }
  editTask(id: number) {
    let title = this.projects[id].title;
    let result = prompt('Edit Task Title', title);
    if (result !== null) {
      this.projects[id].title = result;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  BackHome() {
    console.log('Back');

    this.route.navigate(['']);
  }
}

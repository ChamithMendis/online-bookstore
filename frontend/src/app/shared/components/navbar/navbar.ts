import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  onTitleClick() {
    this.router.navigate(['/']);
  }
}

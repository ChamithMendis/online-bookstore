import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Sidebar, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  sidebarOpen = false;
  selectedCategory = '';

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.closeSidebar();
  }
}

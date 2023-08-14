import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidebarOpen?: boolean;
  @Output() toggleSidebar= new EventEmitter();

  themeColors: string[] = ['#0892D0', '#c2b490', '#C39EA0', '#671b1b', '#66276c', '#1f232e']

  closeSidebar() {
    this.toggleSidebar.emit()
  }

  changeThemeColor(color: string): void {
    localStorage.setItem('themeColor', color);
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--primary-color-20', `${color}33`);
  }


  updateColor(event: Event): void {
    const colorInputElement = event.target as HTMLInputElement;
    const colorValue = colorInputElement.value;
    if(!colorValue) return;
    this.changeThemeColor(colorValue);
  }
}

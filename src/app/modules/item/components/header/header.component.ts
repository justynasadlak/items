import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  logout: EventEmitter<string> = new EventEmitter();

  onLogout(): void {
    this.logout.emit();
  }
}

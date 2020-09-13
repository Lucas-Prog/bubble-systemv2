import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username: string = '';
  office: string = '';

  @Input('rowSelected') rowSelected: any;

  constructor() {
    let sessionUser: any = sessionStorage.getItem('user');
    if (sessionUser) {
      sessionUser = JSON.parse(sessionUser);
    }
    this.username = sessionUser.name ? this.capitalize(sessionUser.name) : this.username;
    this.office = sessionUser.office === 1 ? 'Mestre' : this.office;
    this.office = sessionUser.office === 2 ? 'Administrador' : this.office;
    this.office = sessionUser.office === 3 ? 'Atendente' : this.office;
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  ngOnInit(): void {}
}

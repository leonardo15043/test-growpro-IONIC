import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mas cerca de ti', url: '/product/nearby', icon: 'paper-plane' },
    { title: 'Catálogo', url: '/product/list', icon: 'bicycle' },
    { title: 'Mis alquileres', url: '/product/rental', icon: 'file-tray-full' },
  ];
  constructor() {}
}


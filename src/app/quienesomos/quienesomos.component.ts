import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-quienesomos',
  standalone: true,
  imports: [TabMenuModule, TableModule],
  templateUrl: './quienesomos.component.html',
  styleUrl: './quienesomos.component.css'
})
export class QuienesomosComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      { label: 'Acerca de nosotros', icon: 'pi pi-chart-line', routerLink: '/quienesomos' },
      { label: 'Productos', icon: 'pi pi-list', routerLink: '/productos' },
    ]
  }

  productos = [
    { name: 'Café Espresso', price: 3.5, inventoryStatus: 'En stock' },
    { name: 'Café Latte', price: 4.0, inventoryStatus: 'En stock' },
    { name: 'Té Verde', price: 2.5, inventoryStatus: 'Agotado' },
    { name: 'Café Americano', price: 3.0, inventoryStatus: 'En stock' },
    { name: 'Té Negro', price: 2.8, inventoryStatus: 'En stock' }
  ];
}

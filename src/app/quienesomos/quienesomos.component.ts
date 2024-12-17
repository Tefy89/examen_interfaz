import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quienesomos',
  standalone: true,
  imports: [TabMenuModule, TableModule, FormsModule, ReactiveFormsModule],
  templateUrl: './quienesomos.component.html',
  styleUrl: './quienesomos.component.css'
})
export class QuienesomosComponent {
  profileForm!: FormGroup;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      { label: 'Acerca de nosotros', icon: 'pi pi-chart-line', routerLink: '/quienesomos' },
      { label: 'Productos', icon: 'pi pi-list', routerLink: '/productos' },
    ];

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  productos = [
    { name: 'Café Espresso', price: 3.5, inventoryStatus: 'En stock' },
    { name: 'Café Latte', price: 4.0, inventoryStatus: 'En stock' },
    { name: 'Té Verde', price: 2.5, inventoryStatus: 'Agotado' },
    { name: 'Café Americano', price: 3.0, inventoryStatus: 'En stock' },
    { name: 'Té Negro', price: 2.8, inventoryStatus: 'En stock' }
  ];

  constructor(private fb: FormBuilder) { }



  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}


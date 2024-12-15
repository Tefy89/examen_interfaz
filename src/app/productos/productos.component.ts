import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TabMenuModule, CarouselModule, ButtonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      { label: 'Acerca de nosotros', icon: 'pi pi-chart-line', routerLink: '/quienesomos' },
      { label: 'Productos', icon: 'pi pi-list', routerLink: '/productos' },
    ]
  }

  products = [
    {
      name: 'Café Americano',
      price: 50,
      image: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg'
    },
    {
      name: 'Café Latte',
      price: 70,
      image: 'https://cdn.pixabay.com/photo/2017/08/07/07/08/coffee-2600892_1280.jpg'
    },
    {
      name: 'Té Verde',
      price: 40,
      image: 'https://cdn.pixabay.com/photo/2017/03/01/05/12/tea-cup-2107599_1280.jpg'
    },
    {
      name: 'Capuchino',
      price: 75,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_640.jpg'
    },
    {
      name: 'Croissant',
      price: 35,
      image: 'https://cdn.pixabay.com/photo/2019/09/29/19/20/sweet-4514136_1280.jpg'
    },
    {
      name: 'Sándwich',
      price: 80,
      image: 'https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg'
    }
  ];

  products1 = [
    {
      name: 'Espresso Doble',
      price: 60,
      image: 'https://cdn.pixabay.com/photo/2018/01/29/10/58/coffee-3115823_640.jpg'
    },
    {
      name: 'Mocaccino',
      price: 80,
      image: 'https://cdn.pixabay.com/photo/2018/05/18/19/58/coffee-3411993_1280.jpg'
    },
    {
      name: 'Té Chai Latte',
      price: 65,
      image: 'https://cdn.pixabay.com/photo/2015/10/07/05/47/chai-975685_640.jpg'
    },
    {
      name: 'Bagel con Queso Crema',
      price: 45,
      image: 'https://cdn.pixabay.com/photo/2016/05/07/12/12/a-sandwich-1377387_640.jpg'
    },
    {
      name: 'Brownie de Chocolate',
      price: 50,
      image: 'https://cdn.pixabay.com/photo/2018/04/24/20/12/dessert-3347905_1280.jpg'
    },
    {
      name: 'Smoothie de Frutas',
      price: 70,
      image: 'https://cdn.pixabay.com/photo/2018/03/13/11/39/fruit-3222313_1280.jpg'
    }
  ];

  products2 = [
    {
      name: 'Café Frappé',
      price: 85,
      image: 'https://cdn.pixabay.com/photo/2017/05/30/12/20/matcha-powder-2356769_640.jpg'
    },
    {
      name: 'Té de Manzanilla',
      price: 40,
      image: 'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_640.jpg'
    },
    {
      name: 'Panqué de Limón',
      price: 55,
      image: 'https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_640.jpg'
    },
    {
      name: 'Matcha Latte',
      price: 90,
      image: 'https://cdn.pixabay.com/photo/2017/05/30/12/20/matcha-powder-2356769_640.jpg'
    },
    {
      name: 'Cheesecake',
      price: 100,
      image: 'https://cdn.pixabay.com/photo/2017/10/01/17/17/raspberry-cake-2806250_640.jpg'
    },
    {
      name: 'Wrap de Pollo',
      price: 95,
      image: 'https://media.istockphoto.com/id/168663653/photo/d%C3%B6ner-kebap-chicken-salad-sandwich-wrap.jpg?s=1024x1024&w=is&k=20&c=ghWVGRmcDXd6RH4EoVQSNYx61-yq0C9uj6LC7AfbbNI='
    }
  ];
  // Agrega más productos si es necesario


  // Opciones de visibilidad y desplazamiento para el carrusel
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 1
    }
  ];

  // Método para determinar la severidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';  // Severidad para "En Stock"
      case 'Out of Stock':
        return 'danger';   // Severidad para "Agotado"
      case 'Low Stock':
        return 'warning';  // Severidad para "Bajo stock"
      default:
        return 'info';     // Severidad por defecto
    }
  }


}


import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    TabMenuModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    CardModule,

  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
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

      image: 'https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_1280.jpg'
    },
    {

      image: 'https://cdn.pixabay.com/photo/2016/11/19/12/54/drink-1839134_1280.jpg'
    },
    {

      image: 'https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_1280.jpg'
    },
    {

      image: 'https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'
    },



  ];

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

  comments = [
    {
      author: 'Ana Pérez',
      text: '¡El café de este lugar es delicioso! Siempre me sorprenden con nuevas variedades y el ambiente es muy acogedor.',
      authorImage: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg'
    },
    {
      author: 'Carlos Gómez',
      text: 'Un lugar perfecto para relajarse con una taza de té. El personal es muy amable y siempre hay algo nuevo para probar.',
      authorImage: 'https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_1280.jpg'
    },
    {
      author: 'María López',
      text: 'Me encanta la calidad de los productos que ofrecen. El café es excelente y los pasteles siempre frescos. ¡Lo recomiendo totalmente!',
      authorImage: 'https://cdn.pixabay.com/photo/2017/07/10/11/28/bulldog-2489829_1280.jpg'
    },
    {
      author: 'María López',
      text: 'Me encanta la calidad de los productos que ofrecen. El café es excelente y los pasteles siempre frescos. ¡Lo recomiendo totalmente!',
      authorImage: 'https://cdn.pixabay.com/photo/2016/11/29/11/24/woman-1869158_1280.jpg'
    },
    {
      author: 'María López',
      text: 'Me encanta la calidad de los productos que ofrecen. El café es excelente y los pasteles siempre frescos. ¡Lo recomiendo totalmente!',
      authorImage: 'https://cdn.pixabay.com/photo/2019/11/07/17/54/woman-4609514_1280.jpg'
    }
  ];




}
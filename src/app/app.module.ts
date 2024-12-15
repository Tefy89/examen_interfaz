import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Importa los módulos específicos de PrimeNG que vayas a usar
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';




// PrimeFlex no necesita importación en Angular porque es CSS puro
// Asegúrate de tenerlo instalado con: npm install primeflex

@NgModule({
    declarations: [
        // Aquí debes declarar todos los componentes que declares en tu aplicación
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule, // Ejemplo: Botones de PrimeNG
        CardModule,
        AppComponent,
        TagModule,
        CommonModule,
        CarouselModule// Ejemplo: Card de PrimeNG
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
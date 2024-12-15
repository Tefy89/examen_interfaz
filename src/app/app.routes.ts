import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { FormularioComponent } from './formulario/formulario.component';

import { ProductosComponent } from './productos/productos.component';
import { QuienesomosComponent } from './quienesomos/quienesomos.component';

// Configuración de las rutas
export const routes: Routes = [


    { path: 'productos', component: ProductosComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'quienesomos', component: QuienesomosComponent },
    { path: 'inicio', component: InicioComponent },


    // Solo una redirección predeterminada
    { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Redirige a la ruta principal
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Importa las rutas
    exports: [RouterModule]                    // Exporta las rutas
})
export class AppRoutingModule { }



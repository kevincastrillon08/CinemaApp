import { NgModule, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';


@NgModule({
    declarations: [
        CarteleraComponent,
        RestauranteComponent,
        PromocionesComponent,
        PeliculaComponent,
        DetallePeliculaComponent
    ],
    exports: [
        CarteleraComponent,
        PeliculaComponent,
        DetallePeliculaComponent,
        RestauranteComponent,
        PromocionesComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
})
export class ComponentsModule {}
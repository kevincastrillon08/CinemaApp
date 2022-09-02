import { Component, OnInit } from '@angular/core';
import { Promociones } from '../../models/promociones';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss'],
})
export class PromocionesComponent implements OnInit {


  listaPromociones: Promociones[] = [{
    titulo: "OBSEQUIO EN EL MES DE TU CUMPLEAÑOS",
    descripcion: "Consulta tu nivel Cine Fans y te premiamos en el mes de tu cumpleaños",
    imagen: "https://www.procinal.com/uploads/HOME/Noticias_Destacados/PROMOCIONES/Promo-CumpleCF.png"
  }, {
    titulo: "TODOS LOS JUEVES SON 15% DE DESCUENTO",
    descripcion: "Jueves de estrenos: 15% de descuento en combos de confitería: Para Uno, Combo Relax, Combo Duo, Mega Combo y Big Combo. Y en los combos 1 y 3 del Café del Cinema de todos los Cinemas Procinal (para Las Américas aplica el combo 2 y 5 del Café del Cinema).",
    imagen: "https://www.procinal.com/uploads/HOME/Noticias_Destacados/PROMOCIONES/Promo-JuevesCF.png"
  }, {
    titulo: "OBSEQUIO EN EL MES DE TU CUMPLEAÑOS",
    descripcion: "Consulta tu nivel Cine Fans y te premiamos en el mes de tu cumpleaños",
    imagen: "https://www.procinal.com/uploads/HOME/Noticias_Destacados/PROMOCIONES/Promo-CumpleCF.png"
  }, {
    titulo: "OBSEQUIO EN EL MES DE TU CUMPLEAÑOS",
    descripcion: "Consulta tu nivel Cine Fans y te premiamos en el mes de tu cumpleaños",
    imagen: "https://www.procinal.com/uploads/HOME/Noticias_Destacados/PROMOCIONES/Promo-CumpleCF.png"
  }, {
    titulo: "OBSEQUIO EN EL MES DE TU CUMPLEAÑOS",
    descripcion: "Consulta tu nivel Cine Fans y te premiamos en el mes de tu cumpleaños",
    imagen: "https://www.procinal.com/uploads/HOME/Noticias_Destacados/PROMOCIONES/Promo-CumpleCF.png"
  }]
  
    
  

  constructor() { }

  ngOnInit() {}

}

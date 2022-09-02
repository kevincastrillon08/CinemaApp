import { Component, OnInit } from '@angular/core';
import { ProductosCategoria } from '../../models/productos-categoria';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss'],
})
export class RestauranteComponent implements OnInit {


  listaProductosPorCategoria: ProductosCategoria[] = [{
    titulo: "Adiciones",
    productos: [{
      nombre: "Porción Tocineta",
      precio: "3700",
      imagen: null
    }, {
      nombre: "Porción Queso Tajado",
      precio: "3700",
      imagen: null
    }, {
      nombre: "Porción Queso Nacho",
      precio: "3700",
      imagen: null

    },{
      nombre: "Porcion De Guacamole",
      precio: "3700",
      imagen: null
    }]


  }, {
    titulo: "Bebidas",
    productos: [{
      nombre: "Icee",
      precio: "10500",
      imagen: null
    }, {
      nombre:"Botella de Agua",
      precio: "5900",
      imagen: null

    }, {
      nombre: "Coca Cola",
      precio: "8100",
      imagen: null
    },{
      nombre: "Jugos Hit",
      precio: "4400",
      imagen: null
    },{
      nombre: "Jugos Naturales",
      precio: "5000",
      imagen: null
    }]
  }, {
    titulo: "Comidas Rapidas",
    productos: [{
      nombre: "Sánduche Doble Jamón y Queso",
      precio: "11900",
      imagen: null

    }, {
      nombre: "Perro Caliente",
      precio: "11900",
      imagen: null

    },{
      nombre: "Nachos Con Queso y Guacamole",
      precio: "11900",
      imagen: null
    }]
  }, {
    titulo: "Snacks",
    productos: [{
      nombre: "Paquete De Papas Familiares",
      precio: "10700",
      imagen: null

    }, {
      nombre: "De Todito Grande",
      precio: "10700",
      imagen: null
    }, {
      nombre: "Chocolatina Jet",
      precio: "3700",
      imagen: null
    }]
  }, {
    titulo: " Tipos De Crispetas",
    productos: [{
      nombre: " Crispetas Personales",
      precio: "13900",
      imagen: null

    }, {
      nombre: "Crispetas Medianas",
      precio: "15900",
      imagen: null
    }]
  }];
  constructor() { }

  ngOnInit() { }

}

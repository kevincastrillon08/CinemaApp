import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss'],
})
export class CarteleraComponent implements OnInit {

  listaPeliculas: Pelicula[] = [
    {
      id: 1,
      portada: "https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg",
      trailer: "https://www.youtube.com/embed/ZaD7iZR0-5w",
      horarios: ["2:00 pm", "4:30 pm", "6:45 pm"],
      nombre: "Thor Ragnarok",
      clasificacion: "10+",
      duracion: "2:45",
      fechaDeEstreno: "07 de julio 2022",
      genero: "accion"
    }, {
      id: 2,
      portada: "https://i.ytimg.com/vi/xTANWIJcSIM/maxresdefault.jpg",
      trailer: "https://www.youtube.com/embed/978oUGtDJ60",
      horarios: ["3:00 pm", "5:30 pm", "7:45 pm"],
      nombre: "Bestia",
      clasificacion: "10+",
      duracion: "2:30",
      fechaDeEstreno: "11 de agostp 2022",
      genero: "accion"
    }, {
      id: 3,
      portada: "https://es.web.img2.acsta.net/pictures/22/05/18/14/52/1524445.jpg",
      trailer: "https://www.youtube.com/embed/JoqmHAr3fu8",
      horarios: ["2:00 pm", "4:30 pm", "8:45 pm"],
      nombre: "Elvis",
      clasificacion: "10+",
      duracion: "2:40",
      fechaDeEstreno: "14 de julio 2022",
      genero: "musical"
    }, {
      id: 4,
      portada: "https://mx.web.img2.acsta.net/pictures/22/07/18/22/00/3110176.jpg",
      trailer: "https://www.youtube.com/embed/jUPwb7yz1Nk",
      horarios: ["8:00 pm", "6:30 pm", "10:45 pm"],
      nombre: "Tren Bala",
      clasificacion: "10+",
      duracion: "2:10",
      fechaDeEstreno: "4 de agosto 2022",
      genero: "accion"
    }, {
      id: 5,
      portada: "https://uip.com.co/veacine/wp-content/uploads/sites/4/2022/04/el-perro-samurai-pelicula-estrenos-veacine-colombia-posters-personajes-hank-web.webp",
      trailer: "https://www.youtube.com/embed/z_6GF4G1uEs",
      horarios: ["8:00 pm", "6:30 pm", "10:45 pm"],
      nombre: "Perro Samurai",
      clasificacion: "10+",
      duracion: "2:30",
      fechaDeEstreno: "11 de agosto 2022",
      genero: "infantil"
    }
  ]; 

  constructor() { }

  ngOnInit() { }

}

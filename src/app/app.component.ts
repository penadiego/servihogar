import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
   title = 'servihogar';
   menuAbierto = false;



  tarjetas = [
  { titulo: 'Lavadoras', descripcion: 'Reparación y mantenimiento de lavadoras de todas las marcas.', img: 'lavadora.png' },
  { titulo: 'Neveras', descripcion: 'Servicio técnico especializado en neveras y refrigeración.', img: 'nevera.png' },
  { titulo: 'Hornos', descripcion: 'Diagnóstico y reparación de hornos eléctricos y a gas.', img: 'horno.png' },
  { titulo: 'Microondas', descripcion: 'Solución de fallas comunes en microondas.', img: 'microondas.png' },
  { titulo: 'Aspiradoras', descripcion: 'Mantenimiento y reparación de aspiradoras domésticas.', img: 'aspiradora.png' },
  { titulo: 'Calentadores', descripcion: 'Instalación y reparación de calentadores de agua.', img: 'calentador.png' },
  { titulo: 'Olla Freidora', descripcion: 'Servicio técnico para freidoras de aire y eléctricas.', img: 'olla.png' },
  { titulo: 'Mantenimiento general', descripcion: 'Revisión preventiva para cualquier electrodoméstico', img: 'mantenimiento.png' }
];



  faqs = [
  {
    pregunta: '¿Las reparaciones tienen garantía?',
    respuesta: 'Sí, ofrecemos garantía según el servicio.',
    abierto: true
  },
  {
    pregunta: '¿Cuánto tiempo tarda una reparación?',
    respuesta: 'Depende del tipo de daño.',
    abierto: false
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Tarjetas, transferencias y efectivo.',
    abierto: false
  }
];

toggleFAQ(index: number) {
  this.faqs[index].abierto = !this.faqs[index].abierto;
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'juego-cacho',
  templateUrl: './juego-cacho.component.html',
  styleUrls: ['./juego-cacho.component.css']
})
export class JuegoCachoComponent {
  numLanzamientos!: number;
  resultados: any[] = [];
  contadorCombinaciones: any = {};
  promedios: any = {};

  jugarCacho() {
    this.resultados = [];
    this.contadorCombinaciones = {
      'Cacho': 0,
      'Poker': 0,
      'Full': 0,
      'Escalera': 0,
      'Trío': 0,
      'Doble par': 0,
      'Par': 0,
      'Nada': 0
    };

    for (let lanzamiento = 1; lanzamiento <= this.numLanzamientos; lanzamiento++) {
      const dados = this.lanzarDados();
      const combinacion = this.obtenerCombinacion(dados);
      this.resultados.push({ lanzamiento, dados, combinacion });
      this.contadorCombinaciones[combinacion] += 1;
    }

    this.calcularPromedio();
  }

  lanzarDados() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
  }

  obtenerCombinacion(dados: number[]) {
    const sortedDados = dados.slice().sort();
    const counts = Array.from(new Set(sortedDados)).map(dado => sortedDados.filter(num => num === dado).length).sort((a, b) => b - a);
    const uniqueCounts = new Set(counts);

    if (counts.join('') === '5') {
      return 'Cacho';
    } else if (counts.join('') === '41') {
      return 'Poker';
    } else if (counts.join('') === '32') {
      return 'Full';
    } else if (counts.join('') === '11111' && uniqueCounts.size === 5 && (sortedDados[4] - sortedDados[0]) === 4) {
      return 'Escalera';
    } else if (counts.join('') === '311') {
      return 'Trío';
    } else if (counts.join('') === '221') {
      return 'Doble par';
    } else if (counts.join('') === '2111') {
      return 'Par';
    } else {
      return 'Nada';
    }
  }

  calcularPromedio() {
    this.promedios = {};
    const totalLanzamientos = this.numLanzamientos;

    for (const combinacion in this.contadorCombinaciones) {
      if (this.contadorCombinaciones.hasOwnProperty(combinacion)) {
        const count = this.contadorCombinaciones[combinacion];
        const promedio = (count / totalLanzamientos * 100).toFixed(2);
        this.promedios[combinacion] = `${promedio}%`;
      }
    }
  }
}



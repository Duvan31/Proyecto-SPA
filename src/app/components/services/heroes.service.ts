import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
   private heroes: Heroe [] = [
    {
      nombre: 'Aquaman',
      bio: 'El poder mas reconocido de Acuaman es la capacidad telepatica para comunicarse a largas distancias',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Batman',
      bio: 'Habilidades como detective. Intelecto nivel genio.Brillante estratega y acróbata experto. Dominio de artes marciales y técnicas de sigilo e intimidación. Escapismo. Uso de equipamiento, dispositivos y armamento de alta tecnología.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      nombre: 'Daredevil',
      bio: 'Los orígenes de Daredevil provienen de un accidente que tuvo en su infancia la cual le dio habilidades especiales.es un maestro en el arte de combate. Posee una fuerza, reflejos, agilidad, acrobacia y resistencia increíbles.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'HULK',
      bio: 'Su principal poder es el aumento exponencial de sus habilidades físicas, por que así como aumenta su fuerza, aumenta también sus demás atributos físicos, siendo más fuerte, más resistente, más inmune y más rápido.',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Se caracteriza por un anillo de poder y la capacidad de crear manifestaciones de luz sólida con los susodichos anillos.',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Spiderman',
      bio: 'Fuerza sobrehumana, velocidad, durabilidad, agilidad, resistencia, reflejos / reacciones, coordinación, equilibrio y resistencia',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: 'Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Superman',
      bio: 'Es un personaje con los poderes estándar que todos conocen de memoria: volar, súpervelocidad, visión de rayos X, visión calorífica, fuerza sobrehumana',
      img: 'assets/img/supermanc.png',
      aparicion: '1938-06-01',
      casa: 'DC'
    },
  ];
  constructor() { }

  getHeroes(): Heroe []{
    return this.heroes;
  }
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

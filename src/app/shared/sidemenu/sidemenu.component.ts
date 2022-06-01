import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[] = [
    {
      texto: "Básicos",
      ruta: "template/basicos"
    },
    {
      texto: "Diámicos",
      ruta: "template/dinamicos"
    },
    {
      texto: "Switches",
      ruta: "template/switches"
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: "Básicos",
      ruta: "reactive/basicos"
    },
    {
      texto: "Diámicos",
      ruta: "reactive/dinamicos"
    },
    {
      texto: "Switches",
      ruta: "reactive/switches"
    },
  ]

}

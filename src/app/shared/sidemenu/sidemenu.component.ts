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

  templateMneu: MenuItem[] = [
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

}

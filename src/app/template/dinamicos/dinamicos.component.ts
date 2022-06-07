import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favoritos: Favoritos[]
}

interface Favoritos{
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Jhonny',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'Contra'}
    ]
  }

  @ViewChild('miFormulario') miFormulario!: NgForm


  nombreValido():boolean{
    return this.miFormulario?.controls['nombre']?.invalid
            && this.miFormulario?.controls['nombre'].touched
  }

  guardar(){
    console.log('Formulario enviado')
  }

  eliminar(id:number){
    this.persona.favoritos.splice(id, 1)
  }

}

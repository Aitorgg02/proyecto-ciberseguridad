import { Component, OnInit } from '@angular/core';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vulnerabilidad',
  templateUrl: './add-vulnerabilidad.component.html',
  styleUrls: ['./add-vulnerabilidad.component.css']
})
export class AddVulnerabilidadComponent implements OnInit {

  public vulnerabilidadNueva!: Vulnerabilidad;

  constructor(public vulnerabilidadservicio:VulnerabilidadServicioService, 
    private router:Router ) { 
      this.vulnerabilidadNueva = new Vulnerabilidad("","","","","","");
    }

  ngOnInit(): void {
  }

  agregarVulnerabilidad(){
    this.vulnerabilidadservicio.guardarVulnerabilidad(this.vulnerabilidadNueva).subscribe(
      response=>{
        console.log(response);
      },
      error =>{
        console.log(error);
        alert("Vulnerabilidad añadida");
        this.router.navigate(['/vulnerabilidades']);
      }
    );
  }

}


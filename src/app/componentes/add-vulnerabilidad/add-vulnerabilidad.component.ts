import { Component, OnInit } from '@angular/core';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-vulnerabilidad',
  templateUrl: './add-vulnerabilidad.component.html',
  styleUrls: ['./add-vulnerabilidad.component.css']
})
export class AddVulnerabilidadComponent implements OnInit {
  titularAlerta:string='';
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
        // alert("Vulnerabilidad añadida");
        Swal.fire('Vulnerabilidad añadida con éxito',this.titularAlerta, 'success');
        this.router.navigate(['/vulnerabilidades']);
      }
    );
  }

}


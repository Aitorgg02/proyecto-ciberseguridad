import { Component, OnInit } from '@angular/core';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import { ActivatedRoute } from '@angular/router';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';



@Component({
  selector: 'app-detalle-vulnerabilidad',
  templateUrl: './detalle-vulnerabilidad.component.html',
  styleUrls: ['./detalle-vulnerabilidad.component.css']
})
export class DetalleVulnerabilidadComponent implements OnInit {

  public id!: string;
  public VulnerabilidadSelected !: Vulnerabilidad;

  constructor(public vulnerabilidadservicio:VulnerabilidadServicioService, 
    private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getVulnerabilidadId(this.id);
  }

  getVulnerabilidadId(id:string){
    this.vulnerabilidadservicio.getVulnerabilidadId(id).subscribe(
      res =>{
        this.VulnerabilidadSelected = res;
        console.log(this.VulnerabilidadSelected);
      },
      error => {
        console.log(error);
      }
    )
  }

}

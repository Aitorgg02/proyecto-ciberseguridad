import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';


@Component({
  selector: 'app-editar-vulnerabilidad',
  templateUrl: './editar-vulnerabilidad.component.html',
  styleUrls: ['./editar-vulnerabilidad.component.css']
})
export class EditarVulnerabilidadComponent implements OnInit {

  public id!:string;
  vulnerabilidadEditada: Vulnerabilidad={
    _id:'',
    nombre:'',
    descripcionCorta:'',
    descripcionLarga:'',
    mitigacion:'',
    foto:'',
  };


  constructor(public vulnerabilidadservicio:VulnerabilidadServicioService, private activateRouter: ActivatedRoute,
    private route:Router) { 
      this.id = this.activateRouter.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.id= this.activateRouter.snapshot.params["id"];
    this.vulnerabilidadservicio.getVulnerabilidadId(this.id).subscribe(
      res=>{
        this.vulnerabilidadEditada=res;
      },

      err=>console.log(err)
    );
  }

  //Con la funcion llamo al servicio para coger la funcion de editar y asi mediante el id puedo editar la vulnerabilidad
  editarVulnerabilidad(){
    this.vulnerabilidadservicio.editarVulnerabilidad(this.id, this.vulnerabilidadEditada).subscribe(
      res=>{
       console.log(res);
      },
      err=>{
        alert("Vulnerabilidad editada");
      this.route.navigate(['/vulnerabilidades']);
      }
    );
  }
}

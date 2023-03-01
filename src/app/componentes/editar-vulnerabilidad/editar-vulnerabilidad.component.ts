import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-vulnerabilidad',
  templateUrl: './editar-vulnerabilidad.component.html',
  styleUrls: ['./editar-vulnerabilidad.component.css']
})
export class EditarVulnerabilidadComponent implements OnInit {

  public id!: string;
  vulnerabilidadEditada: Vulnerabilidad = {
    _id: '',
    nombre: '',
    descripcionCorta: '',
    descripcionLarga: '',
    mitigacion: '',
    foto: '',
  };
  titularAlerta:string='';


  constructor(public vulnerabilidadservicio: VulnerabilidadServicioService, private activateRouter: ActivatedRoute,
    private route: Router) {
    this.id = this.activateRouter.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params["id"];
    this.vulnerabilidadservicio.getVulnerabilidadId(this.id).subscribe(
      res => {
        this.vulnerabilidadEditada = res;
      },

      err => console.log(err)
    );
  }

  editarVulnerabilidad() {
    Swal.fire({
      title: '¿Desea editar la vulnerabilidad?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Editar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.vulnerabilidadservicio.editarVulnerabilidad(this.id, this.vulnerabilidadEditada).subscribe(
          res => {
            console.log(res);
          },
          err => {
            Swal.fire('Vulnerabilidad ' + this.vulnerabilidadEditada.nombre + 'editada',this.titularAlerta,'success');
            //alert("Vulnerabilidad editada");
            this.route.navigate(['/vulnerabilidades']);
          }
        );
      }
    })
   
  }
}

import { Component, OnInit } from '@angular/core';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vulnerabilidades',
  templateUrl: './vulnerabilidades.component.html',
  styleUrls: ['./vulnerabilidades.component.css']
})
export class VulnerabilidadesComponent implements OnInit {
  buscarVulnerabilidad:any;

  constructor(public vulnerabilidadservicio:VulnerabilidadServicioService,
     private router:Router) { }


  ngOnInit(): void {
    this.getVulnerabilidades();
  }

    //Funcion para obtener todas las vulenrabilidades y mostrarlas
  getVulnerabilidades(){
    this.vulnerabilidadservicio.getVulnerabilidades().subscribe(
      res => {
        this.vulnerabilidadservicio.vulnerabilidades = res;
      },
      err => console.log(err)
    );   
  }

  //Funcion para ordenar la lista alfabeticamente
  ordenarAZ(){
    this.vulnerabilidadservicio.getVulnerabilidades().subscribe(
      res => {
        this.vulnerabilidadservicio.vulnerabilidades = res.sort((a,b)=>{
          if(a.nombre < b.nombre){
            return -1;
          }else{
            return 1;
          }
        });
      },
      err => console.log(err)
    );
  }

  //Funcion para ordenar la lista de la Z a la A
  ordenarZA(){
    this.vulnerabilidadservicio.getVulnerabilidades().subscribe(
      res => {
        this.vulnerabilidadservicio.vulnerabilidades = res.sort((a,b)=>{
          if(a.nombre > b.nombre){
            return -1;
          }else{
            return 1;
          }
        });
      },
      err => console.log(err)
    );
  }

  //Funcion para eliminar la vulnerabilidad de la lista
  eliminarVulnerabilidad(id:string){
    Swal.fire({
      title: '¿Seguro que desea eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vulnerabilidadservicio.eliminarVulnerabilidad(id).subscribe((res)=>{
          this.getVulnerabilidades();
          Swal.fire(
            'Vulnerabilidad eliminada.',
            'success'
          )
        },(error)=>{
          console.log(error);
        })
        
      }
    })
  }
  

}



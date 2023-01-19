import { Component, OnInit } from '@angular/core';
import { Vulnerabilidad } from 'src/app/models/vulnerabilidad';
import { VulnerabilidadServicioService } from 'src/app/servicios/vulnerabilidad-servicio.service';
import { Router } from '@angular/router';
 
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
   if(confirm("¿Seguro que desea eliminar?")){
     this.vulnerabilidadservicio.eliminarVulnerabilidad(id).subscribe((res)=>{
       this.getVulnerabilidades();
     },(error)=>{
       console.log(error);
     })
   }
  }

  


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vulnerabilidad } from '../models/vulnerabilidad';
import {Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VulnerabilidadServicioService {
  api = 'http://localhost:3000/api';
  
  private httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  vulnerabilidades!:Vulnerabilidad[];

  constructor(private http:HttpClient) { }

  getVulnerabilidades(){
    return this.http.get<Vulnerabilidad[]>(this.api);
  }

  eliminarVulnerabilidad(_id:string):Observable<any>{
    return this.http.delete(this.api + "/eliminarVulnerabilidad/"+_id);
  }

  getVulnerabilidadId(_id: string) : Observable<any>{
    return this.http.get(this.api + `/vulnerabilidad/${_id}`)
  }

  guardarVulnerabilidad(vulnerabilidad: Vulnerabilidad):Observable<any> {
    return this.http.post(this.api + "/addVulnerabilidad",vulnerabilidad,{headers:this.httpOptions.headers});
  }

  editarVulnerabilidad(_id: string, vulnerabilidad: Vulnerabilidad):Observable<any>{
    return this.http.put(this.api + "/editarVulnerabilidad/" + _id,vulnerabilidad);
  }

}

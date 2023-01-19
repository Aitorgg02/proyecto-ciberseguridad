export class Vulnerabilidad{
    constructor(
       public _id: string,
       public nombre: string,
       public descripcionCorta:string,
       public descripcionLarga:string,
       public mitigacion:string,
       public foto:string
    ) {}
   
}
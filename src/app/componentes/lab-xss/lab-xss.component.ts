import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-lab-xss',
  templateUrl: './lab-xss.component.html',
  styleUrls: ['./lab-xss.component.css']
})
export class LabXSSComponent {
  searchKey: any;
  constructor(private domSanitizer: DomSanitizer) { }

  search(searchTxt: any){
    //Codigo sanitizado a XSS
    //this.searchKey = searchTxt.value;

    //Codigo inyectable a XSS
    this.searchKey = this.domSanitizer.bypassSecurityTrustHtml(searchTxt.value);

    //Escalar code a un openredirect
    //<div onclick="location.href='www.google.com'">hola</div>
    //<div onclick="alert('Hacked')">Hola</div>
  }

}

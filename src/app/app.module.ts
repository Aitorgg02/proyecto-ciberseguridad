import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VulnerabilidadesComponent } from './componentes/vulnerabilidades/vulnerabilidades.component';
import { AterrizajeComponent } from './componentes/aterrizaje/aterrizaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetalleVulnerabilidadComponent } from './componentes/detalle-vulnerabilidad/detalle-vulnerabilidad.component';
import { FormsModule } from '@angular/forms';
import { AddVulnerabilidadComponent } from './componentes/add-vulnerabilidad/add-vulnerabilidad.component';
import { EditarVulnerabilidadComponent } from './componentes/editar-vulnerabilidad/editar-vulnerabilidad.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LabXSSComponent } from './componentes/lab-xss/lab-xss.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VulnerabilidadesComponent,
    AterrizajeComponent,
    FooterComponent,
    DetalleVulnerabilidadComponent,
    AddVulnerabilidadComponent,
    EditarVulnerabilidadComponent,
    LabXSSComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {
  NbTreeGridModule,
  NbSelectModule,
  NbAlertModule,
  NbTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbCheckboxModule } from '@nebular/theme';

import { ProductosRubroComponent } from './rubros/productos-rubro/productos-rubro.component';
import { ComprobacionApropiacionInicialComponent } from './comprobacion-apropiacion-inicial/comprobacion-apropiacion-inicial.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ApropiacionesComponent } from './apropiaciones/apropiaciones.component';
import { ConsultaVigenciaComponent } from './consulta-vigencia/consulta-vigencia.component';
import { ListFuenteComponent } from './fuentes/list-fuente/list-fuente.component';
import { ListProductoComponent } from './productos/list-producto.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ConfiguracionService } from '../../@core/data/configuracion.service';
import { MatStepperModule } from '@angular/material';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { ListSolicitudCdpComponent } from './cdp/list-solicitud-cdp/list-solicitud-cdp.component';
import { VerSolicitudCdpComponent } from './cdp/ver-solicitud-cdp/ver-solicitud-cdp.component';
import { ListCdpComponent } from './cdp/list-cdp/list-cdp.component';
import { ListCrpComponent } from './crp/list-crp/list-crp.component';
import { ListSolicitudCrpComponent } from './crp/list-solicitud-crp/list-solicitud-crp.component';
import { VerSolicitudCrpComponent } from './crp/ver-solicitud-crp/ver-solicitud-crp.component';
import { SolicitudCrpComponent } from './crp/solicitud-crp/solicitud-crp.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    ...routedComponents,
    ProductosRubroComponent,
    ComprobacionApropiacionInicialComponent,
    ApropiacionesComponent,
    ConsultaVigenciaComponent,
    ListFuenteComponent,
    ListProductoComponent,
    DependenciasComponent,
    ListCrpComponent,
    ListSolicitudCdpComponent,
    ListSolicitudCrpComponent,
    VerSolicitudCdpComponent,
    SolicitudCrpComponent,
    ListCdpComponent,
    VerSolicitudCrpComponent,
  ],
  providers: [
    ConfiguracionService,
    ToasterService,
  ],
  imports: [
    ThemeModule,
    SharedModule,
    CommonModule,
    PlanCuentasRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
    NbAlertModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbStepperModule,
    NbCardModule,
    Ng2SmartTableModule,
    ToasterModule,
    MatStepperModule,
    CurrencyMaskModule,
  ],
  exports: [
  ],
  entryComponents: [ListFuenteComponent],
})
export class PlanCuentasModule { }
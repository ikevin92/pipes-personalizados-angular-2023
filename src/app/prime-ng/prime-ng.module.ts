import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}

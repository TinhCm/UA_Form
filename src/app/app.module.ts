import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienBanDanhGiaComponent } from './bien-ban-danh-gia/bien-ban-danh-gia.component';

// Route configuration
import { Routes, RouterModule } from '@angular/router';
const appRouter: Routes = [
  {
    path: 'bien-ban-danh-gia',
    component: BienBanDanhGiaComponent,
  },
];

// Library configuration
import { TreeTableModule } from 'primeng/treetable';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableModule } from 'primeng/table';
import { TreeTableService } from 'primeng/treetable';
@NgModule({
  declarations: [AppComponent, BienBanDanhGiaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
    MatTableModule,
    FormsModule,
    MatInputModule,
    // MatPaginatorModule,
    TableModule,
    TreeTableModule,
  ],
  providers: [TreeTableModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Route configuration
import { Routes, RouterModule } from '@angular/router';

// Library configuration
import { TreeTableModule } from 'primeng/treetable';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    TableModule,
    TreeTableModule,
    InputTextModule,
    DropdownModule,
  ],
  providers: [TreeTableModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

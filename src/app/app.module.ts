import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { FormsModule } from '@angular/forms';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPokemonComponent,
    HomeComponent,
    DetalleComponent,
    FotoPokemonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

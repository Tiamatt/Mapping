// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './routes/routes.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

// components
import { AppComponent } from './app.component';
import { ContentComponent } from './layout/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './routes/main/main.component';
import { PinSvgComponent } from './shared/pin-svg/pin-svg.component';
import { LegendsComponent } from './routes/main/legends/legends.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PinSvgComponent,
    LegendsComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGlhbWF0dCIsImEiOiJjam4xMW1paW0yOWpoM3huMW53cGowb2RoIn0.IXRgljb3wZmoHFckij_Gmw',
    }),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

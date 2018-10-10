// modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // need for toastr
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './routes/routes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl'; // npm package for Mapbox GL free map 
import { NgxSpinnerModule } from 'ngx-spinner';  // npm package for loading spinner
import { ToastrModule } from 'ng6-toastr-notifications'; // npm package for toaster messages

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
    BrowserAnimationsModule,
    AppRoutesModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGlhbWF0dCIsImEiOiJjam4xMW1paW0yOWpoM3huMW53cGowb2RoIn0.IXRgljb3wZmoHFckij_Gmw',
    }),
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Copmponents
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxMapboxGLModule.withConfig({
			accessToken: 'pk.eyJ1IjoiaW5jZHVzdHJ5IiwiYSI6ImNrMDZ6YjdjNDBnZHUzaHB4NzQ5anMydmwifQ.gcwbgp7-p5O62FHG3XLlmg', // Optionnal, can also be set per map (accessToken input of mgl-map)
			geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
		})
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

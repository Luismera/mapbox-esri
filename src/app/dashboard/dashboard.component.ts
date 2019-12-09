import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  map: any;
  center: [-74.094631, 5.0024814];
  zoom: 9;
  private geocenter = new BehaviorSubject<any>(this.center);
	public geocenter$ = this.geocenter.asObservable();
	private mapzoom = new BehaviorSubject<any>(this.zoom);
  public mapzoom$ = this.mapzoom.asObservable();
  collapseLeftMenu: Boolean = true;
	tooltip = { top: 0, left: 0 };
  

  constructor(
		private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  setMap(map) {
    this.map = map;
    this.map.on('mousemove', (e) => {
			document.getElementById('geoinfo').innerHTML = 'Lat: ' + e.lngLat.lat.toFixed(4) + ' Lon: ' + e.lngLat.lng.toFixed(4);
		});
  }

  home(event: any) {
		this.center = [-74.094631, 5.0024814];
		this.zoom = 9;
		this.mapzoom.next(this.zoom);
		this.geocenter.next(this.center);
		this.map.setZoom(this.zoom, null);
		this.cdr.markForCheck();
	}

}

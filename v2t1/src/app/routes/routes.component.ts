import { Component, OnInit, SimpleChange } from '@angular/core';
import { DigitransitService } from '../services/digitransit.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
  
})

export class RoutesComponent implements OnInit {

  pysakki = "Gransinmäki";
  reittiData: any;

  constructor(private digitransitService: DigitransitService) { }

  onEnter(value: string) { // without type info
    this.pysakki = value;
  }

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      console.log(propName);
    }
  }

  ngOnInit() {
    
    this.digitransitService.getRoutes(this.pysakki).subscribe(response =>{
      this.reittiData = response.data.stops[0].routes;
      console.log(this.reittiData);

    });
  }

}

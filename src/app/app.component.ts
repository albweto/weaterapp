import {Component, OnInit} from '@angular/core';
import {WeaterService} from './service/weater.service';
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weater-app';
  location = {cityName: 'London'};
  weather: any;
  weaterdata:any= [];


  constructor(private weaterService: WeaterService) {
    this.getWeather(this.location.cityName);
  }

  ngOnInit(): void {
    /*
    this.weaterService.getWeater('medellin')
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      ),
      this.weaterService.getWeatermultiple('medellin')
        .subscribe(
          res => console.log(res),
          error => console.log(error)
        )*/
  }

  getWeather(cityName: string) {
    this.weaterService
      .getWeater(cityName)
      .subscribe(
        res => {
          console.log(res);


          // @ts-ignore
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  getWaterMultiple(cityName: string) {
    this.weaterService
      .getWeatermultiple(cityName).pipe(pluck('list')).subscribe(
        data => this.futureforescart(data)
    )
  }

  futureforescart(data:any){
    for (let i=0;i<data.length;i=i+8){
      this.weaterdata.push(data[i])
    }
    console.log(this.weaterdata)
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);
      this.getWaterMultiple(cityName.value);

      cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
}

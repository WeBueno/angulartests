import { Component, OnInit } from '@angular/core';
import { AppService } from './services.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  restItems: any[];
  chart = [];

  constructor(private appService : AppService) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.appService.getAll().
      subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);

          let valMax = this.restItems.map(res => res.ValueMax);
          let valMin = this.restItems.map(res => res.ValueMin);
          let dateTm = this.restItems.map(res => res.DateTime);

          let weatherDates = []
          dateTm.forEach((res) => {
              let jsdate = new Date(res)
              weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
          })

          this.chart = new Chart('canvas', {
            type: 'line',
            borderWidth: 50,
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: valMax,
                  borderColor: "#3cba9f",
                  fill: false,
                  label: 'Max Values',
                  },
                {
                  data: valMin,
                  borderColor: "#ffcc00",
                  fill: false,
                  label: 'Min Values'
                },
              ]
            },
            options: {
              legend: {
                display: true
              },
              scales: {
                xAxes: [{
                  display: true,
                }],
                yAxes: [{
                  display: true,
                  ticks: {
                    suggestedMax: 20,
                    stepSize: 2
                  }
                }],
              }
            }
          });

        }
      )
  }

}

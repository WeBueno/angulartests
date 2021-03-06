import { Component, OnInit, ElementRef } from '@angular/core';
import { HomeService } from './home.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Array color for datasets
  colors = ['#ffcc00','#4286f4','#46d6b7','#78ff30','#83fc37','#ffcc00','#ffcc00'];

  restItems: any[]; //Array to manage the ws
  offensorsList: any[]; //Array to manage the ws

  costsChart = [];

  costs = [];

  topOffersorsCC : any[];
  topOffersorsUser : any[];
  topSaversCC : any[];
  topSaversUser : any[];


  constructor(private homeService: HomeService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getOffensors();
    this.getRestItems();
  }

  getOffensors(): void {
    this.homeService.getOffensors().
      subscribe(
        offensorsList => {
          this.offensorsList = offensorsList;

          console.log(offensorsList);

          //let topOffersorsCC = this.offensorsList['CostCenterValueList'].map(res => res);
          this.topOffersorsCC = this.offensorsList['CostCenterValueList'];
          this.topOffersorsUser = this.offensorsList['PortalUserValueList'];

          console.log(this.topOffersorsCC);

        }

      )

  }

  uniquify(arr: any[]) {
    let seen = [];
    //You can filter based on Id or Name based on the requirement
    let uniqueArr = arr.filter(function(item) {
      if (seen.hasOwnProperty(item)) {
          return false;
      } else {
          seen[item] = true;
          return true;
      }
    });
    return uniqueArr;
  }

  // Read all REST Items
  getRestItems(): void {
    this.homeService.getAllCosts().
      subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);

          //Loading periods
          let periods = this.restItems.map(res => res.Period);
          let uniquePeriods = this.uniquify(periods);

          //Loading cost types
          let costTypes = this.restItems.map(res => res.CostTypeName);
          let uniqueCostTypes = this.uniquify(costTypes);

          console.log(costTypes);
          console.log(uniqueCostTypes);

          let i = 0;

          uniqueCostTypes.forEach((res) => {

            console.log('teste');
            let values= [];

            this.restItems.filter(function(obj) {
              console.log((obj.CostTypeName == res));
              return (obj.CostTypeName == res);
            }).map(itm => {
              console.log(itm.CostTypeName);
              console.log(itm);
              values.push(itm.Value);
            });

            if (values.length >= 2) {
              let lastIdx = values.length - 1;
              if (values[lastIdx] > values.length[lastIdx - 1]) {

              } else {

              }
            }

            this.costs.push(
              {
                data: values,
                borderColor: this.colors[i],
                fill: false,
                label: res
              }
            );
            i += 1;
            console.log(values);

          });
          console.log(this.costs);

          let printer = this.restItems.filter(function(obj) {
            return (obj.CostTypeIdentifier == 1);
          }).map(res => res.Value);

          let desktop = this.restItems.filter(function(obj) {
            return (obj.CostTypeIdentifier == 2);
          }).map(res => res.Value);

          console.log(uniquePeriods);
          console.log(printer);
          console.log(desktop);

          //this.canvas = document.getElementById('canvas');
          //this.ctx = this.canvas.getContext('2d');

          //let htmlRef = this.elementRef.nativeElement.querySelector('canvas');
          //console.log(htmlRef);
          //this.costsChart = new Chart(htmlRef, {
          this.costsChart = new Chart('canvas', {
            type: 'line',
            borderWidth: 50,
            data: {
              labels: uniquePeriods,
              datasets: this.costs,
              /*
              datasets: [
                {
                  data: printer,
                  borderColor: "#3cba9f",
                  fill: false,
                  label: 'Printer',
                  },
                {
                  data: desktop,
                  borderColor: "#ffcc00",
                  fill: false,
                  label: 'Desktop'
                },
              ]
              */
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
                }],
              }
            }
          });

        }
      )
  }

}

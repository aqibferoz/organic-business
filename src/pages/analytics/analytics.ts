
import { Component, ViewChild } from '@angular/core';
import { AlertController,
         IonicPage,
         NavController,
         NavParams
          } from 'ionic-angular';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-analytics',
  templateUrl: 'analytics.html',
})
export class AnalyticsPage {
  
   @ViewChild('lineChart') lineChart;


   public technologies  : any = {
   										        "technologies" : [
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 5,
                                                     'color'      : 'R: 113 G: 156 B: 181',
                                                     'hover'      : 'R: 113 G: 156 B: 181'
                                                  },
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 3,
                                                     'color'      : 'rgba(83, 131, 185, 0.5)',
                                                     'hover'      : 'rgba(122, 160, 202, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 6,
                                                     'color'      : 'rgba(198, 147, 194, 0.5)',
                                                     'hover'      : 'rgba(200, 166, 197, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 2,
                                                     'color'      : 'rgba(54, 116, 152, 0.5)',
                                                     'hover'      : 'rgba(103, 139, 160, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 7,
                                                     'color'      : 'rgba(152, 54, 145, 0.5)',
                                                     'hover'      : 'rgba(152, 89, 149, 0.5)',
                                                  },
                                                  {
                                                     'technology' : 'Oct 10',
                                                     'time'       : 0,
                                                     'color'      : 'rgba(192, 192, 192, 0.5)',
                                                     'hover'      : 'rgba(220, 220, 220, 0.5)'
                                                  },
                                                  {
                                                    'technology' : 'Oct 10',
                                                    'time'       : 5,
                                                    'color'      : 'rgba(192, 192, 192, 0.5)',
                                                    'hover'      : 'rgba(220, 220, 220, 0.5)'
                                                 },
                                                 {
                                                  'technology' : 'Oct 10',
                                                  'time'       : 6,
                                                  'color'      : 'rgba(192, 192, 192, 0.5)',
                                                  'hover'      : 'rgba(220, 220, 220, 0.5)'
                                               },
                                               {
                                                'technology' : 'Oct 10',
                                                'time'       : 3,
                                                'color'      : 'rgba(192, 192, 192, 0.5)',
                                                'hover'      : 'rgba(220, 220, 220, 0.5)'
                                             },
                                             {
                                              'technology' : 'Oct 10',
                                              'time'       : 1,
                                              'color'      : 'rgba(192, 192, 192, 0.5)',
                                              'hover'      : 'rgba(220, 220, 220, 0.5)'
                                           },
                                           {
                                            'technology' : 'Oct 10',
                                            'time'       : 8,
                                            'color'      : 'rgba(192, 192, 192, 0.5)',
                                            'hover'      : 'rgba(220, 220, 220, 0.5)'
                                         }

   										       ]
   										    };
  
   public lineChartEl               : any;
   public chartLabels               : any    = [];
   public chartValues               : any    = [];
   public chartColours              : any    = [];
   public chartHoverColours         : any    = [];
  chartLoading: any;


   constructor( public navCtrl      : NavController,
                public navParams    : NavParams)
   { }




   ionViewDidLoad()
   {
      this.defineChartData();
     
      this.createLineChart();
   }




   /**
    *
    * Parse the JSON data, push specific keys into selected arrays for use with
    * each chart
    *
    */
   defineChartData()
   {
      let k : any;

      for(k in this.technologies.technologies)
      {
         var tech  =      this.technologies.technologies[k];

         this.chartLabels.push(tech.technology);
         this.chartValues.push(tech.time);
         this.chartColours.push(tech.color);
         this.chartHoverColours.push(tech.hover);
      }
   }




   /**
    *
    * Configure the Pie chart, define configuration options
    *
    */
  
   createLineChart()
   {
      this.lineChartEl 	= new Chart(this.lineChart.nativeElement,
      {
         type: 'line',
         data: {
            labels: this.chartLabels,
             datasets: [{
                 data                  : this.chartValues,
                 duration              : 2000,
                 easing                : 'easeInQuart',
                 backgroundColor       : this.chartColours,
                 hoverBackgroundColor  : this.chartHoverColours,
 				 fill 				   : false
             }]
         },
         options : {
            maintainAspectRatio: false,
            legend         : {
               display     : true,
               boxWidth    : 240,
               fontSize    : 5,
               padding     : 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                       beginAtZero:true,
                       stepSize: 2,
                       max : 8
                    }
                }],
                xAxes: [{
                    ticks: {
                       autoSkip: false
                    }
                }]
            }
         }
      });
   }



}
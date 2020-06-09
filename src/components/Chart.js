import React , { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const state = {
  labels: ['Easy' , 'Medium' , 'Hard'],
  datasets: [
    {
      label: 'No of questions',
      backgroundColor: ['red','yellow','green'],
      borderColor: 'rgba(0,0,0,1)',
      fill: false,
      borderWidth: 2,
      data: [59, 40, 80]
    }
  ]
}

class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Question Analysis',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }

          }}
        />
        </div>
        
        <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Response Time based on difficulty',
              fontSize:20
            },
            legend:{
              display:false,
              position:'left'
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }

          }}
        />
        </div>

        <div>
        <Bar
          data={state}
          options={{
            responsive:true,
            title:{
              display:true,
              text:'Analysis based on difficulty',
              fontSize:20
            },
            legend:{
              display:false,
              position:'left'
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
   
          }
        }
        />
        </div>

        
        
        </div>
    );
  }
}

export default Chart;

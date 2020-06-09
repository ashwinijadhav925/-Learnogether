import React , { Component } from 'react';
import { HorizontalBar} from 'react-chartjs-2';

const state = {
  labels: ['Dictionary' , 'List' , 'Python', 'Variables'],
  datasets: [
    {
      label: 'Proficiency',
      backgroundColor: 'gray',
      borderColor: 'rgba(0,0,0,1)',
      fill: false,
      borderWidth: 2,
      data: [100, 13, 65 ,100]
    }
  ]
}

class Skill extends Component {
  render() {
    return (
      <div className="chart">
        <div>
        <HorizontalBar
                  data={state}
                  options={{
                    title:{
                      display:true,
                      text:'Skill Analysis',
                      fontSize:20
                    },
                    legend:{
                      display:false,
                      position:'left'
                    },
                    scales: {
                      xAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }

                  }}
                />
        </div>

      </div>
    );
  }
}

export default Skill;


import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './App.css';
import Chart from './components/Chart';
import Skill from './components/Skill';


class App extends Component{
  
  render(){
    return(
      <div>
        
          <Media className="mt-1">

              <Media left middle href="#">
              <Media img src="/images/profile_pic.jpg" 
                    alt="Generic placeholder image" 
                    height="200px" width="200px"
                    class="align-self-center mr-3" />
              </Media>

              <Media body className="media-body">
                <Media heading>
                  <p>SHUBHAM PANDEY</p>
                </Media>
                <div>Roll No.:  123456789</div> 
                <div>Department:  CSE</div>
                <div>Batch: 2019-2023</div>
              </Media>

            </Media>
            <Chart />
            <Skill/>

      </div>
    );
  }
}

export default App;

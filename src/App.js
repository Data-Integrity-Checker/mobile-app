import React from 'react';
import { BrowserRouter as Rounter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Devices from './components/Devices/Devices';
import Settings from './components/Settings/Settings'; 
import Alerts from './components/Alerts/Alerts';
import Details from './components/Details/Details';

import './App.css';

class App extends React.Component {
  
  state = {
    devices: null
  };

  componentDidMount(){
    this.getDevices()
    this.timer = setInterval(()=> this.getDevices(), 10000)
  }
  
  async getDevices(){
  
   fetch('http://localhost:3000/devices/all', {method: "GET"})
    .then((response) => response.json())
    .then((responseData) =>
    {
       this.setState({
          devices: responseData,
          lastUpdate: ""
       });
       console.log(this.state.devices);
    })
    .catch((error) => {
        console.error(error);
    });
  }

  render(){

    return (
      <Rounter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={() => <Devices devices={this.state.devices}/>}/>
            <Route path="/alerts" component={Alerts}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/device/:id" component={Details}/>
          </Switch>
        </div>
      </Rounter>
    );
  }
}

export default App;

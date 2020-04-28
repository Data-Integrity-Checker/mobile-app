import React from 'react';
import { BrowserRouter as Rounter, Switch, Route} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar/Navbar';
import Devices from './components/Devices/Devices';
import Settings from './components/Settings/Settings'; 
import Alerts from './components/Devices/Alerts/Alerts';
import Details from './components/Devices/Details/Details';

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

          {/* <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh' }} > */}
         
         <Box justifyContent="center">
            <Switch>
              <Route path="/" exact component={() => <Devices devices={this.state.devices}/>}/>
              <Route path="/alerts" component={Alerts}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/device/:id" component={Details}/>
            </Switch>
          </Box>

          {/* </Grid> */}

        </div>
      </Rounter>
    );
  }
}

export default App;

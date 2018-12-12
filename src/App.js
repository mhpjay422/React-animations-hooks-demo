import React from 'react';
import './App.css';
import { Spring } from 'react-spring';
import Counter from "./components/Counter";
import HookedComponent from './components/Hooks';
import KeyAnimations from './components/keyanimations.jsx';
import ClickCounter from './components/ClickCounter';


class App extends React.Component {

  render() {
              
    return (
      <div className="main">
      <Spring from={{ opacity: 0, marginTop: -1000 }} 
              to={{ opacity: 1, marginTop: 0 }}
              delay={100}
              >
        { props => (
          <div className="App" style={ props }>
            <div >
              <header className="App-header" >
                  <img src="./logo.svg" className="App-logo" alt="logo" />
                  <Counter/>
                  <HookedComponent/>
                  <a class="next" href="#animations">Continue</a>
              </header>
            </div>
          </div>
          )
        }
      </Spring>
      <KeyAnimations/>
      <ClickCounter/>
      </div>
      );
  }
}



export default App;
import React, {Component, Fragment} from 'react';
import Header from './components/header/header';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Fragment>
      <Header
        titulo="Noticias React"
      />
    </Fragment>
    );
  }
}
 
export default App;
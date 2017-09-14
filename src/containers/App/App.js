import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});


class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;

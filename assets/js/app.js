import React from 'react';
import ReactDOM from 'react-dom';
import Instance from '../icons/instance'
class App extends React.Component {

  state = { status: 'down'};

  render() {

    const { status } = this.state;

    return (
      <>
        <div className="svg-container">
          <Instance className="warning" width="200" heigh="200" color="#ffbc00"/>
          <Instance className="success" width="200" heigh="200" color="#12e266"/>
          <Instance className="error" width="200" heigh="200" color="#F85F5F"/>
        </div>
        <div className="svg-container">
          <Instance className="warning2" width="200" heigh="200" color="#ffbc00"/>
          <Instance className="success2" width="200" heigh="200" color="#12e266"/>
          <Instance className="error2" width="200" heigh="200" color="#F85F5F"/>
        </div>
        <div className="svg-container">
          <Instance className="warning3" width="200" heigh="200" color="#ffbc00"/>
        </div>
      </>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
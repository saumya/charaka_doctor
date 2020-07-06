//
import React from 'react';

import MaterialAppContainer from './MaterialAppContainer'

class AppContainer extends React.Component {

  constructor(){
    super();
    //
    this.state = {
      userIsLoggedIn : false
    }
    //
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }
  onLoginButtonClick = (loginObj)=>{
    console.log(new Date() + 'onLoginButtonClick')
    console.log( loginObj )
  }

  render(){
    /*
    const onLoginButtonClick = ()=>{
      console.log(new Date() + 'onLoginButtonClick')
    }
    */
    return (
      <React.Fragment>
        <MaterialAppContainer isLogedIn={this.state.userIsLoggedIn} onLogin={this.onLoginButtonClick}/>
      </React.Fragment>
    );
  }
}

export default AppContainer

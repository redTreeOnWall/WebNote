import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.jsx'


class App extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return (
      <MainPage 
        name ="lee"
        ></MainPage>
    );
  }
}

export default App;

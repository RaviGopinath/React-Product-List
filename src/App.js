import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import Login from './Component/login';
import MainPage from './Component/mainPage';
import Demo from './Component/demo';
import Demo1 from './Component/Hooks/demo1';

function App() {

  let [isLoggedIn , updateLoggedIn] = useState(false);


  useEffect(() =>{
   let logVal = localStorage.getItem('loggedValue');

   if(logVal == '1'){
    updateLoggedIn(true);
   }
  },[])

  function logOut(value){
    localStorage.removeItem('loggedValue');
    updateLoggedIn(value);
  }

  function logIn(val){
    localStorage.setItem('loggedValue','1');
    updateLoggedIn(val);
  }

  return (
    <React.Fragment>
      {/* <Header logOuts={logOut} logValue={isLoggedIn}></Header>
      {!isLoggedIn && <Login logIn={logIn}></Login>}
      {isLoggedIn && <MainPage></MainPage>} */}

      {/* <Demo></Demo> */}

      <Demo1></Demo1>
    </React.Fragment>
  );
}

export default App;

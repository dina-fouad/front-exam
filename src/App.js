import React from 'react'
import {BrowserRouter ,Route , Switch} from 'react-router-dom'
import Header from './Components/Header';
import Main from './Components/Main';
import DrinkFav from './Components/DrinkFav';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
<BrowserRouter>
<Switch>
<Route  exact path = "/" >
  <Main/>
</Route>

<Route  exact path = "/favorite" >
  <DrinkFav/>
</Route>



</Switch>


</BrowserRouter>

      </>
    )
  }
}
export default App;
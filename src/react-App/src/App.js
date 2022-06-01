//import logo from './logo.svg';
import './App.css';
import Footercomponents from './components/Footercomponents';
import Headercomponents from './components/Headercomponents';
import Listemployeecomponets from './components/Listemployeecomponets';
import {BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';
import Createemployeecomponent from './components/Createemployeecomponent';
import Updateemployeecomponents from './components/Updateemployeecomponents';
import Viewemployeecomponents from './components/Viewemployeecomponents';

function App() {
  return (
    <div>
      <HashRouter>
                 <Headercomponents/>
                  <div className="container">
                    <Switch>
                      <Route path="/" exact component ={Listemployeecomponets}></Route>
                      <Route path="/employees" component ={Listemployeecomponets}></Route>
                      <Route path="/add-employee" component ={Createemployeecomponent}></Route>
                      <Route path="/update-employee/:id" component ={Updateemployeecomponents}></Route>
                      <Route path="/view-employee/:id" component ={Viewemployeecomponents}></Route>
                   
                    </Switch>
                  </div>
                <Footercomponents/>
           </HashRouter>
          
    </div>
  );
}

export default App;

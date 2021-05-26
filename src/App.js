import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddProducts from './components/AddProducts';
import Home from './components/Home';
import { ProductContextProvider } from './global/ProductContext';
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddProducts}/>
        </Switch>
      </Router>
      </ProductContextProvider>
   
    </div>
  );
}

export default App;

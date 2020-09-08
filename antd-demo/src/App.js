import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';

import './App.css';
import Home from './pages/home';
import { BrowserRouter, HashRouter, Switch, Route, Router, Redirect} from 'react-router-dom'
import addCategory from './pages/Category/addCategory';

// const App = () => (
//   // <div className="App">
//   //   <Button type="primary">Button</Button>
//   // </div>
//   <Home />
//   // <BrowserRouter>
//   //   <Switch>
//   //     <Router path = "/" component={Home} />
//   //     <Router path = "/addCategory" component={addCategory} />
//   //   </Switch>
//   // </BrowserRouter>
// );

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path = "/" component={Home} />
            <Route path = "/addCategory" component={addCategory} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;

// const App = () => {
//   ReactDOM.render(
//     <BrowserRouter>
//             <Switch>
//               <Router path = "/" component={Home} />
//               <Router path = "/addCategory" component={addCategory} />
//             </Switch>
//           </BrowserRouter>
//     //document.getElementById('root'),
//   );
// }
// export default App

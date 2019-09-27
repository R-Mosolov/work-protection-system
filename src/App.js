import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global/css/style.css';

import Login from './pages/login/login';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Login} />
                {/*<Route path="/table" component={Table} />*/}
            </div>
        </Router>
    );
}

export default App;

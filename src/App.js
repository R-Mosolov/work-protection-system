import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global/css/style.css';

import WorkersList from './pages/workers-list/workers-list';

function App() {
    return (
        <Router>
            <div className="App">
                {/*<Route path="/" exact component={Login} />*/}
                <Route path="/workers-list" component={WorkersList} />
            </div>
        </Router>
    );
}

export default App;

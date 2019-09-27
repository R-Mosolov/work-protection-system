import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global/css/style.css';

import Login from './pages/login/login';
import WorkersList from './pages/workers-list/workers-list';
import Worker from './pages/worker/worker';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Login} />
                <Route path="/workers-list" component={WorkersList} />
                <Route path="/worker" component={Worker} />
            </div>
        </Router>
    );
}

export default App;

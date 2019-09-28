import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global/css/style.css';

import Settings from './pages/settings/settings';
import WorkersList from './pages/workers-list/workers-list';
import Worker from './pages/worker/worker';
import CompaniesList from './pages/companies-list/companies-list';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Settings} />
                <Route path="/workers-list" component={WorkersList} />
                <Route path="/worker" component={Worker} />
                <Route path="/companies" component={CompaniesList} />
            </div>
        </Router>
    );
}

export default App;

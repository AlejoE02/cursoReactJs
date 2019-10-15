import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home.js';
import BadgeNew from '../pages/BadgeNew.js';
import BadgeEdit from '../pages/BadgeEdit.js';
import Badges from '../pages/Badges.js';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer.js';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default App;
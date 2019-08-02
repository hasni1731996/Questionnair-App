import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Questions from '../questions/foodQuestions'
import Welcome from '../welcomeComponent/welcomeScreen'

export const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/questions" component={Questions} />
        </Switch>
    </Router>



);
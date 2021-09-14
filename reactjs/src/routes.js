import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from './pages';


export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Principal} />    
            </Switch>
        </BrowserRouter> 
    )
}
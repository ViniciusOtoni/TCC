import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Princi from './pages';


export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Princi} />    
            </Switch>
        </BrowserRouter> 
    )
}
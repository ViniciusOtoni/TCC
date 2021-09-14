import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from './pages';
import Rodape from './pages/components/rodaPe/index.js'


export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Principal} /> 
                <Route  path="/rodape"  component={Rodape} />       
            </Switch>
        </BrowserRouter> 
    )
}
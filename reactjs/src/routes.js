import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from './pages';
import Caixa from './pages/carrinho';
import EntregasSemItem from './pages/entrega';
import CarrinhoItem from './pages/carrinhoItem';
import VendaUnica from './pages/VendaUnica';
import Footer from './pages/components/rodape';
import EntregaItem from './pages/entregaItem';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Principal} />   
                <Route  path="/carrinho"  component={Caixa} />  
                <Route  path="/entregas"  component={EntregasSemItem} /> 
                <Route path="/carrinhoItem" component={CarrinhoItem} />
                <Route path="/vendaUnica" component={VendaUnica} />
                <Route path="/entregaItem" component={EntregaItem} />
                <Route path="/testeRodape" component={Footer} />
               

            </Switch>
        </BrowserRouter> 
    )
}
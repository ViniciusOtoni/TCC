import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from './pages';
import Caixa from './pages/carrinho';
import EntregasSemItem from './pages/entrega';
import CarrinhoItem from './pages/carrinhoItem';
import VendaUnica from './pages/VendaUnica';
import EntregaItem from './pages/entregaItem';
import EscolhaEntrega from './pages/escolhaEntrega';
import SaibaMais from './pages/saibaMais'
import Venda from './pages/venda';
import Termos from './pages/termos';
import ConcluirCompra from './pages/concluirCompra';
import Footer from './components/rodape';
import GerenteVizualizar from './pages/GerenteVisualizar';
import GerenteAdicionar from './pages/gerenteAdicionar';
import GerenteAlterar from './pages/gerenteAlterar';
import Error from './pages/error';
import GerenteListar from './pages/gerenteListar';



export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Principal} />   
                <Route  path="/carrinho"  component={Caixa} />  
                <Route  path="/entregas"  component={EntregasSemItem} /> 
                <Route  path="/carrinhoItem" component={CarrinhoItem} />
                <Route  path="/vendaUnica" component={VendaUnica} />
                <Route  path="/entregaItem" component={EntregaItem} />
                <Route  path="/testeRodape" component={Footer} />
                <Route  path="/escolhaEntrega" component={EscolhaEntrega} />
                <Route  path="/venda" component={Venda} />
                <Route  path="/saibaMais" component={SaibaMais} />
                <Route  path="/termos" component={Termos} />
                <Route  path="/concluirCompra" component={ConcluirCompra} />
                <Route  path="/gerenteVizualizar" component={GerenteVizualizar} />
                <Route  path="/gerenteAdicionar" component={GerenteAdicionar} />
                <Route  path="/gerenteAlterar" component={GerenteAlterar} />
                <Route  path="/gerenteListar" component={GerenteListar} />
                <Route  path="/*" component={Error} />
            </Switch>
        </BrowserRouter> 
    )
}
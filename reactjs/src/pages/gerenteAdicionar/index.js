import Cabecalho from "../../components/cabecalho"
import { StyledGerenteAdicionar } from "./styled"
import { StyledButtonAdm } from "../../components/botaoAdm/styled"
import { StyledInput, StyledSelect } from "../../components/input/styled"

export default function GerenteAdicionar() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <Cabecalho corLetra="nulo"/>
            <main style={{width:"1340px", margin:"auto"}}> 
                 <StyledGerenteAdicionar>
                    <div className="content">
                        <div className="line alternating">
                            <div className="topico1"> Nome: </div>
                            <div className="input"> <StyledInput style={{width:"22em"}}/> </div>
                        </div>
                        <div className="line">
                            <div className="topico2"> Código de Barra: </div>
                            <div  className="input">  <StyledInput style={{width:"22em"}}/> </div>
                        </div>
                        <div className="line alternating">
                            <div className="topico3"> Categoria: </div>
                            <div  className="input"> <StyledSelect style={{width:"22em"}}> <option value="selecione">  selecione </option> </StyledSelect> </div>
                        </div>
                        <div className="line">
                            <div className="topico4"> Preço </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}}/> </div>
                        </div>
                        <div className="line alternating">
                            <div className="topico5">  Imagem Principal: </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}} placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico6"> Imagem Secundaria: </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}} placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="line alternating">
                            <div className="topico7"> Imagem Secundaria: </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}} placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico8">   Imagem Secundaria: </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}} placeholder="URl da Imagem"/> </div>
                        </div>
                        <div className="line alternating">
                            <div className="topico9">  Imagem Secundaria: </div>
                            <div  className="input"> <StyledInput style={{width:"22em"}}/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico10"> Parcelas: </div>
                            <div  className="input"> <StyledSelect style={{width:"22em"}}>  <option value="selecione">  1 parcela </option> </StyledSelect> </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div>
                            <StyledButtonAdm  className="button" cor="vermelho"> Voltar </StyledButtonAdm> 
                        </div>
                        <div className="criar-item"> 
                            <StyledButtonAdm>  Criar item </StyledButtonAdm>
                        </div>
                    </div>
                 </StyledGerenteAdicionar>
            </main> 
        </div>
    )
}
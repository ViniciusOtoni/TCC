import { StyledGerenteAlterar } from "./styled";
import { StyledInput, StyledSelect } from "../../components/input/styled";
import { StyledButtonAdm } from "../../components/botaoAdm/styled";

import CabecalhoAdm from "../../components/cabecalhoAdm";

export default function GerenteAlterar() {
    return (
        <div style={{backgroundColor:"#333333"}}> 
        <CabecalhoAdm nulob={true} />
            
                <StyledGerenteAlterar> 
                <main> 
               
                <div className="content">
                        <div className="alternating">
                            <div className="topico1"> Nome: </div>
                            <div className="input"> <StyledInput className="input-input"/> </div>
                        </div>
                        <div className="line">
                            <div className="topico2"> Código de Barra: </div>
                            <div  className="input">  <StyledInput className="input-input"/> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico3"> Categoria: </div>
                            <div  className="input"> <StyledSelect className="input-input"> <option value="selecione">  selecione </option> </StyledSelect> </div>
                        </div>
                        <div className="line">
                            <div className="topico4"> Preço </div>
                            <div  className="input"> <StyledInput className="input-input topico4-input"/> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico5">  Imagem Principal: </div>
                            <div  className="input"> <StyledInput className="input-input" placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico6"> Imagem 2: </div>
                            <div  className="input"> <StyledInput className="input-input" placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="alternating">
                            <div className="topico7"> Imagem 3: </div>
                            <div  className="input"> <StyledInput className="input-input" placeholder="URl da Imagem"/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico8">   Imagem 4: </div>
                            <div  className="input"> <StyledInput className="input-input" placeholder="URl da Imagem"/> </div>
                        </div>
                        <div className="alternating">
                            <div className="topico9">  Situação: </div>
                            <div  className="input"> <StyledInput className="input-input"/>  </div>
                        </div>
                        <div className="line">
                            <div className="topico10"> Parcelas: </div>
                            <div  className="input"> <StyledSelect className="input-input">  <option value="selecione">  1 parcela </option> </StyledSelect> </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div>
                            <StyledButtonAdm  className="button" cor="vermelho"> Voltar </StyledButtonAdm> 
                        </div>
                        <div className="criar-item"> 
                            <StyledButtonAdm>  Alterar item </StyledButtonAdm>
                        </div>
                    </div>
                    </main>
                </StyledGerenteAlterar>
            
        </div>
    )
}
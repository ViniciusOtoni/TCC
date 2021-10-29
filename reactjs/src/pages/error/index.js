import Cabecalho from "../../components/cabecalho"
import { Container } from './styled'

export default function Error() {
    return (
        <Container>
            <Cabecalho className="header"/>
            <img className="image" src="/assets/images/Group 15.png"alt="" style={{backgroundSize: "cover", height: "100%", width: "100%"}}/>
        </Container>
    )
}
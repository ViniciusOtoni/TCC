import Cabecalho from "../../components/cabecalho"
import { Container } from './styled'

export default function Error() {
    return (
        <Container>
            <Cabecalho className="header"/>
            <img className="image" src="/assets/images/comingSoon.jpg"alt=""/>
        </Container>
    )
}
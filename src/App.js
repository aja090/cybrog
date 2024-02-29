
import { Container } from "./componets/indexx";
import { Header, Hero, Footer, Mostpoupler } from "./section/indexx"

let App = () => {

    return (
        <>
            <Header />
            <Container >
                <Hero />
                <Mostpoupler />
            </Container>
            <Footer />
        </>
    )

}

export default App;
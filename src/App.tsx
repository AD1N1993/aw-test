import Home from "./pages/home/Home.tsx";
import Header from "./components/organisms/header/Header.tsx";
import Container from "./components/atoms/container/Container.tsx";

function App() {

    return (
        <Container>
            <Header/>
            <Home/>
        </Container>
    )
}

export default App

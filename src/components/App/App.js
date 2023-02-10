import "./App.css";
import { MainGrid } from "../MainGrid/MainGrid";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <MainGrid />
            <Footer />
        </div>
    );
}

export default App;

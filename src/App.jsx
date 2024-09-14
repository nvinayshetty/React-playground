import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcepts";
import EXAMPLES from "./components/Examples";

function App() {


    return (
        <div>
            <Header></Header>
            <main>
                <CoreConcepts/>
                <EXAMPLES/>
            </main>
        </div>
    );
}

export default App;

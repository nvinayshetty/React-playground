import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from "./components/TabButton";
import {EXAMPLES} from "./data-with-examples";

function App() {
    const [selectedTab, setSelectedTab] = useState("components");

    function handleSelect(selectedTab) {
        setSelectedTab(selectedTab);
        console.log(`Button clicked + ${selectedTab}`);
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core concept</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}
                        />
                        <CoreConcept {...CORE_CONCEPTS[2]}
                        />
                        <CoreConcept {...CORE_CONCEPTS[3]}
                        />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>JSx</TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTab].title}</h3>
                        <p>{EXAMPLES[selectedTab].description}</p>
                        <pre>
                            <code>
                                 <p>{EXAMPLES[selectedTab].code}</p>
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;

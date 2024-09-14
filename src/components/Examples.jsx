import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data-with-examples";


export default function Examples() {
    const [selectedTab, setSelectedTab] = useState("");

    function handleSelect(selectedTab) {
        setSelectedTab(selectedTab);
        console.log(`Button clicked + ${selectedTab}`);
    }

    let tabContent = <p>Please select a tab.</p>
    if (selectedTab) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                    <code>
                        <p>{EXAMPLES[selectedTab].code}</p>
                    </code>
                </pre>
            </div>
        )
    }

  return  <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton
                isSelected={selectedTab === "components"}
                onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton
                isSelected={selectedTab === "jsx"}
                onSelect={() => handleSelect("jsx")}>JSx</TabButton>
            <TabButton
                isSelected={selectedTab === "props"}
                onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton
                isSelected={selectedTab === "state"}
                onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {tabContent}
    </section>
}
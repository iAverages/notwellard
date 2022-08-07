import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [bonks, setBonks] = useState(null);
    useEffect(() => {
        fetch("whatever ur shit is")
            .then((res) => res.json())
            .then((res) => setBonks(res.whatever));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={"https://cdn.danielraybone.com/screenshots/pfp.png"} className="App-logo" alt="logo" />
                <p>NotWellard's bonk counter is currently at...</p>
                <p className="bonks">{bonks ? bonks : "Loading"}</p>
            </header>
        </div>
    );
}

export default App;

import "./App.css";

function App() {
    const name = "John";
    const list = ["사과", "바나나", "딸기"];
    return (
        <>
            <h1 className="orange">Hello</h1>
            <p>{name}</p>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;

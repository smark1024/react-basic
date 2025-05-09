import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";

export default function AppCounter() {
    const [count, setCount] = useState(0);

    // 카운트 증가 함수
    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="container">
            <div className="banner">
                Total Count: {count} {count > 10 ? "🔥" : "❄️"}
            </div>
            <div className="counters">
                <Counter onIncrease={handleIncrease} total={count} />
                <Counter onIncrease={handleIncrease} total={count} />
            </div>
        </div>
    );
}

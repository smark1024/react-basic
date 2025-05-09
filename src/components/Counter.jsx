import React, { useState } from "react";

export default function Counter({ onIncrease, total }) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // 로컬 상태 업데이트
        setCount((prev) => prev + 1);
        // 부모 컴포넌트에 알림
        onIncrease();
    };

    return (
        <div className="counter">
            <span className="number">
                {count} / {total}
            </span>
            <button
                className="button"
                onClick={() => {
                    handleClick();
                }}
            >
                Add +
            </button>
        </div>
    );
}

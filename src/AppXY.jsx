import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        //setPosition({ x: e.clientX, y: e.clientY });
        // 이전 상태값 유지 하고 하나의 값만 추가 한다면...
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        console.log(e.clientX, e.clientY);
    };

    return (
        <div className="container" onLoad={handleMouseMove} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove} onMouseMove={handleMouseMove}>
            <div className="pointer" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
        </div>
    );
}

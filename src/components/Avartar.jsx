import React from "react";

export default function Avartar({ image, badge }) {
    return (
        <div className="avatar">
            <img className="photo" src={image} alt="avatar" />
            {badge && <span className="badge">{badge}</span>}
        </div>
    );
}

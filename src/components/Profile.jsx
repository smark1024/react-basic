import React from "react";

export default function Profile({ image, name, title, badge }) {
    return (
        <div className="profile">
            <img className="photo" src={image} alt="avatar" />
            {badge && <span className="badge">{badge}</span>}
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

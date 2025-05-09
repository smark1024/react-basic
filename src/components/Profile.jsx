import React from "react";
import Avartar from "./Avartar";

export default function Profile({ image, name, title, badge }) {
    return (
        <div className="profile">
            <Avartar image={image} badge={badge} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

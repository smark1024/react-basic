import React, { useState } from "react";
import useProducts from "../hooks/useProducts";

export default function Products() {
    const [checked, setChecked] = useState(false);
    const { products, loading, error } = useProducts({ salesOnly: checked });
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">Show only sale products</label>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}

            {!loading && !error && (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <article>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

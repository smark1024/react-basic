import React, { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        fetch(`data/${checked ? "sale_" : ""}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log("데이터 추가");
                setProducts(data);
            });

        return () => {
            console.log("데이터 제거");
        };
    }, [checked]);

    return (
        <>
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">Show only sale products</label>
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
        </>
    );
}

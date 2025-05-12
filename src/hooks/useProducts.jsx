import { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log("데이터 추가");
                setProducts(data);
            })
            .catch((e) => {
                console.error(e);
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            console.log("데이터 제거");
        };
    }, [salesOnly]);

    return { products, loading, error };
}

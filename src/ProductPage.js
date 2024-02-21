import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchProducts(token);
        } else {
            alert('Kérjük jelentkezzen be!');
        }
    }, []);

    const fetchProducts = async (token) => {
        try {
            const response = await fetch('https://jwt.sulla.hu/termekek', { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Hiba a termékek lekérésekor');
            }
            const data = await response.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.error('Hiba történt:', error);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Termékek</h1>
            <div className='product-list'>
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <p className="product-price">Ár: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

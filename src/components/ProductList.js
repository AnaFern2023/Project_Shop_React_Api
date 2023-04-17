import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])
    console.log(products);
    return (
        <section className="products_grid">
            {products.map((element) => {
                return (
                    <ProductItem
                        key={element.id}
                        title={element.title}
                        image={element.image}
                        price={element.price}
                        id={element.id}
                    />
                )
            })}
        </section>
    );
}

export default ProductList;
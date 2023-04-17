import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
    const productParams = useParams([])
    const [products, setProducts] = useState([])

    console.log(products);
    console.log(products[productParams.id]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])

    {/* muss gemappt werden und vorher gefiltert */ }
    const eachProductDetail = products.filter((element) => {
        console.log(productParams.id);
        return element.id.toString() === productParams.id
    })
    return (
        <div className="product_details">
            <Link to={'/'}>Home</Link>
            {eachProductDetail.map((element, i) => {
                return (
                    <div key={i}>

                        <h3>{element.title}</h3>
                        <img src={element.image} alt="" />
                        <p>{element.description}</p>
                        <p>Category: {element.category}</p>
                        <p>⭐️ {element.rating.rate}</p>
                        <p className="price">💵 {element.price} $</p>
                    </div>)
            })}
        </div>
    );
}

export default ProductDetail;
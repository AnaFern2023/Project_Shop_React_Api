import { Link } from "react-router-dom";
const ProductItem = (props) => {
    return (
        <div className="product_item">
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>$ {props.price} 💵</p>
            <Link to={`/details/${props.id}`}>Show more</Link>
        </div>
    );
}

export default ProductItem;
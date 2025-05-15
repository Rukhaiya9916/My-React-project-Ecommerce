import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#F3E8FF", // Light violet background
        color: "#1F1F1F",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(98, 33, 210, 0.2)", // violet shadow
        overflow: "hidden",
        margin: "20px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        transition: "transform 0.3s ease",
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#3B0764", // dark violet text
    };

    const priceStyle = {
        color: "#7C3AED", // violet price
        fontSize: "18px",
        marginBottom: "8px",
    };

    const detailsText = {
        color: "#6B7280", // gray-500
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal",
    };

    const buttonStyle = {
        backgroundColor: "#7C3AED",
        color: "violet",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#5B21B6" : "#7C3AED";
        e.target.style.boxShadow = hover
            ? "0 0 12px #C084FC" // neon glow
            : "none";
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}

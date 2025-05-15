import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            backgroundColor: "#2a2a6d", // Deep purple background
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#f1f1f1"
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 0 15px rgba(180, 105, 255, 0.8)" // Neon purple glow effect
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#D700FF", // Neon violet color
            textShadow: "0px 0px 10px rgba(215, 0, 255, 0.8)" // Glowing violet effect
        },
        description: {
            fontSize: "1.1rem",
            marginBottom: "15px",
            color: "#C0C0C0", // Light gray for description text
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#8A2BE2", // Neon purple color
            marginBottom: "20px",
            textShadow: "0px 0px 10px rgba(138, 43, 226, 0.8)" // Neon purple glow effect
        },
        button: {
            padding: "12px 25px",
            fontSize: "1.1rem",
            backgroundColor: "#800080", // Neon purple button color
            color: "#f1f1f1",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            boxShadow: "0 0 15px rgba(128, 0, 128, 0.6)", // Neon purple glow
            fontWeight: "bold",
        },
        buttonHover: {
            backgroundColor: "#9b59b6", // Lighter neon purple on hover
            boxShadow: "0 0 25px rgba(155, 89, 182, 0.8)", // Glow effect on hover
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}

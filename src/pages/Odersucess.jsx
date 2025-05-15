import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#2a2a6d", // Deep purple background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#f1f1f1" // Light text color for contrast
        },
        title: {
            fontSize: "2.5rem",
            color: "#D700FF", // Neon violet color
            marginBottom: "20px",
            textShadow: "0px 0px 10px rgba(215, 0, 255, 0.8)" // Neon glow effect
        },
        message: {
            fontSize: "1.2rem",
            color: "#c0c0c0", // Light gray for the message
            marginBottom: "30px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#8A2BE2", // Neon purple color
            color: "#f1f1f1", // Light text on button
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)", // Neon purple glow effect
            fontWeight: "bold"
        },
        buttonHover: {
            backgroundColor: "#9b59b6", // Lighter purple on hover
            boxShadow: "0 0 25px rgba(155, 89, 182, 0.8)", // Glow effect on hover
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a 
                href="/" 
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                Go to Home
            </a>
        </div>
    );
}

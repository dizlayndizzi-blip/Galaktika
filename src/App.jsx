import { useState, useEffect } from "react";

export default function App() {
  const [planet, setPlanet] = useState("Mars");
  const [glow, setGlow] = useState("#7f5cff");

  useEffect(() => {
    if (planet === "Mars") setGlow("#ff4d4d");
    if (planet === "Neptune") setGlow("#4dd2ff");
    if (planet === "Saturn") setGlow("#ffd27f");
  }, [planet]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0a23, #000)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        transition: "0.5s",
      }}
    >
      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "60px",
            textShadow: `0 0 30px ${glow}`,
            transition: "0.5s",
          }}
        >
          GALACTIVERSE
        </h1>
        <p style={{ opacity: 0.8, fontSize: "20px" }}>
          Исследуй бесконечность космоса
        </p>

        <button style={buttonStyle(glow)}>
          🚀 Исследовать
        </button>
      </section>

      {/* PLANETS */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Выбери планету</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Mars", "Neptune", "Saturn"].map((p) => (
            <button
              key={p}
              onClick={() => setPlanet(p)}
              style={planetButton(p === planet, glow)}
            >
              {p}
            </button>
          ))}
        </div>

        <p style={{ marginTop: "30px", fontSize: "18px" }}>
          Текущая планета: <b style={{ color: glow }}>{planet}</b>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", marginTop: "100px", opacity: 0.6 }}>
        © GalactiVerse | IT Contest
      </footer>
    </div>
  );
}

const buttonStyle = (glow) => ({
  marginTop: "30px",
  padding: "15px 40px",
  fontSize: "18px",
  background: "transparent",
  border: `2px solid ${glow}`,
  color: "white",
  cursor: "pointer",
  borderRadius: "30px",
  boxShadow: `0 0 20px ${glow}`,
  transition: "0.3s",
});

const planetButton = (active, glow) => ({
  padding: "15px 25px",
  background: active ? glow : "transparent",
  border: `2px solid ${glow}`,
  color: "white",
  cursor: "pointer",
  borderRadius: "20px",
  boxShadow: active ? `0 0 20px ${glow}` : "none",
  transition: "0.3s",
});

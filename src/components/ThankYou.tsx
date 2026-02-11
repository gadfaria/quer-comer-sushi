import { useEffect, useState } from "react";
import "./ThankYou.css";

export default function ThankYou() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`thankyou-wrapper ${show ? "visible" : ""}`}>
      {/* Confetti / celebration emojis */}
      <div className="celebration-emojis">
        {[
          "🎉",
          "🍣",
          "✨",
          "🥢",
          "💖",
          "🎊",
          "🍱",
          "⭐",
          "🎉",
          "🍣",
          "💫",
          "🥳",
        ].map((emoji, i) => (
          <span
            key={i}
            className="celebration-emoji"
            style={{
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${1.5 + Math.random() * 2}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="thankyou-card">
        <div className="thankyou-emoji-big">🎉</div>
        <h1 className="thankyou-title">
          Eu <span className="heart">sabia</span>!
        </h1>
        <p className="thankyou-sub">
          Que bom que aceitou, <strong>Jhow</strong>! 💖
        </p>

        <div className="thankyou-divider">
          <span>🍣</span>
        </div>

        {/* <p className="thankyou-text">
          Vai ser a melhor noite de sushi de todas!
        </p> */}
        <p className="thankyou-place">
          📍 Te vejo no <strong>Itawa</strong>!
        </p>

        <div className="thankyou-footer">
          <span className="sushi-train">🍣🍣🍣🍣🍣</span>
        </div>

        <p className="thankyou-ps">P.S.: Eu pago 😏✨</p>
      </div>
    </div>
  );
}

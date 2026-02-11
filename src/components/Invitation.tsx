import { useState, useRef, useCallback } from "react";
import "./Invitation.css";

interface InvitationProps {
  onAccept: () => void;
}

const noTexts = [
  "Não 😢",
  "Tem certeza? 🥺",
  "Pensa de novo... 😭",
  "Por favorzinho? 🙏",
  "Eu vou chorar... 😿",
  "Não faz isso comigo 💔",
  "Reconsidere! 🍣",
  "Última chance? 🥹",
];

export default function Invitation({ onAccept }: InvitationProps) {
  const [noIndex, setNoIndex] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const btnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = useCallback(() => {
    if (!btnRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const btn = btnRef.current.getBoundingClientRect();

    const maxX = container.width - btn.width - 20;
    const maxY = container.height - btn.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnRef.current.style.position = "absolute";
    btnRef.current.style.left = `${randomX}px`;
    btnRef.current.style.top = `${randomY}px`;
    btnRef.current.style.transition = "all 0.2s ease";

    setNoIndex((prev) => Math.min(prev + 1, noTexts.length - 1));
    setYesScale((prev) => Math.min(prev + 0.2, 2.5));
  }, []);

  return (
    <div className="invitation-wrapper">
      {/* Floating sushi emojis */}
      <div className="floating-emojis">
        {["🍣", "🍱", "🐟", "🥢", "🍙", "🍣", "🐡", "🍱", "🥢", "🍣"].map(
          (emoji, i) => (
            <span
              key={i}
              className="floating-emoji"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                fontSize: `${1.5 + Math.random() * 2}rem`,
              }}
            >
              {emoji}
            </span>
          )
        )}
      </div>

      <div className="invitation-card">
        <div className="sushi-icon">🍣</div>
        <h1 className="invitation-title">
          Oi, <span className="highlight">Jhow</span>!
        </h1>
        <p className="invitation-subtitle">Você recebeu um convite especial</p>

        <div className="divider">
          <span>🥢</span>
        </div>

        <p className="invitation-text">
          Bora comer um <strong>sushi</strong> juntos?
        </p>
        <p className="invitation-place">
          📍 <strong>Itawa</strong>
        </p>
        <p className="invitation-vibe">
          Vai ser maneiro, eu prometo!
        </p>

        <div className="buttons-container" ref={containerRef}>
          <button
            className="btn-yes"
            onClick={onAccept}
            style={{ transform: `scale(${yesScale})` }}
          >
            Sim, bora! 🎉
          </button>

          <button
            ref={btnRef}
            className="btn-no"
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            onClick={handleNoHover}
          >
            {noTexts[noIndex]}
          </button>
        </div>
      </div>
    </div>
  );
}

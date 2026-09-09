function Card() {
  return (
    <svg
      className="hero-card"
      viewBox="0 0 600 700"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cadre extérieur */}
      <rect
        x="4"
        y="4"
        width="592"
        height="692"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Cadre intérieur */}
      <rect
        x="32"
        y="32"
        width="536"
        height="636"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Coins décoratifs */}
      <path
        d="M18 70V18H70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M530 18H582V70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M18 630V682H70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M530 682H582V630"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Titre */}
      <text
        x="300"
        y="155"
        textAnchor="middle"
        letterSpacing="10"
        fontSize="14"
        fill="currentColor"
      >
        ✦ PORTFOLIO ✦
      </text>

      {/* Initiales */}
      <text
        x="300"
        y="260"
        textAnchor="middle"
        fontSize="120"
        fontFamily="Georgia, serif"
        fill="currentColor"
        opacity="0.18"
      >
        AH
      </text>

      {/* Ligne principale */}
      <line
        x1="82"
        y1="215"
        x2="518"
        y2="215"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Front-end */}
      <line
        x1="205"
        y1="285"
        x2="395"
        y2="285"
        stroke="currentColor"
        strokeWidth="1"
      />

      <text
        x="300"
        y="315"
        textAnchor="middle"
        letterSpacing="5"
        fontSize="13"
        fill="currentColor"
        opacity="0.75"
      >
        FULL-STACK
      </text>

      {/* Developer */}
      <line
        x1="220"
        y1="340"
        x2="380"
        y2="340"
        stroke="currentColor"
        strokeWidth="1"
      />

      <text
        x="300"
        y="375"
        textAnchor="middle"
        letterSpacing="5"
        fontSize="13"
        fill="currentColor"
        opacity="0.75"
      >
        DEVELOPER
      </text>

      {/* Localisation */}
      <line
        x1="82"
        y1="410"
        x2="518"
        y2="410"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      <text
        x="300"
        y="440"
        textAnchor="middle"
        letterSpacing="4"
        fontSize="11"
        fill="currentColor"
        opacity="0.65"
      >
        ✦ FRANCE · SUISSE ✦
      </text>

      {/* Année */}
      <line
        x1="220"
        y1="465"
        x2="380"
        y2="465"
        stroke="currentColor"
        strokeWidth="1"
      />

      <text
        x="300"
        y="495"
        textAnchor="middle"
        letterSpacing="5"
        fontSize="11"
        fill="currentColor"
        opacity="0.6"
      >
        2024 - 2025
      </text>

      {/* Arcs décoratifs */}
      <path
        d="M32 520 Q300 400 568 520"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />

      <path
        d="M32 555 Q300 435 568 555"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />

      <path
        d="M32 590 Q300 470 568 590"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />

      <path
        d="M70 625 Q300 510 530 625"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  )
}

export default Card
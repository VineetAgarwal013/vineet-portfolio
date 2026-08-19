export default function HatchingEgg() {
  return (
    <div className="dex-egg">
      <svg width="80" height="96" viewBox="0 0 86 104" fill="none">
        <path
          d="M43 6 C 26 6 12 34 12 62 C 12 84 24 98 43 98 C 62 98 74 84 74 62 C 74 34 60 6 43 6 Z"
          fill="#E0AAFF"
          fillOpacity="0.08"
          stroke="#C77DFF"
          strokeWidth="2.5"
        />
        <path
          className="dex-crack"
          d="M43 6 L 43 22 L 34 30 L 40 40 L 30 50 L 38 60 L 34 68"
          stroke="#C77DFF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="dex-crack"
          d="M43 22 L 52 30 L 46 42 L 54 54 L 46 62"
          stroke="#C77DFF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
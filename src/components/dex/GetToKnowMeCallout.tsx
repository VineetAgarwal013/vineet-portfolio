const CALLOUT_WIDTH = 120;
const CALLOUT_HEIGHT = 38;
const FINGER_GAP = 6;

const CALLOUT_PATH =
  "M 12 1 H 108 A 11 11 0 0 1 119 12 V 26 A 11 11 0 0 1 108 37 H 10 L 2 48 L 1 37 A 11 11 0 0 1 12 1 Z";

export default function GetToKnowMeCallout({
  finger,
  onClick,
}: {
  finger: { x: number; y: number };
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label="Get to Know Me"
      style={{
        width: CALLOUT_WIDTH,
        height: CALLOUT_HEIGHT,
        left: `calc(${finger.x * 100}% - ${CALLOUT_WIDTH / 2}px)`,
        top: `calc(${finger.y * 100}% - ${CALLOUT_HEIGHT + FINGER_GAP}px)`,
      }}
      className="absolute z-10 cursor-pointer whitespace-nowrap font-mono text-[11px] font-bold italic tracking-wide text-[#1a002c] transition-transform hover:-translate-y-0.5"
    >
      <svg
        viewBox="-2 -2 124 54"
        aria-hidden="true"
        className="absolute left-0 top-0 h-[50px] w-[120px] drop-shadow-[2px_2px_0_#1a002c]"
      >
        <path
          d={CALLOUT_PATH}
          fill="#F0ABFC"
          stroke="#1a002c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10">Get to Know Me</span>
      <span
        aria-hidden="true"
        className="absolute bottom-0.5 right-1.5 z-10 font-mono text-[7px] font-bold italic tracking-wide opacity-60"
      >
        click here
      </span>
    </button>
  );
}
const CALLOUT_WIDTH = 170;
const CALLOUT_HEIGHT = 38;
const FINGER_GAP = 6;

const CALLOUT_PATH =
  "M 12 1 H 158 A 11 11 0 0 1 169 12 V 26 A 11 11 0 0 1 158 37 H 10 L 2 48 L 1 37 A 11 11 0 0 1 12 1 Z";

const CALLOUT_STYLE = (finger: { x: number; y: number }) => ({
  width: CALLOUT_WIDTH,
  height: CALLOUT_HEIGHT,
  left: `calc(${finger.x * 100}% - ${CALLOUT_WIDTH / 2}px)`,
  top: `calc(${finger.y * 100}% - ${CALLOUT_HEIGHT + FINGER_GAP}px)`,
});

const CALLOUT_CLASS =
  "absolute z-10 flex items-center justify-center whitespace-nowrap font-mono text-[10px] font-bold italic tracking-wide text-[#1a002c]";

export default function GetToKnowMeCallout({
  finger,
  onClick,
}: {
  finger: { x: number; y: number };
  onClick?: () => void;
}) {
  const inner = (
    <>
      <svg
        viewBox="-2 -2 178 54"
        aria-hidden="true"
        className="absolute left-0 top-0 h-[50px] w-[170px] drop-shadow-[2px_2px_0_#1a002c]"
      >
        <path
          d={CALLOUT_PATH}
          fill="#F0ABFC"
          stroke="#1a002c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10">Explore my Projects</span>
      {onClick && (
        <span
          aria-hidden="true"
          className="absolute bottom-0.5 right-1.5 z-10 font-mono text-[7px] font-bold italic tracking-wide opacity-60"
        >
          click me
        </span>
      )}
    </>
  );

  if (!onClick) {
    return (
      <div aria-label="Explore my Projects" style={CALLOUT_STYLE(finger)} className={CALLOUT_CLASS}>
        {inner}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label="Explore my Projects"
      style={CALLOUT_STYLE(finger)}
      className={`${CALLOUT_CLASS} cursor-pointer transition-transform hover:-translate-y-0.5`}
    >
      {inner}
    </button>
  );
}

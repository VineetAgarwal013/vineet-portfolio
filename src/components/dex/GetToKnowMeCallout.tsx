const CALLOUT_WIDTH = 120;
const CALLOUT_HEIGHT = 38;
const FINGER_GAP = 6;

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
        left: `calc(${finger.x * 100}% + 4px)`,
        top: `calc(${finger.y * 100}% - ${CALLOUT_HEIGHT + FINGER_GAP}px)`,
      }}
      className="absolute z-10 cursor-pointer whitespace-nowrap rounded-xl border-2 border-[#1a002c] bg-[#F0ABFC] px-2.5 py-1 pb-3.5 font-mono text-[11px] font-bold italic tracking-wide text-[#1a002c] shadow-[2px_2px_0_#1a002c] transition-transform hover:-translate-y-0.5"
    >
      Get to Know Me
      <span
        aria-hidden="true"
        className="absolute bottom-0.5 right-1.5 font-mono text-[7px] font-bold italic tracking-wide opacity-60"
      >
        click here
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-[8px] -left-[8px] h-4 w-4 border-b-2 border-l-2 border-[#1a002c] bg-[#F0ABFC]"
      />
    </button>
  );
}
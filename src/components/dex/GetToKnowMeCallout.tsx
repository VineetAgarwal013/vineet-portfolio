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
        className="absolute -bottom-[10px] -left-[8px] h-0 w-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#1a002c]"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-[10px] -left-[8px] h-0 w-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#F0ABFC]"
      />
    </button>
  );
}
import { useEffect, useRef, useState } from "react";

const BALL_SFX = new Audio("/pokeball-sfx.mp3");
BALL_SFX.volume = 0.04;
BALL_SFX.preload = "auto";

function playBallSfx() {
  BALL_SFX.pause();
  BALL_SFX.currentTime = 0;
  BALL_SFX.play().catch(() => {});
}

type BallPhase = "idle" | "shake" | "open" | "hold";

export default function PokeballButton({
  onOpen,
  onClose,
  controlledOpen = false,
  trigger = 0,
}: {
  onOpen?: () => void;
  onClose?: () => void;
  controlledOpen?: boolean;
  trigger?: number;
}) {
  const [phase, setPhase] = useState<BallPhase>("idle");
  const phaseRef = useRef<BallPhase>("idle");
  const timers = useRef<number[]>([]);
  const lastTrigger = useRef(trigger);

  useEffect(() => {
    if (controlledOpen) setPhaseSafe("hold");
    else setPhaseSafe("idle");
  }, [controlledOpen]);

  useEffect(
    () => () => timers.current.forEach((t) => window.clearTimeout(t)),
    []
  );

  function setPhaseSafe(next: BallPhase) {
    phaseRef.current = next;
    setPhase(next);
  }

  function handleClick() {
    if (controlledOpen) {
      onClose?.();
      return;
    }
    if (!onOpen || phaseRef.current !== "idle") return;
    setPhaseSafe("shake");
    playBallSfx();
    timers.current.push(
      window.setTimeout(() => {
        if (phaseRef.current !== "shake") return;
        setPhaseSafe("open");
      }, 550)
    );
    timers.current.push(
      window.setTimeout(() => {
        if (phaseRef.current !== "open") return;
        setPhaseSafe("hold");
        onOpen();
      }, 1050)
    );
  }

  useEffect(() => {
    if (trigger !== lastTrigger.current) {
      lastTrigger.current = trigger;
      handleClick();
    }
  }, [trigger]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`vp-ball ${phase === "shake" ? "vp-shake" : ""}`}
        role={onOpen ? "button" : undefined}
        tabIndex={onOpen ? 0 : undefined}
        aria-label={controlledOpen ? "Close Project Dex" : "Open Project Dex"}
        aria-haspopup={onOpen ? "dialog" : undefined}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className={`vp-svg ${phase === "open" || phase === "hold" ? "vp-open" : ""}`}
          aria-hidden="true"
        >
          <g transform="translate(50 50) scale(0.8)">
            <g transform="translate(0 50)">
              <g transform="translate(0 -50)">
                <g transform="scale(1 1)">
                  <g className="vp-bottom">
                    <path fill="#ffffff" stroke="#1A002C" strokeWidth="5" d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z" />
                  </g>
                  <g className="vp-top">
                    <path fill="#7B2CBF" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0" />
                    <path
                      fill="none"
                      stroke="#E0AAFF"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="0 15 9 9 20 100"
                      d="M -38 -0 a 38 38 0 0 1 76 0"
                    />
                    <path fill="none" stroke="#1A002C" strokeWidth="5" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z" />
                  </g>
                  <g className="vp-open" transform="scale(1 0)">
                    <path
                      fill="#1A002C"
                      stroke="#1A002C"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"
                    />
                    <path
                      fill="#1A002C"
                      stroke="#1A002C"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"
                    />
                  </g>
                  <g className="vp-center">
                    <circle fill="#ffffff" stroke="#1A002C" strokeWidth="5" cx="0" cy="0" r="12" />
                    <circle fill="#ffffff" stroke="#1A002C" strokeWidth="3" cx="0" cy="0" r="6" />
                    <g className="vp-inner" opacity="0">
                      <circle fill="#B5179E" cx="0" cy="0" r="4.5" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
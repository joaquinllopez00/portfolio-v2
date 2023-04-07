import { Box } from "@chakra-ui/react";

export default function Waves({ flipped }: { flipped: any }) {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      zIndex={-1}
      className="animate__animated animate__fadeIn animate__delay-3s animate__slower"
      {...(flipped && { transform: "rotate(180deg)" })}
    >
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--brand-darkBlue)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--brand-darkBlue-low-opacity)" />
          </g>
        </svg>
      </div>
    </Box>
  );
}

import React from "react";

type Props = {
  onClick: () => void;
};

const ArrowBack: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ cursor: "pointer" }}
      data-testid="arrow-back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        viewBox="0 0 30 22"
      >
        <g transform="matrix(0.06 0 0 0.06 15.12 11.13)">
          <path
            // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
            // style={{stroke: 'none', }}
            transform=" translate(-256, -188.41)"
            d="M 156.88 372.7 a 12.026 12.026 0 0 0 17.09 1.06 c 5 -4.47 5.46 -12.2 1.04 -17.25 L 38.96 200.69 h 460.89 c 6.71 0 12.15 -5.5 12.15 -12.28 c 0 -6.77 -5.44 -12.27 -12.15 -12.27 H 38.95 L 175.01 20.32 c 4.42 -5.05 3.96 -12.78 -1.04 -17.25 c -5.01 -4.47 -12.66 -4 -17.09 1.05 l -153.67 176 c -4.17 4.55 -4.32 11.64 -0.17 16.39 L 156.88 372.7 z"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowBack;

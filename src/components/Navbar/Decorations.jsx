export default function Decorations() {
  return (
    <>
      {/* Top-right decoration */}
      <svg
        className="absolute top-0 right-0 opacity-50 -z-10"
        width="219"
        height="147"
        viewBox="0 0 219 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.18"
          x="10.4252"
          y="75.8326"
          width="7.50168"
          height="7.50168"
          transform="rotate(110.283 10.4252 75.8326)"
          fill="#686868"
          stroke="#686868"
          strokeWidth="1.22683"
        />
        <rect
          opacity="0.18"
          x="180.869"
          y="138.825"
          width="7.50168"
          height="7.50168"
          transform="rotate(110.283 180.869 138.825)"
          fill="#686868"
          stroke="#686868"
          strokeWidth="1.22683"
        />
        <rect
          x="69.4713"
          y="-91.84"
          width="180.485"
          height="180.485"
          transform="rotate(20.2832 69.4713 -91.84)"
          stroke="#686868"
          strokeOpacity="0.4"
          strokeWidth="1.22683"
        />
      </svg>

      {/* Bottom-left decoration */}
      <svg
        className="absolute bottom-0 left-0 opacity-50 -z-10"
        width="232"
        height="191"
        viewBox="0 0 232 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50.5685"
          cy="172.432"
          r="112.068"
          stroke="#686868"
          strokeOpacity="0.4"
        />
        <g opacity="0.4">
          <path d="M26.4932 5.20547L228.856 172.432" stroke="#686868" />
          <rect
            x="22.4384"
            y="0.5"
            width="6.15753"
            height="6.15753"
            fill="#686868"
            stroke="#686868"
          />
          <rect
            x="224.801"
            y="169.027"
            width="6.15753"
            height="6.15753"
            fill="#686868"
            stroke="#686868"
          />
          <circle
            cx="121.819"
            cy="83.613"
            r="1.7774"
            fill="#686868"
            stroke="#686868"
          />
        </g>
      </svg>
    </>
  );
}

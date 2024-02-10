import React from "react";

const Patient = ({ color, bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect width="64" height="64" rx="32" fill={bg} />
      <path
        d="M37.4516 28.4354C37.4516 29.2459 36.7944 29.9031 35.9839 29.9031C35.1733 29.9031 34.5161 29.2459 34.5161 28.4354C34.5161 27.6248 35.1733 26.9676 35.9839 26.9676C36.7944 26.9676 37.4516 27.6248 37.4516 28.4354Z"
        fill={color}
      />
      <path
        d="M42.0646 27.5464V27.3871C42.0646 25.9148 41.677 24.4685 40.941 23.1935C40.2048 21.9186 39.146 20.8598 37.871 20.1236C36.596 19.3876 35.1497 19 33.6775 19H32.2516C32.0251 19 31.8029 19 31.5807 19.0251V21.5412C31.8029 21.5412 32.0252 21.5119 32.2516 21.5119H33.6775C34.7085 21.5119 35.7214 21.7834 36.6142 22.2991C37.5069 22.8149 38.2482 23.5566 38.7632 24.4498C39.2784 25.343 39.5491 26.356 39.5484 27.3871V28.2258L42.4839 33.2581H39.5484V39.129H34.5162V45H37.0323V41.6452H39.5484C40.2157 41.6452 40.8558 41.3801 41.3275 40.9081C41.7995 40.4364 42.0646 39.7963 42.0646 39.129V35.7742H42.4839C43.3816 35.7717 44.2101 35.2912 44.6578 34.5133C45.1057 33.7351 45.105 32.7774 44.6562 32L42.0646 27.5464Z"
        fill={color}
      />
      <path
        d="M26.129 25.7097H23.6129V30.3226H19V32.8387H23.6129V37.4516H26.129V32.8387H30.7419V30.3226H26.129V25.7097Z"
        fill={color}
      />
    </svg>
  );
};

export default Patient;

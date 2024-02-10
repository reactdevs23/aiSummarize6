import React from "react";

const CareModel = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M0 2.98148V6.38889H2.55556V2.98148C2.55556 2.7462 2.7462 2.55556 2.98148 2.55556H6.38889V0H2.98148C2.19079 0 1.43235 0.314177 0.873219 0.873219C0.314191 1.43239 0 2.19079 0 2.98148Z"
        fill={color}
      />
      <path
        d="M23.0002 2.98148C23.0002 2.19079 22.686 1.43235 22.1269 0.873219C21.5678 0.314191 20.8094 0 20.0187 0H16.6113V2.55556H20.0187C20.1317 2.55556 20.24 2.60048 20.3198 2.68034C20.3997 2.7602 20.4446 2.86848 20.4446 2.98148V6.38889H23.0002V2.98148Z"
        fill={color}
      />
      <path
        d="M23.0002 20.0187V16.6113H20.4446V20.0187C20.4446 20.1317 20.3997 20.24 20.3198 20.3198C20.24 20.3997 20.1317 20.4446 20.0187 20.4446H16.6113V23.0002H20.0187C20.8094 23.0002 21.5678 22.686 22.1269 22.1269C22.686 21.5678 23.0002 20.8094 23.0002 20.0187Z"
        fill={color}
      />
      <path
        d="M0 20.0187C0 20.8094 0.314177 21.5678 0.873219 22.1269C1.43239 22.686 2.19079 23.0002 2.98148 23.0002H6.38889V20.4446H2.98148C2.7462 20.4446 2.55556 20.254 2.55556 20.0187V16.6113H0V20.0187Z"
        fill={color}
      />
      <path
        d="M5.11132 9.94949C5.10591 11.0104 5.52628 12.0292 6.27832 12.7776L11.5002 17.991L16.722 12.7776C17.721 11.8253 18.1563 10.424 17.8728 9.07315C17.5893 7.72233 16.6272 6.61424 15.3296 6.14395C14.0319 5.67366 12.5833 5.90811 11.5002 6.76357C10.7063 6.16684 9.71828 5.88758 8.72945 5.98036C7.74063 6.07311 6.82194 6.53122 6.15281 7.2652C5.48368 7.99921 5.11242 8.9563 5.11128 9.94956L5.11132 9.94949ZM9.09799 8.51838C9.47883 8.52115 9.84321 8.67422 10.1117 8.94431L11.5002 10.3243L12.8888 8.94431C13.2567 8.62472 13.7621 8.51451 14.2298 8.65162C14.6974 8.78874 15.0631 9.1545 15.2003 9.62216C15.3374 10.0898 15.2272 10.5952 14.9076 10.9632L11.5002 14.3706L8.0928 10.9632C7.8241 10.6954 7.67269 10.332 7.67188 9.95282C7.67104 9.57347 7.82064 9.20941 8.08811 8.94044C8.35556 8.6716 8.71866 8.51976 9.09799 8.51838Z"
        fill={color}
      />
    </svg>
  );
};

export default CareModel;
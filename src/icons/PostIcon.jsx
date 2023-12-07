import { useEffect, useState } from "react";

function PostIcon( { color }) {

  const [selected, setSelected] = useState(null)

  useEffect(()=> {color ? setSelected('logo') : setSelected(null)},[color])

  return (
    <div className={`w-5 text-bunker-${selected}`}>
      <svg
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        viewBox="0 0 24 24"
        width='100%'
        height='100%'
      >
        <path
          d="M3 3h18v18H3zM9.015 3v18M14.985 3v18M21 9.015H3M21 14.985H3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default PostIcon
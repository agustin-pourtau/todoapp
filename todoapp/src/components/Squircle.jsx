import React, { useEffect, useRef } from "react";

const Squircle = ({ children }) => {
  const squircleRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (squircleRef.current) {
        const width = squircleRef.current.offsetWidth;
        const height = width; // Puedes ajustar la proporción según tus necesidades
        squircleRef.current.style.height = `${height}px`;
      }
    };

    // Llama a la función inicialmente y luego escucha cambios en el tamaño de la ventana
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section>
      <div
        ref={squircleRef}
        className="text-white font-mono text-xl d-flex align-items-center justify-content-center"
        style={{
          clipPath: `url(#squircleClip)`,
          backgroundColor: "#2D3142",
          width: "auto",
          padding: "1rem"
        }}
      >
        {children}
      </div>

      <svg width="0" height="0" viewBox="0 0 10 10">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path
            fill="none"
            stroke="none"
            d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
          />
        </clipPath>
      </svg>
    </section>
  );
};

export default Squircle;

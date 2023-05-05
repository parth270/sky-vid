import CanvasContainer from "../three"
import React, { Suspense, useRef, useState } from "react";
import Loader from "../../utils/Loader/index"

const SkyboxContainer = ({ children }) => {
    return (
      <>
        {/* <div
          className="w-[100%] h-[100vh] absolute z-1000 bg-transparent select-none "
          onMouseUp={mouseUp}
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          style={{
            cursor: state.dragging ? "grabbing" : "grab",
            zIndex:1000
          }}
        >
          {children}
        </div> */}
        {children}
        <div className="w-[100%] h-[100%] absolute z-100 select-none ">
          <Suspense fallback={<Loader />}>
            <CanvasContainer />
          </Suspense>
        </div>
      </>
    );
  };

export default SkyboxContainer;
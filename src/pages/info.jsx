import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Data from "../components/data.jsx";


export default function Info() {

  return (
    <>
      <h1 className="title">Info!</h1>
                <div>
            <div className="ag-theme-alpine" style={{ width: 1000, height: 500 }}>
      {/* Other content */}
      <Data product_id={13915} />
                  </div></div>
      
      

    </>
  );
}

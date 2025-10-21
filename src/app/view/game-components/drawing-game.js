'use client';

import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Game1() {
  const canvasWrapperRef = useRef(null);

  useEffect(() => {
    const loadP5 = async () => {
      const p5 = (await import("p5")).default;

      new p5((sketch) => {
        let canvas;

        sketch.setup = () => {
          const parentWidth = canvasWrapperRef.current.offsetWidth;
          const parentHeight = window.innerHeight * 0.7; // 70% layar
          canvas = sketch.createCanvas(parentWidth, parentHeight);
          canvas.parent(canvasWrapperRef.current);
          sketch.background(255);
        };

        sketch.windowResized = () => {
          const parentWidth = canvasWrapperRef.current.offsetWidth;
          const parentHeight = window.innerHeight * 0.7;
          sketch.resizeCanvas(parentWidth, parentHeight);
          sketch.background(255);
        };

        sketch.draw = () => {};

        sketch.mouseDragged = () => {
          const type = document.querySelector("#pen-pencil")?.checked
            ? "pencil"
            : "brush";
          const size = parseInt(
            document.querySelector("#pen-size")?.value || "1"
          );
          const color = document.querySelector("#pen-color")?.value || "#000";

          sketch.fill(color);
          sketch.stroke(color);
          sketch.strokeWeight(size);

          if (type === "pencil") {
            sketch.line(
              sketch.pmouseX,
              sketch.pmouseY,
              sketch.mouseX,
              sketch.mouseY
            );
          } else {
            sketch.ellipse(sketch.mouseX, sketch.mouseY, size, size);
          }
        };
      });

      document.getElementById("reset-canvas")?.addEventListener("click", () => {
        const canvases = document.getElementsByTagName("canvas");
        if (canvases.length > 0) {
          const ctx = canvases[0].getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvases[0].width, canvases[0].height);
        }
      });

      document.getElementById("save-canvas")?.addEventListener("click", () => {
        const canvases = document.getElementsByTagName("canvas");
        if (canvases.length > 0) {
          const link = document.createElement("a");
          link.download = "sketch.png";
          link.href = canvases[0].toDataURL();
          link.click();
        }
      });
    };

    loadP5();
  }, []);

  return (
    <>
      <Head>
        <title>Drawing Game</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      <div className="app">
        <div className="controls">
          <div className="title">Sketch</div>

          <div className="type">
            <input type="radio" name="pen-type" id="pen-pencil" defaultChecked />
            <label htmlFor="pen-pencil">
              <i className="fa-solid fa-pencil" />
            </label>

            <input type="radio" name="pen-type" id="pen-brush" />
            <label htmlFor="pen-brush">
              <i className="fa fa-paint-brush" />
            </label>
          </div>

          <div className="size">
            <label htmlFor="pen-size">Size</label>
            <input type="range" id="pen-size" min="1" max="50" />
          </div>

          <div className="color">
            <label htmlFor="pen-color">Color</label>
            <input type="color" id="pen-color" defaultValue="#000" />
          </div>

          <div className="actions">
            <button id="reset-canvas">Canvas</button>
            <button id="save-canvas">Save</button>
          </div>
        </div>

        <div id="canvas-wrapper" ref={canvasWrapperRef}></div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #555;
        }
        .app {
          position: relative;
          margin: 10px auto;
          width: 100%;
          max-width: 650px;
          font-family: "Raleway", sans-serif;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }
        .controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background: #ddd;
          padding: 8px;
          gap: 10px;
        }
        .controls .title {
          font-weight: 600;
          color: #222;
          min-width: 60px;
        }
        .controls .type input {
          display: none;
        }
        .controls .type label {
          width: 30px;
          height: 30px;
          display: inline-block;
          text-align: center;
          line-height: 30px;
          margin: 0 5px;
          cursor: pointer;
        }
        .controls .type input:checked + label {
          background: #111;
          color: #eee;
          border-radius: 50%;
        }
        .controls .size input {
          height: 10px;
        }
        .controls .actions {
          margin-left: auto;
          display: flex;
          gap: 8px;
        }
        .controls .actions button {
          padding: 5px 10px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
        }

        /* Responsif untuk smartphone */
        @media (max-width: 600px) {
          .app {
            border-radius: 0;
          }
          .controls {
            flex-direction: column;
            align-items: flex-start;
          }
          .controls .actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </>
  );
}

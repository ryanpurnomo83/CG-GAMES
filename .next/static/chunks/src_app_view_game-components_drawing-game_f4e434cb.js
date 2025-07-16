(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/view/game-components/drawing-game.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Game1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client'; // Tambahkan ini kalau di Next.js App Router (wajib untuk file yang pakai browser-only code)
;
;
;
;
function Game1() {
    _s();
    const canvasWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game1.useEffect": ()=>{
            const loadP5 = {
                "Game1.useEffect.loadP5": async ()=>{
                    const p5 = (await __turbopack_context__.r("[project]/node_modules/p5/dist/app.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default;
                    new p5({
                        "Game1.useEffect.loadP5": (sketch)=>{
                            let canvas;
                            sketch.setup = ({
                                "Game1.useEffect.loadP5": ()=>{
                                    canvas = sketch.createCanvas(650, 600);
                                    canvas.parent(canvasWrapperRef.current);
                                    sketch.background(255);
                                }
                            })["Game1.useEffect.loadP5"];
                            sketch.draw = ({
                                "Game1.useEffect.loadP5": ()=>{
                                // kosongkan atau buat sesuai kebutuhan
                                }
                            })["Game1.useEffect.loadP5"];
                            sketch.mouseDragged = ({
                                "Game1.useEffect.loadP5": ()=>{
                                    const type = document.querySelector("#pen-pencil")?.checked ? "pencil" : "brush";
                                    const size = parseInt(document.querySelector("#pen-size")?.value || "1");
                                    const color = document.querySelector("#pen-color")?.value || "#000";
                                    sketch.fill(color);
                                    sketch.stroke(color);
                                    sketch.strokeWeight(size);
                                    if (type === "pencil") {
                                        sketch.line(sketch.pmouseX, sketch.pmouseY, sketch.mouseX, sketch.mouseY);
                                    } else {
                                        sketch.ellipse(sketch.mouseX, sketch.mouseY, size, size);
                                    }
                                }
                            })["Game1.useEffect.loadP5"];
                        }
                    }["Game1.useEffect.loadP5"]);
                    document.getElementById("reset-canvas")?.addEventListener("click", {
                        "Game1.useEffect.loadP5": ()=>{
                            const canvases = document.getElementsByTagName("canvas");
                            if (canvases.length > 0) {
                                const ctx = canvases[0].getContext("2d");
                                ctx.fillStyle = "#fff";
                                ctx.fillRect(0, 0, canvases[0].width, canvases[0].height);
                            }
                        }
                    }["Game1.useEffect.loadP5"]);
                    document.getElementById("save-canvas")?.addEventListener("click", {
                        "Game1.useEffect.loadP5": ()=>{
                            const canvases = document.getElementsByTagName("canvas");
                            if (canvases.length > 0) {
                                const link = document.createElement("a");
                                link.download = "sketch.png";
                                link.href = canvases[0].toDataURL();
                                link.click();
                            }
                        }
                    }["Game1.useEffect.loadP5"]);
                }
            }["Game1.useEffect.loadP5"];
            loadP5();
        }
    }["Game1.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-a76d9429b0eea9b8",
                        children: "Drawing Game"
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
                        className: "jsx-a76d9429b0eea9b8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a76d9429b0eea9b8" + " " + "app",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a76d9429b0eea9b8" + " " + "controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a76d9429b0eea9b8" + " " + "title",
                                children: "Sketch"
                            }, void 0, false, {
                                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a76d9429b0eea9b8" + " " + "type",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "pen-type",
                                        id: "pen-pencil",
                                        defaultChecked: true,
                                        className: "jsx-a76d9429b0eea9b8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "pen-pencil",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "jsx-a76d9429b0eea9b8" + " " + "fa-solid fa-pencil"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "pen-type",
                                        id: "pen-brush",
                                        className: "jsx-a76d9429b0eea9b8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "pen-brush",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "jsx-a76d9429b0eea9b8" + " " + "fa fa-paint-brush"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a76d9429b0eea9b8" + " " + "size",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "pen-size",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        id: "pen-size",
                                        min: "1",
                                        max: "50",
                                        className: "jsx-a76d9429b0eea9b8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a76d9429b0eea9b8" + " " + "color",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "pen-color",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        id: "pen-color",
                                        defaultValue: "#000",
                                        className: "jsx-a76d9429b0eea9b8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a76d9429b0eea9b8" + " " + "actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "reset-canvas",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: "Canvas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "save-canvas",
                                        className: "jsx-a76d9429b0eea9b8",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "canvas-wrapper",
                        ref: canvasWrapperRef,
                        className: "jsx-a76d9429b0eea9b8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/view/game-components/drawing-game.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/view/game-components/drawing-game.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a76d9429b0eea9b8",
                children: ".jsx-a76d9429b0eea9b8{box-sizing:border-box;margin:0;padding:0}body.jsx-a76d9429b0eea9b8{background:#555}.app.jsx-a76d9429b0eea9b8{width:650px;height:650px;font-family:Raleway,sans-serif;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.controls.jsx-a76d9429b0eea9b8{background:#ddd;align-items:center;height:50px;padding:0 10px;display:flex}.controls.jsx-a76d9429b0eea9b8 .title.jsx-a76d9429b0eea9b8{color:#222;width:80px;font-weight:600}.controls.jsx-a76d9429b0eea9b8 .type.jsx-a76d9429b0eea9b8,.controls.jsx-a76d9429b0eea9b8 .size.jsx-a76d9429b0eea9b8,.controls.jsx-a76d9429b0eea9b8 .color.jsx-a76d9429b0eea9b8{margin:0 10px}.controls.jsx-a76d9429b0eea9b8 .type.jsx-a76d9429b0eea9b8 input.jsx-a76d9429b0eea9b8{display:none}.controls.jsx-a76d9429b0eea9b8 .type.jsx-a76d9429b0eea9b8 label.jsx-a76d9429b0eea9b8{text-align:center;cursor:pointer;width:30px;height:30px;margin:0 20px;line-height:30px;display:inline-block}.controls.jsx-a76d9429b0eea9b8 .type.jsx-a76d9429b0eea9b8 input.jsx-a76d9429b0eea9b8:checked+label.jsx-a76d9429b0eea9b8{color:#eee;background:#111;border-radius:50%}.controls.jsx-a76d9429b0eea9b8 .size.jsx-a76d9429b0eea9b8 input.jsx-a76d9429b0eea9b8{height:10px}.controls.jsx-a76d9429b0eea9b8 .actions.jsx-a76d9429b0eea9b8{text-align:right;flex:1}.controls.jsx-a76d9429b0eea9b8 .actions.jsx-a76d9429b0eea9b8 button.jsx-a76d9429b0eea9b8{cursor:pointer;padding:5px 10px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Game1, "S1Qo3Zjx2VKwc0QcXnRFPMc323Q=");
_c = Game1;
var _c;
__turbopack_context__.k.register(_c, "Game1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_view_game-components_drawing-game_f4e434cb.js.map
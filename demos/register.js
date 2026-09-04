import { createElement } from "react";
import { createRoot } from "react-dom/client";
import StippleDemo from "./stipple.jsx";
import CrosshatchDemo from "./crosshatch.jsx";
import InteractiveDemo from "./interactive.jsx";
import StipplePlayground from "./stipple-playground.jsx";

const demos = {
  stipple: StippleDemo,
  crosshatch: CrosshatchDemo,
  interactive: InteractiveDemo,
  "stipple-playground": StipplePlayground,
};

window.ETCH_DEMOS = demos;

window.__mountEtchDemo = (node, name) => {
  const Component = demos[name];
  if (!Component) return;
  const root = createRoot(node);
  root.render(createElement(Component));
};

window.dispatchEvent(new Event("etch-demos-ready"));

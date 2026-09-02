(function () {
  const MOUNTED = "data-etch-mounted";

  function currentRoot() {
    return document.querySelector(".markdown-section") || document.body;
  }

  function mountDemos(root) {
    if (!root) return;
    const nodes = root.querySelectorAll("[data-etch-demo]");
    nodes.forEach((node) => {
      if (node.hasAttribute(MOUNTED)) return;
      const name = node.getAttribute("data-etch-demo");
      const demos = window.ETCH_DEMOS;
      if (!demos || !demos[name] || typeof window.__mountEtchDemo !== "function") {
        return;
      }
      node.setAttribute(MOUNTED, "true");
      window.__mountEtchDemo(node, name);
    });
  }

  function replaceDemoFences(markdown) {
    if (typeof markdown !== "string") return markdown;
    return markdown.replace(
      /```demo\s+([\w-]+)\s*```/g,
      function (match, name) {
        return '<div class="etch-demo" data-etch-demo="' + name + '"></div>';
      }
    );
  }

  function process() {
    mountDemos(currentRoot());
  }

  window.etchDemosPlugin = function (hook) {
    hook.beforeEach(replaceDemoFences);
    hook.doneEach(process);
  };

  window.addEventListener("etch-demos-ready", process);
})();

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener(
    "click",
    function (event) {
      const button = event.target.closest(".md-clipboard, [data-md-type='copy']");
      if (!button) return;

      const container = button.closest(".highlight, .codehilite, pre");
      const codeElement = container ? container.querySelector("code") || container : null;

      if (!codeElement) return;

      event.preventDefault();
      event.stopPropagation();

      // Remove leading '$ ' or '$' from lines
      const rawText = codeElement.innerText;
      const cleanedText = rawText.replace(/^\$\s*/gm, "");

      // Write stripped text to clipboard
      navigator.clipboard.writeText(cleanedText).then(() => {
        button.classList.add("md-clipboard--copied");
        setTimeout(() => {
          button.classList.remove("md-clipboard--copied");
        }, 2000);
      });
    },
    true
  );
});

// Block drag/triple click highlighting from copying $
document.addEventListener("copy", function (event) {
  const selection = document.getSelection();
  if (!selection || selection.isCollapsed) return;

  // Only act if selection is inside code block
  const node = selection.anchorNode;
  const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  if (!element || !element.closest(".highlight, .codehilite, pre")) return;

  const cleanedText = selection.toString().replace(/^\$\s*/gm, "");
  event.clipboardData.setData("text/plain", cleanedText);
  event.preventDefault();
});
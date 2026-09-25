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

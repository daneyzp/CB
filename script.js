// Auto-highlight and copy functionality
document.querySelectorAll('.code-block').forEach((block, i) => {
  const codeEl = block.querySelector('code');
  const textarea = document.querySelectorAll('.code-source')[i];

  // Set code and highlight
  codeEl.textContent = textarea.value;
  Prism.highlightElement(codeEl);

  // Copy button functionality
  const button = block.querySelector('button');
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(textarea.value)
      .then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      })
      .catch(err => alert("Copy failed: " + err));
  });
});

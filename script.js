 <!-- Prism core JS -->
<!-- Add the languages you want -->

(function showHighlighted() {
  const raw = document.getElementById(&quot;sourceCode&quot;).value;
  const codeEl = document.getElementById(&quot;highlighted&quot;);
  codeEl.textContent = raw;     
  Prism.highlightElement(codeEl);
})();

function copyCode() {
  const raw = document.getElementById(&quot;sourceCode&quot;).value;
  navigator.clipboard.writeText(raw)
    .then(() =&gt; (&quot;Code copied!&quot;))
    .catch(err =&gt; alert(&quot;Copy failed: &quot; + err));
}
  <!-- Prism JS more code box-->
<script src='https://cdn.jsdelivr.net/npm/prismjs/prism.min.js'/>
<!-- Add the languages you want -->
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-c.min.js'/>
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-cpp.min.js'/>
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-markup.min.js'/> <!-- HTML -->
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-css.min.js'/>
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-javascript.min.js'/>
<script src='https://cdn.jsdelivr.net/npm/prismjs/components/prism-python.min.js'/>


// Automatically link each textarea to its code block
document.querySelectorAll(&#39;.code-block&#39;).forEach((block, i) =&gt; {
  const codeEl = block.querySelector(&#39;code&#39;);
  const textarea = document.querySelectorAll(&#39;.code-source&#39;)[i];

  // Fill code and highlight
  codeEl.textContent = textarea.value;
  Prism.highlightElement(codeEl);

  // Copy button
  const button = block.querySelector(&#39;button&#39;);
  button.addEventListener(&#39;click&#39;, () =&gt; {
    navigator.clipboard.writeText(textarea.value)
      .then(() =&gt; (&quot;Code copied!&quot;))
      .catch(err =&gt; alert(&quot;Copy failed: &quot; + err));
  });
});

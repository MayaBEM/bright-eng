/* ==========================================================================
   PAGE: CREDITS AND COPYRIGHT
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.credits = {
  render: function (container) {
    var year = new Date().getFullYear();
    var content =
      '<div class="prose-wrap">' +
      "<h1>Credits &amp; Copyright</h1>" +
      "<h3>Product</h3>" +
      "<p><strong>Math Adventure Quest</strong> is an original interactive mathematics learning product created and published by <strong>Bright EngMath</strong>.</p>" +

      "<h3>Content</h3>" +
      "<p>All 75 quest questions, explanations, hints, and solution steps are original works written for this product. No text or questions were copied from any textbook or third-party source.</p>" +

      "<h3>Visual &amp; audio design</h3>" +
      "<p>All illustrations are original inline SVG artwork and CSS-drawn shapes created for this product. All sound effects are synthesized in the browser — no third-party audio, image, or font files are used.</p>" +

      "<h3>Copyright notice</h3>" +
      "<p>© " + year + " Bright EngMath. All rights reserved.<br/>Interactive learning content created for educational use.</p>" +

      "<h3>A note on the certificate</h3>" +
      "<p>The Math Adventure Quest certificate recognises independent practice and effort. It is not an officially accredited academic qualification.</p>" +

      "<h3>Brand assets</h3>" +
      "<p>The \"Bright EngMath\" wordmark used throughout this product is a temporary text-based logo. It — and every color, icon, and illustration — is defined through the shared design-token stylesheet and can be swapped for finished brand assets at any time.</p>" +

      '<div style="text-align:center; margin-top:20px;"><a class="btn btn-primary" href="#/map">Back to the Map</a></div>' +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, {});
    window.MAQ.components.attachNavbarEvents();
  }
};

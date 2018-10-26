document.addEventListener("DOMContentLoaded", () => {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.setAttribute("rel", "shortcut icon");
  link.setAttribute('type', 'image/png');
  link.setAttribute("href", "http://localhost:3000/favicon2-16x16.png");
  head.appendChild(link);
})

// Example: Smooth scrolling for anchor links within the page
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

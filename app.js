// Simple JS to show interactivity (optional)
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn.primary");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Session request sent!");
      });
    });
  });
  
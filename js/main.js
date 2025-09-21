document.querySelectorAll(".mat-expansion-panel-header").forEach(header => {
    header.addEventListener("click", () => {
      const panel = header.nextElementSibling;
      const icon = header.querySelector(".mat-icon");

      panel.classList.toggle("open");
      icon.classList.toggle("rotate");
    });
  });
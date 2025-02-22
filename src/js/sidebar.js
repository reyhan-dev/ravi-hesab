document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  const sidebarLinks =
    document.querySelectorAll(".sidebar-item");

  sidebarLinks.forEach((link) => {
    const linkPath = new URL(
      link.href,
      window.location.origin
    ).pathname;
    if (linkPath === currentPath) {
      link.classList.add("active-sidebar-item");
    }
  });
});

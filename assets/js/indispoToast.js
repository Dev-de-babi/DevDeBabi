const indispoBtns = document.querySelectorAll(".gamesModals .indispo");
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
indispoBtns.forEach(indispo => {
    indispo.addEventListener("click", (e) => {
        e.preventDefault();
        Toast.fire({
          icon: "warning",
          title: "Indisponible pour le moment...",
        });
        document.querySelector(".swal2-timer-progress-bar").classList.remove("vert");
        document.querySelector(".swal2-timer-progress-bar").classList.remove("rouge");
        document.querySelector(".swal2-timer-progress-bar").classList.add("orangee");
      });
});
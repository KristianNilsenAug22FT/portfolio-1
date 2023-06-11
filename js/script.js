var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modalImage");

function openModal(element) {
  modal.style.display = "block";
  modalImg.src = element.src;
}

document.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



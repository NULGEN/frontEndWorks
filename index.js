const buton = document.createElement("button");
buton.textContent = "Karanlık temayı aç";
buton.setAttribute("id", "acKapa");

document.querySelector(".description").appendChild(buton);

buton.addEventListener("click", karanlikTemayiAcKapa);

function karanlikTemayiAcKapa() {
  const body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    buton.textContent = "Karanlık temayı aç";
  } else {
    body.classList.add("dark");
    buton.textContent = "Karanlık temayı kapat";
  }
}

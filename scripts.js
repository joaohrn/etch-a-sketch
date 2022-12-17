function createGrid(size) {
  if (size > 100) {
    alert("too many squares");
    return;
  }
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 1; i <= Math.pow(size, 2); i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}
const creator = document.querySelector(".btn");
creator.addEventListener("click", () => {
  const choice = prompt("how many squares do you want");
  createGrid(parseInt(choice));
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.width = `calc(960px/${choice})`;
  });
  squares.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "red";
    });
  });
});

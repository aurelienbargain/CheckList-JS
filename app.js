const icone = `<span class="check"><i class="fa-solid fa-check"></i></span>`;

document.querySelectorAll("ul li");

let tabLi = document.querySelectorAll(`ul li`); // select all lignes tableau

//ajout écouteur event au clic sur ttes les lignes
for (let li of tabLi) {
  li.addEventListener(`click`, function () {
    
    this.classList.toggle(`active`);
    if (this.classList.contains("active")) {
      this.innerHTML = this.innerText + ' ' + icone;
    } else {
      this.innerHTML = this.innerText;
    }
  });
}
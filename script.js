const button = document.querySelector(".menu-button")
const sideBar = document.querySelector(".navbar-mobile")
const background = document.querySelector(".background")

button.addEventListener("click", ()=>{
    // Verifica se a sidebar está ativa
    const isActive = button.classList.contains("active")

    // Adiciona ou remove a classe active
    button.classList.toggle("active", !isActive);
    sideBar.classList.toggle("active", !isActive);
    background.classList.toggle("active", !isActive);

    button.innerHTML = isActive ? "<i class='fa-solid fa-bars' ></i>" : "<i class='fa-solid fa-x'></i>";

    
})

background.addEventListener("click", () => {
    // Remove as classes 'active' se a sidebar estiver ativa
    if (sideBar.classList.contains("active")) {
        button.classList.remove("active");
        sideBar.classList.remove("active");
        background.classList.remove("active");
        button.innerHTML = "<i class='fa-solid fa-bars' ></i>"; // Reseta o texto do botão
    }
});


//data exata do ano
const yeardate = document.querySelector(".date")

yeardate.innerHTML = new Date().getFullYear()
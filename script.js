const page = document
const listNavItens = page.querySelector(".list-nav-itens")
const navItens = listNavItens.querySelectorAll(".nav-item button")

function trocarSection(button) {
    const buttonText = button.textContent

    navItens.forEach(itemButton => {
        itemButton.classList.remove('active')
    });

    button.classList.add('active')
}

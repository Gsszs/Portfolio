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

function idade() {
    const ano_aniversario = 2006;
    const mes_aniversario = 9;
    const dia_aniversario = 8;

    let d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1, // Os meses em JavaScript são baseados em zero (0-11)
        dia_atual = d.getDate(),

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || (mes_atual == mes_aniversario && dia_atual < dia_aniversario)) {
        quantos_anos--;
    }

    const elementoIdade = document.querySelector('.idade');
    elementoIdade.textContent = 'Idade: ' + quantos_anos + ' anos';
}

function tempo_projetos() {
    const ano = 2018;
    const mes = 7;

    let d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth(),

        quantos_anos = ano_atual - ano;

    if (mes_atual < mes || mes_atual == mes) {
        quantos_anos--;
    }

    const elementoTempo = document.querySelector('.tempo_projetos');
    elementoTempo.textContent = 'Tempo de Projetos: ' + quantos_anos + ' anos';
}

function carregar_anos() {
    tempo_projetos()
    idade()
}

window.addEventListener('load', carregar_anos);
const listNavItens = document.querySelector(".list-nav-itens")
const navItens = listNavItens.querySelectorAll(".nav-item button")

const portfolioButton = document.getElementById('portfolioButton');
const sobreButton = document.getElementById('sobreButton');

const portfolioContent = document.getElementById('portfolio_content');
const sobreContent = document.getElementById('sobre_content');


function intial() {
    navItens.forEach(button => {
        if (button.innerText[0] != "P") {
            button.classList.remove("active")
        } else {
            button.classList.add("active")
        }
    })

    portfolioContent.classList.remove('unselected');
    sobreContent.classList.add('unselected');
}

function trocarSection(button) {
    navItens.forEach(navButton => {
        navButton.classList.remove('active');
    });

    button.classList.add('active');

    const textButton = button.textContent.trim();

    if (textButton === "Portfolio") {
        sobreContent.classList.add('exit_animation');
        setTimeout(() => {
            sobreContent.classList.add('unselected');
            portfolioContent.classList.remove('unselected');
            sobreContent.classList.remove('exit_animation');
        }, 400);
    } else if (textButton === "Sobre-mim") {
        portfolioContent.classList.add('exit_animation');
        setTimeout(() => {
            portfolioContent.classList.add('unselected');
            portfolioContent.classList.remove('exit_animation');
            sobreContent.classList.remove('unselected');
        }, 300);
    }
}

function idade() {
    const ano_aniversario = 2006;
    const mes_aniversario = 9;
    const dia_aniversario = 8;

    let d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
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

    mes_atual < mes || mes_atual == mes ? quantos_anos-- : quantos_anos

    const elementoTempo = document.querySelector('.tempo_projetos');
    elementoTempo.textContent = 'Tempo de Projetos: ' + quantos_anos + ' anos';
}

function carregar_scripts() {
    intial()
    tempo_projetos()
    idade()
}

window.addEventListener('load', carregar_scripts);
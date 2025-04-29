window.addEventListener("load", function () {
    const tamanhoSalvo = localStorage.getItem("tamanhoFonte");
    if (tamanhoSalvo) {
        document.querySelectorAll("*").forEach(function (el) {
            el.style.fontSize = tamanhoSalvo + "px";
        });
    }
});
function aumentarFonte() {
    const tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);
    const novoTamanho = tamanhoAtual + 5;
    document.querySelectorAll("*").forEach(function (el) {
        el.style.fontSize = novoTamanho + "px";
    });
    localStorage.setItem("tamanhoFonte", novoTamanho);
}

function diminuirFonte() {
    const tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);
    const novoTamanho = tamanhoAtual - 5;
    document.querySelectorAll("*").forEach(function (el) {
        el.style.fontSize = novoTamanho + "px";
    });
    localStorage.setItem("tamanhoFonte", novoTamanho);
}

function resetarfonte() {
    localStorage.removeItem("");

    document.querySelectorAll("*").forEach(function (el) {
        el.style.fontSize = "";
    })
}

function altoContraste() {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    document.body.style.backgroundColor = "green"
}

function baixoContraste() {
    document.body.style.filter = "none";
    document.body.style.backgroundColor = "#022924"
}

const display = document.querySelector('.display');
const botoes = document.querySelectorAll('.botoes button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (valor === 'C') {
            display.value = '';
        } else if (valor === '←') {
            display.value = display.value.slice(0, -1);
        } else if (valor === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erro';
            }
        } else {
            display.value += valor;
        }
    });
});
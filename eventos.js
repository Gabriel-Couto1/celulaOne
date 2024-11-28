document.addEventListener('DOMContentLoaded', () => {
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagensDestaque = document.querySelectorAll('.imagem__destaque');

    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener('click', () => {
            // Remove a classe 'ativa' de todas as imagens
            imagensDestaque.forEach(img => img.classList.remove('ativa'));
            // Adiciona a classe 'ativa' à imagem correspondente
            imagensDestaque[index].classList.add('ativa');
        });
    });
});

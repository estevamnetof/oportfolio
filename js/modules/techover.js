export default function initTecHover() {
    const logos = document.querySelectorAll('.logos');
    const descricao = document.querySelectorAll('.conhecimentos-descricao');

    function descriptionView(index) {
        descricao.forEach(desc => {
            desc.classList.remove('aberto');
        });
        descricao[index].classList.add('aberto');
    }

    descricao[4].classList.add('aberto');
    if (logos.length && descricao.length) {
            logos.forEach((logo, index) => {
            logo.addEventListener('mouseover', () => {
            descriptionView(index);
            });
        });
    }
}

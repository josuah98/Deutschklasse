document.addEventListener('DOMContentLoaded', () => {
    const buttonretour = document.getElementById('myButtonRetour');
    buttonretour.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirige vers la nouvelle page
        });
    const buttonchoucroute = document.getElementById('myButtonChoucroute');
    buttonchoucroute.addEventListener('click', () => {
        window.location.href = 'choucroute_index.html'; // Redirige vers la nouvelle page
        });
});
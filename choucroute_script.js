document.getElementById('submitBtn').addEventListener('click', function() {
    
    // Sélectionner toutes les cases à cocher avec un id commençant par "chou"
    let checkboxes_chou = document.querySelectorAll('input[type="checkbox"][id^="chou"]');
    let chou = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_chou.forEach(function(checkbox) {
        if (checkbox.checked) {
            chou++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "oignon"
    let checkboxes_oignon = document.querySelectorAll('input[type="checkbox"][id^="oignon"]');
    let oignon = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_oignon.forEach(function(checkbox) {
        if (checkbox.checked) {
            oignon++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "echalote"
    let checkboxes_echalote = document.querySelectorAll('input[type="checkbox"][id^="echalote"]');
    let echalote = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_echalote.forEach(function(checkbox) {
        if (checkbox.checked) {
            echalote++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "baiesdege"
    let checkboxes_baiesdege = document.querySelectorAll('input[type="checkbox"][id^="baiesdege"]');
    let baiesdege = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_baiesdege.forEach(function(checkbox) {
        if (checkbox.checked) {
            baiesdege++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "baiesdeco"
    let checkboxes_baiesdeco = document.querySelectorAll('input[type="checkbox"][id^="baiesdeco"]');
    let baiesdeco = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_baiesdeco.forEach(function(checkbox) {
        if (checkbox.checked) {
            baiesdeco++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "cumin"
    let checkboxes_cumin = document.querySelectorAll('input[type="checkbox"][id^="cumin"]');
    let cumin = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_cumin.forEach(function(checkbox) {
        if (checkbox.checked) {
            cumin++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "lard"
    let checkboxes_lard = document.querySelectorAll('input[type="checkbox"][id^="lard"]');
    let lard = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_lard.forEach(function(checkbox) {
        if (checkbox.checked) {
            lard++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "saucisse"
    let checkboxes_saucisse = document.querySelectorAll('input[type="checkbox"][id^="saucisse"]');
    let saucisse = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_saucisse.forEach(function(checkbox) {
        if (checkbox.checked) {
            saucisse++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "pommedeterre"
    let checkboxes_pommedeterre = document.querySelectorAll('input[type="checkbox"][id^="pommedeterre"]');
    let pommedeterre = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_pommedeterre.forEach(function(checkbox) {
        if (checkbox.checked) {
            pommedeterre++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "biereblonde"
    let checkboxes_biereblonde = document.querySelectorAll('input[type="checkbox"][id^="biereblonde"]');
    let biereblonde = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_biereblonde.forEach(function(checkbox) {
        if (checkbox.checked) {
            biereblonde++;
        }
    });

    // Sélectionner toutes les cases à cocher avec un id commençant par "eau"
    let checkboxes_eau = document.querySelectorAll('input[type="checkbox"][id^="eau"]');
    let eau = 0;
    // Parcourir les cases à cocher et compter celles qui sont cochées
    checkboxes_eau.forEach(function(checkbox) {
        if (checkbox.checked) {
            eau++;
        }
    });

    //on va afficher l'image
    let resultDiv = document.getElementById('choucroute');
    resultDiv.innerHTML = '';
    let img = document.createElement('img');

    //si on a bien choisi les ingrédients
    if (chou == 4 && oignon == 3 && echalote == 1 && baiesdege == 4 && baiesdeco == 2 && cumin == 2 && lard == 2 && saucisse == 8 && pommedeterre == 3 && biereblonde == 1 && eau == 1){
        img.src = 'plats/choucroute.jpg'; // Remplacez par le chemin de votre image
        img.alt = 'Sehr gut !';
        img.style.width = '300px'; // Ajustez la taille de l'image selon vos besoins
        img.style.height = '300px';
        resultDiv.appendChild(img);

        // Styles pour centrer l'image
        img.style.display = 'block';
        img.style.margin = '0 auto';
    }
    else{
        img.src = 'plats/echec.jpg'; // Remplacez par le chemin de votre image
        img.alt = 'Sehr gut !';
        img.style.width = '300px'; // Ajustez la taille de l'image selon vos besoins
        img.style.height = '300px';
        resultDiv.appendChild(img);

        // Styles pour centrer l'image
        img.style.display = 'block';
        img.style.margin = '0 auto';
    }
});
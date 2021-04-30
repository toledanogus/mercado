let lfinal = [];
const valoresNuevos = {
        .25:'1/4 kg ',
        .5: '1/2 kg ',
        .75: '3/4 kg ',
        1: '1 kg ',
        1.25: '1 1/4 kg (Un kilo y cuarto)',
        1.5: '1 1/2 kg (Un kilo y medio)',
        1.75: '1 3/4 kg (Un kilo y tres cuartos)',
        2: '2 kg ',
        2.5: '2 1/2 kg (Dos kilos y medio)',
        3: '3 kg ',
}

const calcular = () => {
        const nom=document.getElementsByClassName('vv');
        const val=document.getElementsByClassName('pp');
        for (let i = 0; i < nom.length; i++) {
                if (val[i].value != 0) {
                        lfinal.push("<label>" + valoresNuevos[val[i].value] + " " + nom[i].textContent + "</label><br />");     
                }
        }
        lfinal.forEach(a=>{
                document.write(a)
        })
}


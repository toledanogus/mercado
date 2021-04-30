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
let precio = {
        "Jitomate":1,
        "Cebolla":2,
        "Tomate":3,
        "Aguacate":4,
        "Mango":5,
        "Papaya":6,
        "Lechuga":7,
        "Sandía":8,
        "Calabaza":9,
        "Chile Serrano":10,
        "Uva":11,
        "Guayaba":12,
        "Yansenes":13,
        "Atunes":14,
}

const calcular = () => {
        const nom=document.getElementsByClassName('vv');
        const val=document.getElementsByClassName('pp');
        let preciosf = [];
        for (let i = 0; i < nom.length; i++) {
                if (val[i].value != 0) {
                        preciosf.push(precio[nom[i].textContent]*val[i].value);
                        lfinal.push("<label>" + valoresNuevos[val[i].value] + " " + nom[i].textContent + "</label><br />");     
                }
        }
        lfinal.forEach(a=>{
                document.write(a)
        })
        let precioFinal = preciosf.reduce((a,b) => a+b, 0);
        document.writeln(`<br />Total: \$${precioFinal} pesos`);
        
}


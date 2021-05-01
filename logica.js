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
let valoresNuevosUnitarios = {
        1: '1 Pieza de ',
        2: '2 Piezas de ',
        3: '3 Piezas de ',
        4: '4 Piezas de ',
        5: '5 Piezas de ',
        6: '6 Piezas de ',
        7: '7 Piezas de ',
        8: '8 Piezas de ',
        9: '9 Piezas de ',
        10: '10 Piezas de ',
}
let precio = {
        "Ejote":50,
        "Chile Poblano":28,
        "Manzana":40,
        "Mango":30,
        "Guayaba":30,
        "Zanahoria":18,
        "Chile Serrano":32,
        "Tomate":20,
        "Jitomate":20,
        "Cebolla":8,
        "Morrón":7,
        "Aguacate":70,
        "Uva":60,
}
let precioU = {
        "Elote":6,
        "Melón":40,
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
        const calcularU = () => {
                const nomU=document.getElementsByClassName('vvu');
                const valU=document.getElementsByClassName('ppu');
                for (let j = 0; j < nomU.length; j++) {
                        if (valU[j].value != 0) {
                                preciosf.push(precioU[nomU[j].textContent]*valU[j].value);
                                lfinal.push("<label>" + valoresNuevosUnitarios[valU[j].value] + " " + nomU[j].textContent + "</label><br />");     
                        }
                }
        }
        calcularU();
        lfinal.forEach(a=>{
                document.write(a)
        })
        let precioFinal = preciosf.reduce((a,b) => a+b, 0);
        document.writeln(`<br />Total: <b>\$${precioFinal} </b> pesos`);
        
}

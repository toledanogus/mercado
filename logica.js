'use strict';

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
const valoresNuevosUnitarios = {
        1: '1 Pieza de ',
        2: '2 Piezas de ',
        3: '3 Piezas de ',
        4: '4 Piezas de ',
        5: '5 Piezas de ',
        6: '6 Piezas de ',
        7: '7 Piezas de ',
        8: '8 Piezas de ',
        9: '9 Piezas de ',
        10: '10 Piezas de '
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
        "Melón":40
}

const nom=document.getElementsByClassName('vv'),
      val=document.getElementsByClassName('pp'),
      nomU=document.getElementsByClassName('vvu'),
      valU=document.getElementsByClassName('ppu');
let   preciosf = [],
      lfinal = [];

const calcular = () => {
        preciosf = [];
        lfinal = [];
        let borrar = document.getElementById('nprint');
        let borrar2 = document.querySelector('.nprint-total');
        if (borrar!=null){
                borrar.remove();
        }
        if (borrar2!=null) {
                borrar2.remove();
        }
        
        
        for (let i = 0; i < nom.length; i++) {
                if (val[i].value != 0) {
                        preciosf.push(precio[nom[i].textContent]*val[i].value);
                        lfinal.push(valoresNuevos[val[i].value] + " " + nom[i].textContent );     
                }
        }
        const calcularU = () => {
                for (let j = 0; j < nomU.length; j++) {
                        if (valU[j].value != 0) {
                                preciosf.push(precioU[nomU[j].textContent]*valU[j].value);
                                lfinal.push(valoresNuevosUnitarios[valU[j].value] + " " + nomU[j].textContent);     
                        }
                }
        };
        calcularU();
        
        let x = document.createElement("div");
        x.setAttribute("id", "nprint");
        document.body.appendChild(x);
        lfinal.forEach(a=>{
                let para = document.createElement("span");
                let espacio =document.createElement("br")
                let t = document.createTextNode(a);
                para.appendChild(t);
                let s=document.getElementById("nprint");
                s.appendChild(para);
                s.appendChild(espacio);
        });
        let precioFinal = preciosf.reduce((a,b) => a+b, 0);
        let y = document.createElement("div");
        y.className="nprint-total";
        y.textContent =(`Total: \$${precioFinal}  pesos`);
        document.body.appendChild(y);
        
}

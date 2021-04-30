let lfinal = [];
const calcular = () => {
        const nom=document.getElementsByClassName('vv');
        const val=document.getElementsByClassName('pp');
        for (let i = 0; i < nom.length; i++) {
                if (val[i].value != 0) {
                        lfinal.push("<label>" + val[i].value + " " + nom[i].textContent + "</label><br />");     
                }
        }
        lfinal.forEach(a=>{
                document.write(a)
        })
}

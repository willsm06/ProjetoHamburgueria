//Função para adicionar e remover igrediente ao hamburguer

function excluirProds(){
    var total = document.querySelector('.total-hamburguer').innerHTML;
    if(total >= 0){
        total = parseFloat(total);
        total = 3.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        document.querySelector('.bovina').innerHTML = "Adicionar +";
        document.querySelector('.Frango').innerHTML = "Adicionar +";
        document.querySelector('.Vegetal').innerHTML = "Adicionar +";
        document.querySelector('.Tomate').innerHTML = "Adicionar +";
        document.querySelector('.Alface').innerHTML = "Adicionar +";
        document.querySelector('.Cebola').innerHTML = "Adicionar +";
        document.querySelector('.Cheddar').innerHTML = "Adicionar +";
        document.querySelector('.Bacon').innerHTML = "Adicionar +";
        document.querySelector('.Especial').innerHTML = "Adicionar +";
        document.querySelector('.Barbecue').innerHTML = "Adicionar +";
        document.querySelector('.Maionese').innerHTML = "Adicionar +";
        const divHamburguer = document.querySelector('.hamburguer');
        divHamburguer.innerHTML = '';
    }else{}
}

function adicionarBovina(){
    const btnBovina = document.querySelector('.bovina').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBovina == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.bovina').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 12.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
           '<div class="itens-selecionados">'
         + '<div><h2>Carne Bovina</h2></div>'
         + '<div><img src="IMG/carneBovina.png" alt="carneBovina"></div>'
         + '<div></input><h2>+R$12,99</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarFrango(){
    const btnFrango = document.querySelector('.Frango').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnFrango == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Frango').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 10.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Frango</h2></div>'
         + '<div><img src="IMG/carneDeFrango.png" alt="carneFrango"></div>'
         + '<div><h2>+R$10,99</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarVegetal(){
    const btnVegetal = document.querySelector('.Vegetal').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnVegetal == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Vegetal').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 16.90;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Vegetal</h2></div>'
         + '<div><img src="IMG/carneVegetal.png" alt="carneVegetal"></div>'
         + '<div><h2>+R$16,90</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarTomate(){
    const btnTomate = document.querySelector('.Tomate').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnTomate == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Tomate').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 1;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Tomate</h2></div>'
         + '<div><img src="IMG/tomate.png" alt="Tomate"></div>'
         + '<div><h2>+R$1,00</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarAlface(){
    const btnAlface = document.querySelector('.Alface').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnAlface == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Alface').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 0.30;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Alface</h2></div>'
         + '<div><img src="IMG/alface.png" alt="Alface"></div>'
         + '<div><h2>+R$0,30</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarCebola(){
    const btnCebola = document.querySelector('.Cebola').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnCebola == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Cebola').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 0.50;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Cebola</h2></div>'
         + '<div><img src="IMG/cebola.png" alt="Cebola"></div>'
         + '<div><h2>+R$0,50</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarCheddar(){
    const btnCheddar = document.querySelector('.Cheddar').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnCheddar == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Cheddar').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 1.20;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Cheddar</h2></div>'
         + '<div><img src="IMG/chedar.png" alt="Cheddar"></div>'
         + '<div><h2>+R$1,20</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarBacon(){
    const btnBacon = document.querySelector('.Bacon').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBacon == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Bacon').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 5;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Bacon</h2></div>'
         + '<div><img src="IMG/bacon.png" alt="Bacon"></div>'
         + '<div><h2>+R$5,00</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarEspecial(){
    const btnEspecial = document.querySelector('.Especial').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnEspecial == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Especial').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 3.50;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Molho Especial</h2></div>'
         + '<div><img src="IMG/molhoEspecial.png" alt="Especial"></div>'
         + '<div><h2>+R$3,50</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarBarbecue(){
    const btnBarbecue = document.querySelector('.Barbecue').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBarbecue == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Barbecue').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 2.30;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Barbecue</h2></div>'
         + '<div><img src="IMG/barbecue.png" alt="Barbecue"></div>'
         + '<div><h2>+R$2,30</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarMaionese(){
    const btnMaionese = document.querySelector('.Maionese').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnMaionese == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Maionese').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 2.0;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Maionese Temperada</h2></div>'
         + '<div><img src="IMG/maionese.png" alt="Maionese"></div>'
         + '<div><h2>+R$2,00</h2></div>'
         + '</div>';     
    }
    else{}
}

//Função para remover prtoduto da pagina de compras

function removerProd1(){
    const produto = document.querySelector('.prod1');
    produto.classList.add('remove');
}

function removerProd2(){
    const produto = document.querySelector('.prod2');
    produto.classList.add('remove');
}

function removerProd3(){
    const produto = document.querySelector('.prod3');
    produto.classList.add('remove');
}

//pop-out avaliacao

const btn = document.querySelector('.botao-pedir-header');
const itensPopOut1 = document.querySelector('.expRuim');
const itensPopOut2 = document.querySelector('.expIndiferente');
const itensPopOut3 = document.querySelector('.expBoa');
const itensPopOut4 = document.querySelector('.expIncrivel');
const itensPopOut5 = document.querySelector('.expBtn');

function alterarPopOut() {
	const popOut = document.querySelector('.pop-out-avaliacao');
	popOut.classList.toggle('active');
}

btn.addEventListener('click', alterarPopOut);
itensPopOut1.addEventListener('click', alterarPopOut);
itensPopOut2.addEventListener('click', alterarPopOut);
itensPopOut3.addEventListener('click', alterarPopOut);
itensPopOut4.addEventListener('click', alterarPopOut);
itensPopOut5.addEventListener('click', alterarPopOut);


//Pagina de combos

function addClassic(){
    const btnClassic = document.querySelector('.Classic').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnClassic == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Classic').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 32.90;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Classic Burguer</h2></div>'
     + '<div><img src="IMG/classic.png" alt="Classic"></div>'
     + '<div><h2>+R$32,90</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addMega(){
    const btnMega = document.querySelector('.Mega').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnMega == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Mega').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 29.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML + 
   '<div class="itens-selecionados">'
     + '<div><h2>Mega Burguer</h2></div>'
     + '<div><img src="IMG/mega.png" alt="Mega"></div>'
     + '<div><h2>+R$29,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addBurguinho(){
    const btnBurguinho = document.querySelector('.Burguinho').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnBurguinho == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Burguinho').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 10.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Burguinho</h2></div>'
     + '<div><img src="IMG/burguinho.png" alt="Burguinho"></div>'
     + '<div><h2>+R$10,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addVegetal(){
    const btnVegetal = document.querySelector('.Vegetal').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnVegetal == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Vegetal').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 27.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Vegetal</h2></div>'
     + '<div><img src="IMG/vegetal.png" alt="Vegetal"></div>'
     + '<div><h2>+R$27,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addChick(){
    const btnChick = document.querySelector('.Chick').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnChick == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Chick').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 19.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Chick Burguer</h2></div>'
     + '<div><img src="IMG/chick Burguer.png" alt="Chick"></div>'
     + '<div><h2>+R$19,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addBr(){
    const btnBr = document.querySelector('.Br').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnBr == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Br').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 27.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Br Burguer</h2></div>'
     + '<div><img src="IMG/BrBurguer.png" alt="Br"></div>'
     + '<div><h2>+R$27,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addBatata(){
    const btnBatata = document.querySelector('.Batata').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnBatata == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Batata').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 8.99;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Batata Frita</h2></div>'
     + '<div><img src="IMG/batataFrita.png" alt="Batata"></div>'
     + '<div><h2>+R$8,99</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addBurguitos(){
    const btnBurguitos = document.querySelector('.Burguitos').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnBurguitos == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Burguitos').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 7.59;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Burguitos</h2></div>'
     + '<div><img src="IMG/burguitos.png" alt="Burguitos"></div>'
     + '<div><h2>+R$7,59</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addCoca(){
    const btnCoca = document.querySelector('.Coca').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnCoca == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Coca').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 6.50;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Coca-Cola</h2></div>'
     + '<div><img src="IMG/coca.png" alt="Coca"></div>'
     + '<div><h2>+R$6,50</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addFanta(){
    const btnFanta = document.querySelector('.Fanta').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnFanta == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Fanta').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 6.50;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Fanta</h2></div>'
     + '<div><img src="IMG/fanta.png" alt="Fanta"></div>'
     + '<div><h2>+R$6,50</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addDolly(){
    const btnDolly = document.querySelector('.Dolly').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnDolly == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Dolly').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 4.50;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Dolly</h2></div>'
     + '<div><img src="IMG/Dolly.png" alt="Dolly"></div>'
     + '<div><h2>+R$4,50</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addJesus(){
    const btnJesus = document.querySelector('.Jesus').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnJesus == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Jesus').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 6.50;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Guaraná Jesus</h2></div>'
     + '<div><img src="IMG/gJesus.png" alt="Jesus"></div>'
     + '<div><h2>+R$6,50</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addAgua(){
    const btnAgua = document.querySelector('.Agua').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnAgua == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Agua').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 3.20;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Água</h2></div>'
     + '<div><img src="IMG/agua.png" alt="Agua"></div>'
     + '<div><h2>+R$3,20</h2></div>'
     + '</div>';     
    }
    else{return;}
}
function addKapo(){
    const btnKapo = document.querySelector('.Kapo').innerHTML;
    const divCombo = document.querySelector('.comboItens');

    if(btnKapo == "Adicionar ao combo"){
    var totalC = document.querySelector('.total-combo').innerHTML;
    document.querySelector('.Kapo').innerHTML = "Já adicionado ✓";
    totalC = parseFloat(totalC);
    totalC = totalC + 2.80;
    document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
    divCombo.innerHTML = divCombo.innerHTML +
   '<div class="itens-selecionados">'
     + '<div><h2>Kapo</h2></div>'
     + '<div><img src="IMG/kapo.png" alt="Kapo"></div>'
     + '<div><h2>+R$2,80</h2></div>'
     + '</div>';     
    }
    else{return;}
}

function excluirProds2(){
    var totalC = document.querySelector('.total-combo').innerHTML;
    if(totalC >= 0){
        totalC = parseFloat(totalC);
        totalC = 0;
        document.querySelector('.total-combo').innerHTML = totalC.toFixed(2);
        document.querySelector('.Classic').innerHTML = "Adicionar ao combo";
        document.querySelector('.Mega').innerHTML = "Adicionar ao combo";
        document.querySelector('.Burguinho').innerHTML = "Adicionar ao combo";
        document.querySelector('.Vegetal').innerHTML = "Adicionar ao combo";
        document.querySelector('.Chick').innerHTML = "Adicionar ao combo";
        document.querySelector('.Br').innerHTML = "Adicionar ao combo";
        document.querySelector('.Batata').innerHTML = "Adicionar ao combo";
        document.querySelector('.Burguitos').innerHTML = "Adicionar ao combo";
        document.querySelector('.Coca').innerHTML = "Adicionar ao combo";
        document.querySelector('.Fanta').innerHTML = "Adicionar ao combo";
        document.querySelector('.Dolly').innerHTML = "Adicionar ao combo";
        document.querySelector('.Jesus').innerHTML = "Adicionar ao combo";
        document.querySelector('.Agua').innerHTML = "Adicionar ao combo";
        document.querySelector('.Kapo').innerHTML = "Adicionar ao combo";
        const divHamburguer = document.querySelector('.comboItens');
        divHamburguer.innerHTML = '';
    }else{}
}

Classic
Mega
Burguinho
Vegetal
Chick
Br
Batata
Burguitos
Coca
Fanta
Dolly
Jesus
Agua
Kapo

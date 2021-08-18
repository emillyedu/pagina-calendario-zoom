//BOTÃO MENU DO RESPONSIVO

//seleção do menu, logo e carrinho
const principal = document.querySelector(".main-header");
const navmais = document.querySelector(".more");
const navfechar = document.querySelector(".close");
const nav = document.querySelector(".header");

const navesq = principal.getBoundingClientRect().left;

navmais.addEventListener("click", () => {
  if (navesq < 0) {
    principal.classList.add("side");
    document.body.classList.add("side");
    nav.classList.add("side");
  }
});

navfechar.addEventListener("click", () => {
  if (navesq < 0) {     
    principal.classList.remove("side");
    document.body.classList.remove("side");
    nav.classList.remove("side");
  }
});


//CALENDÁRIO

document.addEventListener('DOMContentLoaded',function(){ 
    //const dos meses
    const months=['janeiro 2021','fevereiro 2021','março 2021','abril 2021','maio 2021','junho 2021','julho 2021','agosto 2021','setembro 2021','outubro 2021','novembro 2021','dezembro 2021'];
    //const dias
    const tableDays = document.getElementById('days');

    //tabela dos dias da semana
    function GetDaysCalendar(month,year){
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;

        let firstDay = new Date(year,month,1).getDay()-1;
        let getLastDay = new Date(year,month+1,0).getDate();

        for(var i = -firstDay,index = 0; i < (35-firstDay); i++,index++){
            let dt = new Date(year,month,i);
            let dtNow = new Date();
            let dayTab = tableDays.getElementsByTagName('td')[index];
            dayTab.classList.remove('last-month');
            dayTab.classList.remove('next-month');
            dayTab.classList.remove('today');
            dayTab.innerHTML = dt.getDate();
            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()){
                dayTab.classList.add('today')
            }
            if(i < 1){
                dayTab.classList.add('last-month')
            }
            if(i > getLastDay){
                dayTab.classList.add('next-month')
            }

        }
    }

    //setas para mudar o mês no calendário  
    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear()
    GetDaysCalendar(month,year);
  
    const last_buttom = document.getElementById('btn-last');
    const next_buttom = document.getElementById('btn-next');

    next_buttom.onclick = function(){
        month++;
        if(month > 11){
            month = 0;
            year++;
        }
        GetDaysCalendar(month,year);
    }
    last_buttom.onclick = function(){
        month--;
        if(month < 0){
            month = 11;
            year--;
        }
        GetDaysCalendar(month,year);
    }

    //redirecionamento para outra pagina ao clicar em um dia do mês
    var redirect = document.getElementById('days'); 
    // Executa algo ao clicar  
    redirect.onclick = () => {
        window.location = "pagvazia.html"; 
    }

})
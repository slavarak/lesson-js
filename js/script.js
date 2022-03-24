


const appData = {
    title: '',
    screens: '',
    screenPrice: 0, 
    rollback: Math.random() * 50,
    adaptive: true,
    service1: '', 
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPri: 0,
    asking: function() {
        appData.title = prompt("Как называется ваш проект?", "myProject");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while(!appData.isNumber(appData.screenPrice))
        
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    start: function() {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice =  appData.getFullPrice();
        appData.title = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger()
    },   
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return 'Даём скидку в 10%'
        } else if (15000 <= price && price < 30000) {
            return 'Даем скидку в 5%'
        } else if (0 <= price && price < 15000){
            return 'Скидка не предусмотрена'
        } else {
            return 'Что-то пошло не так'
        }
    },
    getAllServicePrices: function() {
        let sum = 0;
        let mEaning = 0;
    
        for (let i = 0; i < 2; i++) {
    
            if (i === 0) {
               appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }
    
        do {
            mEaning = +prompt("Сколько будет стоить данная работа?");
        } while(!appData.isNumber(mEaning))
    
        sum += mEaning;
        }
        return sum
    },
    getFullPrice: function() {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        let titleNew = appData.title.split('')[0].toUpperCase()
        let title2 = appData.title.slice(1);
        title = titleNew + title2
        return title
    }, 
    getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    logger: function(){
       for (let key in appData) {
           console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
       } 
    }
}


appData.start()






  



    

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);


// console.log("allServicePrices", allServicePrices);



    
// console.log(getRollbackMessage(fullPrice));
// console.log (typeof title);
// console.log (typeof adaptive);
// console.log (typeof screenPrice);


// console.log ('title' + ' ' + title);
// console.log ('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей');
// console.log ('adaptive' + ' ' + adaptive);
// console.log ('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей');
// console.log (screens.length);
// console.log (screens.toLowerCase().split(', '));


// console.log ('Процент отката посреднику за работу' + ' ' + Math.round(fullPrice * (rollback/100)));



// console.log (typeof title);
// console.log (typeof fullPrice);
// console.log (typeof adaptive);
// console.log (typeof screenPrice);
// console.log (typeof  rollback);
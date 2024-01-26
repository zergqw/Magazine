const rl = require('readline-sync');

const shoppingCart = {
    items: [],
    total: 0,
    addItem() { //Добавляем товары
        const adding = rl.question('Enter name, price , quantily: ').split(' '); //Запрашиваее данные 
        if (adding.length === 3 && Number(adding[1]) && Number(adding[2]) * 0 === 0){
            this.items.push(adding); //Добавляем
            this.calculateTotal()
        }
        else console.log('ERROR');
    },
    removeItem() { //Удаляем товары
        const removing = rl.question('Enter name: ');  //Запрашиваее данные 
        for (i = 0; i < this.items.length; i +=1) {  //Ищем совпадение и удаляем массив, где был найдено совпадение по имени
            if (this.items[i][0] === removing) {
                this.items.splice(i,1);
                this.calculateTotal()
            }
        }
    },
    updateQuantity(){ //Обновляем количесво
        const updating = rl.question('Enter name and quantity: ').split(' ');  //Запрашиваее данные 
        for (i = 0; i < this.items.length; i +=1) {  //Ищем совпадение и удаляем обновляем количество, где был найдено совпадение по имени
            if (this.items[i][0] === updating[0]) {
                this.items[i][2] = updating[1];
                this.calculateTotal()
            }
        }
    },
    calculateTotal() { // Считываем общую сумму
        for (const depht of this.items) { //Перебираем массивы для считывания сумм
            this.total += Number(depht[1]) * Number(depht[2]);
        }
    },
    clearCart() { //Удаляем все товары
        this.items = [];
        this.total = 0;
    },
    applyDiscount() { //Скида по значению
        const disconting = rl.question('Enter discount: ') 
        this.total = Number(disconting) / this.total * 100 
    }

};
                            //Код для вызовы корзины и работы с ней
let ex = 0;
while (ex != 1) {
    const chose = rl.question('exit - 0, add - 1, remove - 2, update - 3, calculate - 4, clear - 5, discount - 6: ')
    switch(chose){
        case '0':
            ex = 1;
            break;
        case '1':
            shoppingCart.addItem();
            break;
        
        case '2':
            shoppingCart.removeItem();
            break;
        
        case '3':
            shoppingCart.updateQuantity();
            break;
        
        case '4':
            shoppingCart.calculateTotal();
            break;
        
        case '5':
            shoppingCart.clearCart();
            break;
        case '6':
            shoppingCart.applyDiscount();
            break
        
    }
    console.log('Products: ',shoppingCart.items, 'The final price: ',shoppingCart.total); //Показывает актуальную таблицу
};

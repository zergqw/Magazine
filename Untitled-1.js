
const shoppingCart = {
    items: ['br', 111 , 1],
    total: 0,
    remove() {
        removeItem('br')
    }
}
const addItem = (name, price, quantity) => {
    this.items.push(name,price,quantity)
}
const removeItem = (name) => {
    const a = this.items
    console.log(this)
    return a
}
const updateQuantity = (name, quantity) => {
    
}
const calculateTotal = (shoppingCart) => {
    
}
const clearCart = (shoppingCart) => {
    this.items = {}
    this.total = 0;
    
}

shoppingCart.remove()
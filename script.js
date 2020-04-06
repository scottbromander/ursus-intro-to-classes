class MarketItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  changePrice() {
    this.price++;
    console.log(`Price Changed! ${this.price}`);
  }
}

class Fruit extends MarketItem {
  constructor(name, price, freshness) {
    super(name, price);
    this.freshness = freshness;
  }

  changePrice() {
    super.changePrice();
    this.freshness--;
    if (this.freshness == 0) {
      this.price = 0;
      console.log(`${this.name} went bad. Price is now ${this.price}`);
    }
  }
}

const apple = new Fruit("apple", 2, 8);
console.log(apple);
apple.changePrice();
apple.changePrice();
apple.changePrice();
apple.changePrice();
apple.changePrice();
apple.changePrice();
apple.changePrice();
apple.changePrice();

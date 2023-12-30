const cart = require('./cart');

const db = require('../util/databse')

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products(title,price,descrption,inageUrl) VALUES (?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl]
    );  
  }

  static deleteById(id){
    
  }

  static fetchAll() {
    return db.execute('select * from products');
  }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id])   
}
};

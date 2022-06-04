


import { products } from './database/constants/data.js';
import Product from './model/product-Schema.js';

const DefaultData =  async() => {
    try {
        
        await Product.insertManyproducts;

       console.log('Data imported Successfully');
    }catch (error) {
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;
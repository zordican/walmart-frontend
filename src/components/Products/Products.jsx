import React from 'react';
import Navbar from '../navbar/Navbar';
import ItemCard from '../item-card/ItemCard';
import styles from './Products.module.scss';

const Products = () => {
  // Assuming you have an array of product data
  const products = [
    { id: 1, name: 'OREO Mint Creme Chocolate Sandwich Cookies, Family Size, 18.71 oz', price: '$4.88', imageUrl: 'https://res.cloudinary.com/dp3aoinmu/image/upload/v1722951167/Walmart_PNG/iuc99geboebpe0rxea67.jpg' },
    { id: 1, name: 'OREO Mint Creme Chocolate Sandwich Cookies, Family Size, 18.71 oz', price: '$4.88', imageUrl: 'https://res.cloudinary.com/dp3aoinmu/image/upload/v1722951167/Walmart_PNG/iuc99geboebpe0rxea67.jpg' },
    { id: 1, name: 'OREO Mint Creme Chocolate Sandwich Cookies, Family Size, 18.71 oz', price: '$4.88', imageUrl: 'https://res.cloudinary.com/dp3aoinmu/image/upload/v1722951167/Walmart_PNG/iuc99geboebpe0rxea67.jpg' },
    { id: 1, name: 'OREO Mint Creme Chocolate Sandwich Cookies, Family Size, 18.71 oz', price: '$4.88', imageUrl: 'https://res.cloudinary.com/dp3aoinmu/image/upload/v1722951167/Walmart_PNG/iuc99geboebpe0rxea67.jpg' }
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <section className={styles.mainContainer}>
      <div className={styles.productContainer}>
        {products.map(product => (
          <ItemCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            imageUrl={product.imageUrl} 
          />
        ))}
      </div>
      </section>
    </div>
  );
};

export default Products;

import React from 'react';
import axios from 'axios';

const API_POST = 'https://api.escuelajs.co/api/v1/products/';

const sentProducts = () => {
  let products = [];
  for (let i = 0; i < 100; i++) {
    products.push({
      title: `Iphone${i + 1}`,
      price: Math.floor(Math.random() * 1000) + 5,
      title: "Sleek Wireless Computer Mouse",
        
        description: "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
        images: [
            "https://i.imgur.com/w3Y8NwQ.jpeg",
            "https://i.imgur.com/WJFOGIC.jpeg",
            "https://i.imgur.com/dV4Nklf.jpeg"
        ],
        creationAt: "2024-07-04T21:12:07.000Z",
        updatedAt: "2024-07-04T21:12:07.000Z",
        category: {
            id: 2,
            name: "Electronics",
            image: "https://i.imgur.com/ZANVnHE.jpeg",
            creationAt: "2024-07-04T21:12:07.000Z",
            updatedAt: "2024-07-04T21:12:07.000Z"
        }
    }
 
  )};
  return products;
};

const multipleProductSend = async () => {
  try {
    const products = sentProducts();
    const promises = products.map(product => axios.post(API_POST, product));
    const responses = await Promise.all(promises);
    console.log('Success.');
    responses.forEach(response => {
      console.log('New:', response.data);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

const Postcomp = () => {
  const handleClick = () => {
    multipleProductSend();
  };

  return (
    <div>
      <button onClick={handleClick}>Add Element</button>
    </div>
  );
};

export default Postcomp;

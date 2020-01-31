/* eslint-disable no-console */
const faker = require('faker');
const db = require('./db.js');


const productCategories = ['javascript', 'python', 'ruby', 'data science', 'excel VBA', 'AWS', 'hacking', 'security', 'react', 'front-end', 'g-suite', 'sysadmin', 'network', 'solutions architecture', 'devops'];

// Returns a random product category
const randomCategory = () => productCategories[Math.floor(Math.random() * Math.floor(15))];

// Helper function that saves fake data to the database
const addFake = (dataItem) => {
  // eslint-disable-next-line no-unused-vars
  db.save(dataItem, (err, record) => {
    if (err) {
      console.log('add fake error');
    } else {
      console.log('add fake success');
    }
  });
};

// Generate 100 items of fake data and saves to database
for (let i = 0; i < 100; i += 1) {
  const fakeData = {
    course: {
      name: faker.commerce.productName(),
      image: faker.image.imageUrl(),
      video: faker.image.imageUrl(),
      category: randomCategory(),
      lengthInHours: faker.random.number({ min: 21, max: 450 }),
      articleCount: faker.random.number({ min: 12, max: 182 }),
      resourceCount: faker.random.number({ min: 3, max: 84 }),
    },
    lastUpdateDate: faker.date.past(),
    originalPrice: faker.commerce.price(),
    salesPrice: faker.commerce.price(),
    totalNumOfPurchases: faker.random.number({ min: 101, max: 250000 }),
    averageRating: faker.random.number({ min: 3, max: 5 }),
  };

  addFake(fakeData);
}

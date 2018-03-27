const fs = require('fs');
const faker = require('faker');

const db = { jobs: {} };
let status;
for (let i = 1; i <= 35; i++) {
  status = Math.floor(Math.random() * 3)? 'open' : 'closed';//random job status
  db.jobs[i] = {
    id: i,
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    category: faker.name.jobDescriptor(),
    type: faker.name.jobType(),
    description: faker.lorem.paragraph(),
    image: faker.image.business(),
    status
  };
}
fs.writeFile('src/models/db.json',JSON.stringify(db), err => {
  if (err) throw err;
  console.log('database created!');
});

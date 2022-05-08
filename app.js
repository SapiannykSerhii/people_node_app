const fs = require ('fs')
// console.log(fs);

const genders = ['M','F']

const maleNames = ['Serhii', 'Dawid', 'Marcin', 'Patryk', 'Kamil', 'Andrzej', 'Igor', 'Max', 'Artiom', 'Vitalii']
const femaleNames = ['Ania', 'Nikola', 'Ola', 'Alisa', 'Patrycja', 'Sara', 'Ewa', 'Evelina', 'Karolina', 'Paulina']
const lastNames = ['Sapiannyk', 'Szewczyk', 'Potter', 'Black', 'Wawrzyniak', 'Goral', 'Stark', 'Stone', 'Parker', 'Abharian']

const randChoice = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = []

for (let counter = 1; counter <= 20; counter++) {
  const gender = randChoice(genders)
  let firstName = ''

  if (gender === 'M') firstName = randChoice(maleNames)
  if(gender === 'F') firstName = randChoice(femaleNames)

  const lastName = randChoice(lastNames)

  const getAge = () => {
    const min = 18
    const max = 99
    return Math.floor(Math.random() * (max - min + 1)) + 1
  }

  people.push(
    {
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      age: getAge()
    }
  )
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
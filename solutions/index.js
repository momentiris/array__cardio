
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  fetch('https://arraycardio.herokuapp.com/people')
    .then(res => res.json())
    .then(data => {
      // console.log(one(data))
      // console.log(two(data))
      // console.log(three(data))
      // console.log(four(data))
      // console.log(five(data))
      console.log(six(data))
    })


  const one = data => data.filter(({ year }) => year > 1500 && year < 1600)

  const two = data => data.map((inventor) => [inventor.first, inventor.last])

  const three = data => data.sort((a, b) => a.year > b.year ? 1 : -1)

  const four = data => data.map(inventor => inventor.passed - inventor.year)
    .reduce((a, b) => a + b)

  const five = data => data.map(inventor => inventor.passed - inventor.year)
    .sort((a, b) => a > b ? 1 : -1)
  
  const six = data => data.map(x => x.split(', '))
    .sort((a, b) => a[0] - b[0])
  
//   // 7. Reduce Exercise
//   // Sum up the instances of each of these
//   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

//   const transportation = data.reduce((obj, item) => {
//     if (!obj[item]) {
//       obj[item] = 0;
//     }
//     obj[item]++;
//     return obj;
//   }, {});



// // Array cardio 2
// (() => {
//   const people = [
//     { name: 'Wes', year: 1988 },
//     { name: 'Kait', year: 1986 },
//     { name: 'Irv', year: 1970 },
//     { name: 'Lux', year: 2015 }
//   ];

//   const comments = [
//     { text: 'Love this!', id: 523423 },
//     { text: 'Super good', id: 823423 },
//     { text: 'You are the best', id: 2039842 },
//     { text: 'Ramen is my fav food ever', id: 123523 },
//     { text: 'Nice Nice Nice!', id: 542328 }
//   ];

//   // Some and Every Checks
//   // Array.prototype.some() // is at least one person 19 or older?
//   // Array.prototype.every() // is everyone 19 or older?
//   const some = people.some(p =>  new Date().getFullYear() - p.year >= 19);

//   // Array.prototype.find()
//   // Find is like filter, but instead returns just the one you are looking for
//   // find the comment with the ID of 823423
//   const findFromId = comments.find(({ id }) => id === 823423);
  
//   // Array.prototype.findIndex()
//   // Find the comment with this ID
//   // delete the comment with the ID of 823423
//   const removeFromId = comments.findIndex(comment => comment.id === 823423)
//   const removed = [
//     ...comments.slice(0, removeFromId),
//     ...comments.slice(removeFromId + 1)
//   ];

// })();

'use strict';

/* 
  DESTRUCTURING ARRAYS ==================================================

    1. Destructure the books array into two variables called firstBook and secondBook.

    2. Destructure the books array into a variable called thirdBook. You must skip the first two books.

    3. Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

      const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

    4. Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

      const ratingStars = [63405, 1808];
*/

// 1.
const [firstBook, secondBook] = books;

// 2.
const [, , thirdBook] = books;

// 3.
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;

// 4.
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

/* 
  DESTRUCTURING OBJECTS ==================================================

    1. Destructure the first book object from the books array into variables called title, author and ISBN.

    2. Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

    3. The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

    4. Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

      let bookTitle = 'unknown';
      let bookAuthor = 'unknown';

    5. Each book object has a deeply nested rating property as illustrated below:

      {
        title: 'Algorithms',
        ...
        thirdParty: {
          goodReads: {
            rating: 4.41,              // <-- HERE
            ratingsCount: 1733,
            reviewsCount: 63,
            fiveStarRatingCount: 976,
            oneStarRatingCount: 13
          }
        }
      },

    Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodReads.rating property.

    Please do most of the work on the left side of the assignment operator: const ... = books[0];

    6. Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

    If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

      Ex 1:
        Code: printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
        Output: "Algorithms by Robert Sedgewick, 2011"

      Ex 2:
        Code: printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
        Output: "Algorithms by Robert Sedgewick, year unknown"
*/

// 1.
const { title, author, ISBN } = books[0];

// 2.
const { keywords: tags } = books[0];

// 3.
const { languages, programmingLanguage = 'unknown' } = books[6];

// 4.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);

// 5.
const { thirdParty: { goodReads: { rating: bookRating } } } = books[0];

// 6.
const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

/* THE SPREAD OPERATOR (...) ==================================================

    1. Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

    Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

    2. Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.
      Ex:
        Code: spellWord('JavaScript');
        Output: "J a v a S c r i p t"
*/

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (word) {
  console.log(...word);
};
spellWord('JavaScript');
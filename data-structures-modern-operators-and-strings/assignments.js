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

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodReads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodReads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodReads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodReads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodReads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodReads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodReads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodReads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

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
        Expected output: "Algorithms by Robert Sedgewick, 2011"

      Ex 2:
        Code: printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
        Expected output: "Algorithms by Robert Sedgewick, year unknown"
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
        Expected output: "J a v a S c r i p t"
*/

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (word) {
  console.log(...word);
};
spellWord('JavaScript');

/* REST PATTERN AND PARAMETERS ==================================================

    1. Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

    2. Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

    3. Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

      Ex:
        Code: printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
        Expected output: "The book "Algorithms" has 2 authors"
*/

// 1.
const [mainKeyword, ...rest] = books[0].keywords; console.log(mainKeyword, rest)

// 2.
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// 3.
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors.`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

/* SHORT CIRCUITING && AND || ==================================================

    1. Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example:

      {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        ...
        programmingLanguage: 'Java',     // <-- HERE
      }

    Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

    Use short-circuiting.

      Ex 1:
        Code: hasExamplesInJava(books[0]);
        Expected output: true

      Ex 2:
        Code: hasExamplesInJava(books[1]);
        Expected output: "no data available"

    2. Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

      {
        title: 'Operating System Concepts',
        // ... removed for clarity
        onlineContent: false,          // <-- HERE
      },
*/

// 1.
const hasExamplesInJava = function (book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
}
hasExamplesInJava(books[0]);
hasExamplesInJava(books[1]);

// 2.
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
}

/* THE NULLISH COALESCING OPERATOR ?? ==================================================

  There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
  
*/

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content`);
}

/* LOGICAL ASSIGNMENT OPERATORS ==================================================

    1. Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

    2. Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodReads.rating property is less than 4.2, reassign it with false.

    Use the &&= operator (tip: you may also need the ! operator)
*/

// 1.
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// 2.
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodReads.rating < 4.2);
}

/* LOOPING ARRAYS: THE FOR-OF LOOP ==================================================

    1. Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

      let pageSum = 0;

    2. Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

    Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

      const allAuthors = [];

    3. Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

      Expected output:

        1. Robert Sedgewick
        2. Kevin Wayne
        3. Harold Abelson
          ...                    // part removed for clarity
        15. Cal Newport

*/

// 1.
let pageSum = 0;
// for (let book of books) {
//   pageSum += book.pages;
// }
for (const { pages } of books) pageSum += pages;
console.log(`Total pages of books: ${pageSum}`);

// 2.
const allAuthors = [];
for (const { author } of books) {
  if (typeof author === 'string') {
    allAuthors.push(author);
  } else {
    for (const item of author) {
      allAuthors.push(item);
    }
  }
}
console.log(allAuthors);

// 3.
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

/* ENHANCED OBJECT LITERALS  ==================================================

    1. Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

    Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.

      const bookData = [
        ['title', 'Computer Networking: A Top-Down Approach'],
        ['author', ['James F. Kurose', 'Keith W. Ross']],
        ['publisher', 'Addison Wesley'],
      ];

      // Do the rest
      const newBook = {
        [bookData[0][0]]: bookData[0][1]
        // ...
      };

    2. Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

      const pages = 880;
      const newBook2 = {
        title: 'The C Programming Language',
        author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
        // ...
      }
*/

// 1.
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1]
};
console.log(newBook);
// ▶ { title: 'Computer Networking: A Top-Down Approach', author: Array(2), publisher: 'Addison Wesley' }

// 2.
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages
};
console.log(newBook2);
// ▶ {title: 'The C Programming Language', author: Array(2), pages: 880}

/* OPTIONAL CHAINING (?.) ==================================================

    Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

      Ex 1:
        Code: getFirstKeyword(books[0]);
        Expected output: "computer science"

      Ex 2:
        Code: getFirstKeyword(newBook2); // from previous tasks
        Expected output: undefined

*/

const getFirstKeyword = function ({ keywords }) {
  const firstKeyword = keywords?.[0] ?? 'undefined';
  console.log(firstKeyword);
  return firstKeyword;
};
getFirstKeyword(books[0]);
getFirstKeyword(newBook2);

/* LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES ==================================================

    1. Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

    In the end, the entries array should be filled with arrays containing keys:

      [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]

      const entries = [];

    2. The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodReads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

    Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodReads property of the first book from the books array.

    Push each value to the appropriate inner array in the entries array (use index from entries()).

    3. Use the Object.entries() method on the thirdParty.goodReads property of the first book from the books array. Assign the returned value to the variable called entries2.

    4. Log the entries and entries2 variables to the console, and compare them. They should look the same.

*/

// 1.
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodReads)) entries.push([key]);

// 2.
for (const [index, value] of Object.values(books[0].thirdParty.goodReads).entries()) {
  entries[index].push(value);
}

// 3.
const entries2 = Object.entries(books[0].thirdParty.goodReads);
console.log(entries);
console.log(entries2);

/* SETS ==================================================

    1. Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

    Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

      const allKeywords = [];

    2. The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

    3. Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

    4. Delete 'business' from the uniqueKeywords set.

    5. Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

    6. Delete all items from the uniqueKeywords set.

*/

// 1.
const allKeywords = [];
for (const { keywords } of books) allKeywords.push(...keywords);

// 2.
const uniqueKeywords = new Set(allKeywords);

// 3.
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

// 4.
uniqueKeywords.delete('business');

// 5.
const uniqueKeywordsArr = [...uniqueKeywords];

// 6.
uniqueKeywords.clear();

/* MAPS: FUNDAMENTALS ==================================================

    1. Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

      [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

    2. Set a new key in bookMap called pages, and assign it with a number 464.

    3. Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

    4. Get the size of bookMap, and log it to the console.

    5. Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

*/

// 1.
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);

// 2.
bookMap.set('pages', 464);

// 3.
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 4.
console.log(bookMap.size);

// 5.
bookMap.has('author') && console.log('The author of the book is known');

/* MAPS: ITERATION ==================================================

    1. Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

    2. Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

*/

// 1.
const firstBookMap = new Map(Object.entries(books[0]));

// 2.
for (const [key, value] of firstBookMap) typeof value === 'number' && console.log(key);

/* WORKING WITH STRINGS – PART 1 ==================================================

    1. Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

    2. Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

      const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

    3. Extract the word "boxing" from the same quote string, and log it to the console.

    4. Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

      Ex 1:
        Code: isContributor('Julie Sussman (Contributor)');
        Expected output: true

      Ex 2:
        Code: isContributor('Robert Sedgewick');
        Expected output: false

*/

// 1.
const isbn = books[0].ISBN;
console.log(isbn['6'], isbn['4'], isbn['9'], isbn['8']);

// 2.
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 3.
const extractWord = function (word, sentence) {
  const wordIndex = sentence.indexOf(word);
  console.log(wordIndex !== -1 ? quote.slice(wordIndex, wordIndex + word.length) : `"${word}" does not exist`);
}
extractWord('boxing', quote);

// 4.
const isContributor = function (author) {
  return author.lastIndexOf('(Contributor)') !== -1;
};
console.log(isContributor('Julie Sussman (Contributor)'), isContributor('Robert Sedgewick'));

/* WORKING WITH STRINGS – PART 2 ==================================================

    1. Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

    You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

      Ex:
        Code: normalizeAuthorName('  JuliE sussMan (Contributor)');
        Expected output: "Julie Sussman"

    2. Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

    3. Write a function called logBookTheme that takes book's title (string), and logs to the console:

    "This book is about computers" if the title starts with the word "computer",

    "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

    and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

    The title may contain both small and capital letters.

*/

// 1.
const normalizeAuthorName = function (author) {

  author = author.toLowerCase().trim();
  const conIndex = author.indexOf('(contributor)');

  if (conIndex !== -1) author = author.slice(0, conIndex).trim();

  let nameStr = '';
  let startIndex = 0;
  let spaceIndex = author.indexOf(' ');

  while (spaceIndex !== -1) {

    const word = author.slice(startIndex, spaceIndex);

    word.includes('.') ?
      nameStr += word.toUpperCase() + ' ' :
      // nameStr += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
      nameStr += word.replace(word[0], word[0].toUpperCase()) + ' ';

    startIndex = spaceIndex + 1;
    spaceIndex = author.indexOf(' ', startIndex);

    if (spaceIndex === -1) {
      const last = author.slice(startIndex);
      // nameStr += last[0].toUpperCase() + last.slice(1).toLowerCase();
      nameStr += last.replace(last[0], last[0].toUpperCase());
    }
  }
  console.log(nameStr);
};

normalizeAuthorName('  JuliE sussMan (Contributor)');

for (const { author } of books)
  if (typeof author === 'string') normalizeAuthorName(author);
  else for (const auth of author.values()) normalizeAuthorName(auth);

// 2.
const newBookTitle = books[1].title.replace('Programs', 'Software');

// 3.
const logBookTheme = function (title) {
  title = title.toLowerCase().trim();
  const pre = '––– ' + title + ' ';
  if (title.startsWith('computer'))
    console.log('This book is about computers.');
  else if (title.includes('algorithms') && title.includes('data structures'))
    console.log('This book is about algorithms and data structures.');
  else if (title.includes('algorithms'))
    console.log('This book is about algorithms.');
  else if (title.includes('data structures'))
    console.log('This book is about data structures.');
  else if (title.endsWith('system') || title.endsWith('systems') && !title.includes('operating'))
    console.log('This book is about some systems, but definitely not about operating systems.');
  else
    console.log('Other books.');
}

for (const { title } of books) logBookTheme(title);

/* WORKING WITH STRINGS – PART 3 ==================================================

    1. Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

    Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

      Example
        Code:
          const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
          logBookCategories(bookCategories);
        
        Expected output:
          science
          computing
          computer science
          algorithms
          business
          operating systems
          networking
          electronics

    2. Now, the opposite. Each book from the books array has the keywords property.

    Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

      Example
        Code: getKeywordsAsString(books);
        
        Expected output: computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development

    3. Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

    Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

    Use the padEnd method.

      Example
        Code:
          const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
          logBookChapters(bookChapters);
        
        Expected output:
          The Basics __________ 14
          Sorting _____________ 254
          Searching ___________ 372
          Graphs ______________ 526
          Strings _____________ 706

*/

// 1.
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
const logBookCategories = function (categories) {
  categories = categories.split(';');
  for (const category of categories) console.log(category);
}
logBookCategories(bookCategories);

// 2.
const getKeywordsAsString = function (books) {
  const keywords = [];
  for (const book of books) {
    keywords.push(...book.keywords);
  }
  const uniqueKeywords = [...new Set(keywords)];
  console.log(uniqueKeywords.join(';'))
}
getKeywordsAsString(books);

// 3.
const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
const logBookChapters = function (chapters) {
  for (const [chapter, page] of chapters) console.log((chapter + ' ').padEnd(20, '_') + ' ' + page);
}
logBookChapters(bookChapters);
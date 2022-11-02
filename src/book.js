function createTitle(title) {
  return "The " + title
  
};

function buildMainCharacter(name, age, pronouns) {
  var character = { 
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;

};

function saveReview(review, reviews) {
  if (!reviews.includes(review) ) { 
    return reviews.push(review) 
  } 
}

function calculatePageCount(title) {
  let page_count = 20 * title.length;
  return page_count;
}

function writeBook(title, mainCharacter, genre) {

  const book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
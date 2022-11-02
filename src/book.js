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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  //writeBook,
  //editBook
}
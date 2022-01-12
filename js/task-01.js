const categories = document.body.querySelectorAll(".item");


console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelector('ul').children.length}`);
});
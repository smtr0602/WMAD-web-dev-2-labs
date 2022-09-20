/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const p = document.querySelector('body > p');
const text = p.textContent;
const wordArr = text.split(' ');
const modified = wordArr.map((word) => {
  const replaced = word.replace('.', '').replace('\n', '');
  return replaced.length >= 8
    ? `<span style='background-color: yellow;'>${word}</span>`
    : word;
});
p.innerHTML = modified.join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const a = document.createElement('a');
a.innerHTML = `
<a href="http://officeipsum.com/">Link</a>
`;
p.after(a);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
const p = document.querySelector('body > p');
const text = p.textContent;
const wordArr = text.split('.');
const modified = wordArr.map((word) => `${word}.<br />`);
p.innerHTML = modified.join('');

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const p = document.querySelector('body > p');
const text = p.textContent;
const words = text.split(' ');
const length = words.length;
const newP = document.createElement('p');
newP.textContent = length + 'words.';
document.querySelector('h1').after(newP);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const p = document.querySelector('body > p');
let text = p.textContent;
text = text.replaceAll('?', '🤔').replaceAll('!', '😲');
p.textContent = text;

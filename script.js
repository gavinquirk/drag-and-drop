console.log('working...');

const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const movies = [
  'Star Wars: A New Hope',
  'Alien',
  'Aliens',
  'Close Encounters of the Third Kind',
  'Blade Runner',
  'Gattaca',
  'A.I. Artificial Intelligence',
  'Mad Max: Fury Road',
  'Arrival',
  'Gravity',
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...movies]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((movie, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="movie-name">${movie}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}

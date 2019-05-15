//Task 1
function getAttributes() {
  var _href = document.getElementById('w3r').href;
  var _hreflang = document.getElementById('w3r').hreflang;
  var _rel = document.getElementById('w3r').rel;
  var _target = document.getElementById('w3r').target;
  var _type = document.getElementById('w3r').type;

  console.log('href is: ' + _href);
  console.log('hreflang is: ' + _hreflang);
  console.log('rel is: ' + _rel);
  console.log('taget is: ' + _target);
  console.log('type is: ' + _type);
}

//Task 2
(function createTable() {
  var table = document.createElement('table'), tr, td, row, cell;
  for (row = 0; row < 10; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 10; cell++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById('task2').appendChild(table);

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
})();

//Task 3
function getClone() {
  var d = document.getElementById('task3');
  var p = d.querySelector('.par');
  var clone = p.cloneNode(true);
  d.appendChild(clone);
}

//Task 4
function addElem(block, count, type) {
  var block = document.getElementById(block);
  for (var i = 0; i < count; i++) {
    var el = document.createElement(type);
    el.innerHTML = 'list item';
    block.appendChild(el);
  }
}

//Task 5
function getRandomColor() {
  var symbols = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var d = document.getElementById('task5');
var letters = str.split('');

for (var n = 0; n < letters.length; n++) {
  var randomColor = getRandomColor(), randomColor1;
  var span =  document.createElement('span');
  span.textContent = letters[n];
  if (randomColor === randomColor1) {
    while (randomColor === randomColor1) {
      randomColor = getRandomColor();
    }
  }
  span.style.color = randomColor;
  d.appendChild(span);
  randomColor1 = randomColor;
}

letters.join('');

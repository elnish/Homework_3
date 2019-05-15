(function createTable() {
  const img = ['<img src="./image/1.png">', '<img src="./image/2.png">', '<img src="./image/3.png">', '<img src="./image/4.png">'];
  let table = document.createElement('table'), tr, row, cell;
  let t = document.getElementsByTagName('td');
  for (row = 0; row < 6; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 6; cell++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById('task6').appendChild(table);

  for (let i = 0; i < t.length; i++) {
    t[i].innerHTML = img[Math.floor(Math.random() * img.length)];
  }
})();

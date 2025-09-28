const header = document.getElementById('header-utama');
header.textContent = 'Seleksi ID Berhasil';

const produkList = document.getElementsByClassName('produk-item');
Array.from(produkList).forEach(function(item) {
  item.classList.add('tebal');                   
  item.textContent = '[UPDATED] ' + item.textContent; 
});

const pendingBox = document.querySelector('[data-status="pending"]');
pendingBox.style.backgroundColor = 'yellow';

const listItems = document.querySelectorAll('ul li');
listItems.forEach(function(li) {
  li.innerHTML = '<span>Konten Baru dari JS</span>';
});
// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('comem-cart')) || [];

function saveCart() {
  localStorage.setItem('comem-cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty, name: product.name, price: product.price, image: product.image });
  }
  saveCart();
  showToast('Đã thêm "' + product.name + '" vào giỏ hàng');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, qty) {
  if (qty < 1) return;
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = qty;
    saveCart();
    renderCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// ===== Toast =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Render Products =====
function renderProducts(productList, containerId = 'products-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (!productList || productList.length === 0) {
    container.innerHTML = '<div class="cart-empty"><i class="fas fa-box-open"></i><h2>Không tìm thấy sản phẩm</h2></div>';
    return;
  }
  
  container.innerHTML = productList.map(p => {
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const badgeClass = p.badge === 'Bán chạy' ? 'hot' : p.badge === 'Mới' ? 'new' : '';
    const oldPriceHtml = p.oldPrice ? '<span class="old-price">' + formatPrice(p.oldPrice) + '</span>' : '';
    
    return `
      <div class="product-card">
        <a href="chi-tiet.html?id=${p.id}">
          <div class="product-img-wrap">
            <img src="${p.image}" alt="${p.name}">
            ${p.badge ? '<span class="product-badge ' + badgeClass + '">' + p.badge + '</span>' : ''}
          </div>
        </a>
        <div class="product-quick-actions">
          <a href="chi-tiet.html?id=${p.id}" title="Xem chi tiết"><button><i class="fas fa-eye"></i></button></a>
        </div>
        <div class="product-info">
          <div class="product-category">${p.categoryName}</div>
          <a href="chi-tiet.html?id=${p.id}">
            <div class="product-name">${p.name}</div>
          </a>
          <div class="product-price">
            <span class="current-price">${formatPrice(p.price)}</span>
            ${oldPriceHtml}
          </div>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>${p.rating} (${p.sold} đã bán)</span>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${p.id}); this.innerHTML='<i class=\\'fas fa-check\\'></i> Đã thêm'; this.classList.add('added'); setTimeout(()=>{ this.innerHTML='<i class=\\'fas fa-shopping-cart\\'></i> Thêm vào giỏ'; this.classList.remove('added'); }, 2000);">
            <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
}

// ===== Render Cart =====
function renderCart() {
  const container = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  const empty = document.getElementById('cart-empty');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (summary) summary.style.display = 'none';
    return;
  }
  
  if (empty) empty.style.display = 'none';
  if (summary) summary.style.display = 'block';
  
  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const img = product ? product.image : item.image;
    const name = product ? product.name : item.name;
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${img}" alt="${name}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
        </div>
        <div class="cart-item-total">${formatPrice(item.price * item.qty)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
      </div>
    `;
  }).join('');
  
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

// ===== Render Checkout Summary =====
function renderCheckoutSummary() {
  const container = document.getElementById('checkout-summary');
  if (!container || cart.length === 0) return;
  
  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `
      <div class="order-summary-item">
        <span>${item.name} x ${item.qty}</span>
        <span>${formatPrice(item.price * item.qty)}</span>
      </div>
    `;
  }).join('');
  
  const totalEl = document.getElementById('checkout-total');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

// ===== Header Scroll =====
function handleHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  handleHeaderScroll();
  
  // Mobile menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
  
  // Close mobile menu on link click
  if (nav) {
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }
});

window.addEventListener('scroll', handleHeaderScroll);

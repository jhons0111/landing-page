//SWIPER SLIDER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const cart = [
  { name: 'Roll Dragón Especial', price: 14.5, quantity: 2, image: 'images/sushi1.jpeg' },
  { name: 'Nigiri Salmón (4 pcs)', price: 9, quantity: 1, image: 'images/sushi2.jpeg' },
  { name: 'Gyozas', price: 5, quantity: 1, image: 'images/sushi3.jpeg' },
  { name: 'Ramen', price: 12, quantity: 1, image: 'images/ramen.svg' },
  { name: 'Bebida', price: 6, quantity: 1, image: 'images/bebida.svg' },
  { name: 'Postre', price: 8, quantity: 1, image: 'images/postre.svg' },
];

const cartButton = document.querySelector('#cart-btn');
const cartDrawer = document.querySelector('#cart-drawer');
const cartBackdrop = document.querySelector('#cart-backdrop');
const cartClose = document.querySelector('#cart-close');

const money = (amount) => `$${amount.toFixed(2)}`;

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const service = subtotal * 0.1;

  document.querySelector('#cart-count').textContent = itemCount;
  document.querySelector('#drawer-count').textContent = itemCount;
  cartDrawer.querySelectorAll('.cart-content, .cart-summary').forEach((element) => element.remove());
  cartDrawer.insertAdjacentHTML('beforeend', `<div class="cart-content">${cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-line"><h3>${item.name}</h3><strong>${money(item.price * item.quantity)}</strong></div>
        <div class="quantity-control">
          <button type="button" data-action="decrease" data-index="${index}" aria-label="Reducir cantidad">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" data-index="${index}" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
    </div>
  `).join('')}</div>
  <div class="cart-summary">
    <div class="cart-item"><span>Subtotal:</span><strong id="cart-subtotal">${money(subtotal)}</strong></div>
    <div class="cart-item"><span>Servicio (10%):</span><strong id="cart-service">${money(service)}</strong></div>
    <div class="cart-item"><span>Total:</span><strong id="cart-total">${money(subtotal + service)}</strong></div>
    <button class="confirm-order" type="button">Confirmar Pedido</button>
  </div>`);
}

function setCartOpen(isOpen) {
  cartDrawer.classList.toggle('is-open', isOpen);
  cartBackdrop.classList.toggle('is-visible', isOpen);
  cartButton.setAttribute('aria-expanded', String(isOpen));
  cartDrawer.setAttribute('aria-hidden', String(!isOpen));
}

cartButton.addEventListener('click', () => setCartOpen(true));
cartClose.addEventListener('click', () => setCartOpen(false));
cartBackdrop.addEventListener('click', () => setCartOpen(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setCartOpen(false);
});

cartDrawer.addEventListener('click', (event) => {
  const control = event.target.closest('button[data-action]');
  if (!control) return;

  const item = cart[Number(control.dataset.index)];
  if (control.dataset.action === 'increase') item.quantity += 1;
  if (control.dataset.action === 'decrease') item.quantity = Math.max(1, item.quantity - 1);
  renderCart();
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const existingItem = cart.find((item) => item.name === button.dataset.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: button.dataset.name, price: Number(button.dataset.price), quantity: 1, image: button.dataset.image });
    }
    renderCart();
    setCartOpen(true);
  });
});

renderCart();
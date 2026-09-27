/**
 * Ver Burgueros Neza - Official Menu & Interactive Cart System
 * WhatsApp Phone: 525655263382
 * Schedule: 2:00 PM - 10:00 PM (Martes a Domingo)
 * Precios Oficiales para Pickup / Sucursal
 */

const WHATSAPP_PHONE = '525655263382';

// Official Menu directly from the Restaurant Menu Card (assets/menu-oficial.png)
const OFFICIAL_MENU = [
  // 1. HAMBURGUESAS (Todas incluyen 50g de papas clásicas gratis)
  {
    id: 'burger-clasica',
    category: 'hamburguesas',
    name: 'Clásica',
    price: 90,
    badge: 'Incluye Papas Gratis',
    desc: 'Carne especial, queso americano, cebolla caramelizada y aderezo de la casa, en pan brioche hecho a mano.',
    includes: 'Incluye 50g de papas clasicas gratis',
    img: 'assets/menu-burger.png'
  },
  {
    id: 'burger-burguera',
    category: 'hamburguesas',
    name: 'Burguera ★',
    price: 99,
    badge: '★ Favorita Picante',
    desc: 'Carne picante especial, queso americano, cebolla caramelizada y aderezo de la casa, en pan brioche hecho a mano.',
    includes: 'Incluye 50g de papas clasicas gratis',
    img: 'assets/menu-burger.png'
  },
  {
    id: 'burger-marrana',
    category: 'hamburguesas',
    name: 'Marrana',
    price: 139,
    badge: 'Doble Carne & Tocino',
    desc: 'Doble carne especial, doble queso americano, tocino, cebolla caramelizada y aderezo de la casa, en pan brioche hecho a mano.',
    includes: 'Incluye 50g de papas clasicas gratis',
    img: 'assets/menu-burger.png'
  },
  {
    id: 'burger-conchuda',
    category: 'hamburguesas',
    name: 'Conchuda',
    price: 119,
    badge: 'Edición Especial (50 Pzas)',
    desc: 'Carne especial de la casa, queso americano, cebolla caramelizada, aderezo de la casa, en una concha blanca.',
    includes: 'Incluye 50g de papas clasicas gratis',
    img: 'assets/menu-conchuda.png'
  },

  // 2. PAPAS A LA FRANCESA (150g de papas a la francesa sazonadas. Hechas a mano.)
  {
    id: 'papas-clasicas',
    category: 'papas',
    name: 'Papas Clásicas',
    price: 69,
    badge: '150g Hechas a mano',
    desc: '150g de papas a la francesa sazonadas con sal, pimienta y un toque especial. Hechas a mano.',
    img: 'assets/menu-fries.png'
  },
  {
    id: 'papas-bravas',
    category: 'papas',
    name: 'Papas Bravas ★',
    price: 89,
    badge: '★ Maple-Habanero & Tocino',
    desc: '150g de papas sazonadas con sal, pimienta, un toque especial, aderezo maple-habanero y tocino.',
    img: 'assets/menu-fries.png'
  },
  {
    id: 'papas-quesoink',
    category: 'papas',
    name: 'Papas Quesoink',
    price: 89,
    badge: 'Cheddar & Tocino',
    desc: '150g de papas sazonadas con sal, pimienta, un toque especial, aderezo queso cheddar y tocino.',
    img: 'assets/menu-fries.png'
  },

  // 3. ADEREZO EXTRA
  {
    id: 'aderezo-extra',
    category: 'extras',
    name: 'Aderezo Extra (2oz)',
    price: 18,
    badge: 'Porción 2oz',
    desc: 'Porción de 2oz. Elige tu aderezo favorito.',
    optionsLabel: 'Elige tu aderezo',
    options: ['Maple habanero', 'Ranch picante', 'Ranch original', 'Queso cheddar'],
    img: 'assets/menu-extras.png'
  },

  // 4. BEBIDAS / REFRESCOS 355ML
  {
    id: 'refresco-clasico',
    category: 'bebidas',
    name: 'Refresco Clásico 355ml',
    price: 40,
    badge: '355 ml Frío',
    desc: 'Refresco frío de 355 ml. Elige entre Coca clásica, Fanta ó Sprite.',
    optionsLabel: 'Elige tu sabor',
    options: ['Coca clásica', 'Fanta', 'Sprite'],
    img: 'assets/menu-refrescos.webp'
  },
  {
    id: 'bubble-tea',
    category: 'bebidas',
    name: 'Bubble Tea 320ml',
    price: 55,
    badge: '320 ml con Perlas',
    desc: '320 ml de té refrescante con perlas. Elige entre mango o durazno.',
    optionsLabel: 'Elige tu sabor',
    options: ['Mango', 'Durazno'],
    img: 'assets/menu-bubble-tea.jpeg'
  },

  // 5. MALTEADAS 16OZ
  {
    id: 'malteada-jefa',
    category: 'bebidas',
    name: 'Malteada De la jefa ★',
    price: 79,
    badge: '★ Receta Secreta Naranja',
    desc: '16oz de malteada de naranja con la receta secreta. Refrescante y cítrica.',
    img: 'assets/menu-malteada-jefa.jpeg'
  },
  {
    id: 'malteada-cremosa',
    category: 'bebidas',
    name: 'Malteada Cremosa',
    price: 69,
    badge: 'Crema de Maní',
    desc: '16oz de malteada de crema de maní. Cremosa y sabrosa.',
    img: 'assets/menu-malteada-mani.jpeg'
  },
  {
    id: 'malteada-oink-oink',
    category: 'bebidas',
    name: 'Malteada Oink oink',
    price: 79,
    badge: 'Tocino Dulce & Salada',
    desc: '16oz de malteada de tocino, ahumada, dulce y salada. ¡No has probado otra igual!',
    img: 'assets/menu-malteada-oink.jpeg'
  },

  // 6. POSTRE
  {
    id: 'postre-cochinitos',
    category: 'extras',
    name: '3 cochinitos',
    price: 99,
    badge: 'Twinkies & Tocino',
    desc: '3 Twinkies envueltos en tocino crujiente. Sabes que los quieres.',
    img: 'assets/menu-extras.png'
  }
];

// Shopping Cart State
let cart = [];
let currentDeliveryType = 'pickup'; // 'pickup' | 'delivery'
let currentPaymentMethod = 'Efectivo'; // 'Efectivo' | 'Transferencia'

// Load saved cart from localStorage on start
try {
  const savedCart = localStorage.getItem('burgueros_cart_v2');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = [];
}

// Save Cart to localStorage
function saveCart() {
  try {
    localStorage.setItem('burgueros_cart_v2', JSON.stringify(cart));
  } catch (e) {}
  updateCartUI();
}

// Calculate total cart items and total price
function getCartTotals() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { count, total };
}

// Add item to cart
function addToCart(itemId, optionValue = null) {
  const product = OFFICIAL_MENU.find(p => p.id === itemId);
  if (!product) return;

  // Determine option if item has options and none passed
  let option = optionValue;
  if (!option && product.options && product.options.length > 0) {
    const selectElem = document.getElementById(`opt-select-${itemId}`);
    option = selectElem ? selectElem.value : product.options[0];
  }

  const cartKey = product.id + (option ? `_${option}` : '');
  const existingIndex = cart.findIndex(item => item.cartKey === cartKey);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      cartKey: cartKey,
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      selectedOption: option || null,
      includes: product.includes || null,
      img: product.img,
      category: product.category
    });
  }

  saveCart();
  flashAddedButton(itemId);
}

// Visual confirmation on button click
function flashAddedButton(itemId) {
  const btns = document.querySelectorAll(`.add-btn-${itemId}`);
  btns.forEach(btn => {
    const originalContent = btn.innerHTML;
    btn.innerHTML = `
      <svg class="w-4 h-4 text-black inline shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>¡Agregado!</span>
    `;
    btn.classList.add('bg-emerald-400', 'text-black');
    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.classList.remove('bg-emerald-400');
    }, 1200);
  });
}

// Update item quantity in cart
function updateCartQty(cartKey, delta) {
  const itemIndex = cart.findIndex(i => i.cartKey === cartKey);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  saveCart();
  renderCartModal();
}

// Remove item entirely from cart
function removeFromCart(cartKey) {
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  renderCartModal();
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();
  renderCartModal();
}

// Update all UI elements showing cart counters and totals
function updateCartUI() {
  const { count, total } = getCartTotals();

  // Badges in Header & Mobile Drawer
  const navBadge = document.getElementById('nav-cart-badge');
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.classList.toggle('hidden', count === 0);
  }
  const mobileBadge = document.getElementById('mobile-cart-badge');
  if (mobileBadge) {
    mobileBadge.textContent = count;
  }
  const headerCartQty = document.querySelectorAll('.header-cart-qty');
  headerCartQty.forEach(el => el.textContent = count);

  // Floating Bottom Cart Bar & Floating WhatsApp Widget
  const floatingBar = document.getElementById('floating-cart-bar');
  const floatingCount = document.getElementById('floating-cart-count');
  const floatingTotal = document.getElementById('floating-cart-total');
  const whatsappWidget = document.getElementById('floating-whatsapp-widget');

  if (floatingBar && floatingCount && floatingTotal) {
    floatingCount.textContent = count;
    floatingTotal.textContent = total;

    if (count > 0) {
      floatingBar.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
      floatingBar.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      if (whatsappWidget) whatsappWidget.classList.add('cart-elevated');
    } else {
      floatingBar.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
      floatingBar.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      if (whatsappWidget) whatsappWidget.classList.remove('cart-elevated');
    }
  }

  // Update Cart Modal if open
  renderCartModal();
}

// Render product card for the main page menu grid
function createProductCardHTML(item) {
  const hasOptions = item.options && item.options.length > 0;
  
  let optionsHTML = '';
  if (hasOptions) {
    optionsHTML = `
      <div class="mt-3 pt-2 border-t border-neutral-800/80">
        <label for="opt-select-${item.id}" class="block text-[11px] font-bold text-neutral-400 mb-1">
          ${item.optionsLabel || 'Opciones'}:
        </label>
        <select id="opt-select-${item.id}" class="w-full bg-[#1e1e24] border border-neutral-700 text-xs text-white rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#FDCC02]">
          ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
        </select>
      </div>
    `;
  }

  const freeFriesTag = item.includes ? `
    <div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FDCC02]/15 border border-[#FDCC02]/30 text-[11px] font-bold text-[#FDCC02]">
      <span>★</span>
      <span>${item.includes}</span>
    </div>
  ` : '';

  return `
    <div class="bg-[#141416] border border-neutral-800 hover:border-[#FDCC02]/50 transition-all rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group">
      <div>
        <div class="relative h-44 sm:h-48 overflow-hidden bg-neutral-900">
          <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105">
          <div class="absolute top-3 left-3 flex flex-col gap-1 items-start">
            <span class="bg-[#FDCC02] text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
              ${item.badge}
            </span>
          </div>
          <div class="absolute bottom-2 left-2.5 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10 text-[9px] text-neutral-300 font-medium pointer-events-none">
            * Imagen representativa
          </div>
          <div class="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-neutral-700/80">
            <span class="font-comic text-[#FDCC02] text-lg leading-none">$${item.price}</span>
            <span class="text-[10px] text-neutral-300 font-sans">MXN</span>
          </div>
        </div>

        <div class="p-4 sm:p-5">
          <h4 class="font-comic text-white text-xl leading-tight group-hover:text-[#FDCC02] transition-colors">
            ${item.name}
          </h4>
          <p class="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed line-clamp-3">
            ${item.desc}
          </p>
          ${freeFriesTag}
          ${optionsHTML}
        </div>
      </div>

      <div class="p-4 sm:p-5 pt-0">
        <button type="button" onclick="addToCart('${item.id}')" 
                class="add-btn-${item.id} w-full bg-[#FDCC02] hover:bg-[#e5b802] text-black font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
          <svg class="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </div>
  `;
}

// Render Menu Section on Main Page
function renderMenuSection(category = 'todas') {
  const container = document.getElementById('menu-grid-container');
  if (!container) return;

  const items = category === 'todas'
    ? OFFICIAL_MENU
    : OFFICIAL_MENU.filter(i => i.category === category);

  container.innerHTML = items.map(createProductCardHTML).join('');
}

// Filter Menu Tabs on Main Page
function filterMenu(category) {
  const tabs = document.querySelectorAll('.menu-filter-btn');
  tabs.forEach(tab => {
    if (tab.dataset.filter === category) {
      tab.className = 'menu-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all bg-[#0E0E10] text-white shadow-md active:scale-95';
    } else {
      tab.className = 'menu-filter-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all bg-white text-black border border-black/20 hover:border-black active:scale-95';
    }
  });

  renderMenuSection(category);
}

// Render Modal Menu Items
function renderMenuItemsModal(category = 'todas') {
  const container = document.getElementById('modal-items-container');
  if (!container) return;

  const filtered = category === 'todas'
    ? OFFICIAL_MENU
    : OFFICIAL_MENU.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => {
    const hasOptions = item.options && item.options.length > 0;
    let optionsSelect = '';
    if (hasOptions) {
      optionsSelect = `
        <div class="mt-2">
          <select id="modal-opt-${item.id}" class="w-full bg-[#202026] border border-neutral-700 text-xs text-white rounded-lg px-2 py-1">
            ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
          </select>
        </div>
      `;
    }

    return `
      <div class="bg-[#18181b] border border-neutral-800 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between hover:border-[#FDCC02]/40 transition-colors">
        <div class="flex gap-3 sm:gap-4 items-start">
          <div class="flex flex-col items-center shrink-0">
            <img src="${item.img}" alt="${item.name}" class="w-16 h-16 sm:w-24 sm:h-24 rounded-xl object-cover bg-neutral-900 border border-neutral-700">
            <span class="text-[8px] sm:text-[9px] text-neutral-500 mt-1 font-medium text-center leading-none">* Ilustrativa</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-1">
              <span class="text-[10px] sm:text-xs bg-[#FDCC02] text-black font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">${item.badge}</span>
              <span class="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">${item.category}</span>
            </div>
            <h4 class="font-comic text-white text-base sm:text-xl leading-tight">${item.name}</h4>
            <p class="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">${item.desc}</p>
            ${item.includes ? `<p class="text-xs text-[#FDCC02] font-semibold mt-1">★ ${item.includes}</p>` : ''}
            ${optionsSelect}
          </div>
        </div>
        <div class="flex items-center justify-between mt-3.5 sm:mt-4 pt-3 border-t border-neutral-800/80">
          <div class="text-[#FDCC02] font-comic text-lg sm:text-2xl">$${item.price} <span class="text-xs text-neutral-400 font-sans">MXN</span></div>
          <button type="button" onclick="addFromModal('${item.id}')"
                  class="add-btn-${item.id} bg-[#FDCC02] hover:bg-[#e5b802] text-black font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 transition-transform hover:scale-105 active:scale-95 shadow">
            <span>+ Agregar</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function addFromModal(itemId) {
  const optSelect = document.getElementById(`modal-opt-${itemId}`);
  const optionValue = optSelect ? optSelect.value : null;
  addToCart(itemId, optionValue);
}

// Modal open/close for Menu List
function openMenuModal(category = 'todas') {
  const modal = document.getElementById('menu-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  renderMenuItemsModal(category);

  // Update tabs in modal
  const tabs = document.querySelectorAll('.menu-tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.add('bg-[#FDCC02]', 'text-black', 'font-bold');
      tab.classList.remove('bg-neutral-800', 'text-white');
    } else {
      tab.classList.remove('bg-[#FDCC02]', 'text-black', 'font-bold');
      tab.classList.add('bg-neutral-800', 'text-white');
    }
  });
}

function closeMenuModal() {
  const modal = document.getElementById('menu-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Official Menu Image Modal
function openMenuImageModal() {
  const modal = document.getElementById('menu-image-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeMenuImageModal() {
  const modal = document.getElementById('menu-image-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Cart Modal Open/Close
function openCartModal() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  renderCartModal();
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Delivery type toggling
function setDeliveryType(type) {
  currentDeliveryType = type;
  const pickupBtn = document.getElementById('delivery-type-pickup');
  const deliveryBtn = document.getElementById('delivery-type-delivery');
  const addressContainer = document.getElementById('delivery-address-container');

  if (type === 'pickup') {
    pickupBtn.className = 'delivery-type-btn py-2.5 px-3 rounded-xl border border-[#FDCC02] bg-[#FDCC02] text-black text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all';
    deliveryBtn.className = 'delivery-type-btn py-2.5 px-3 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all';
    if (addressContainer) addressContainer.classList.add('hidden');
  } else {
    deliveryBtn.className = 'delivery-type-btn py-2.5 px-3 rounded-xl border border-[#FDCC02] bg-[#FDCC02] text-black text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all';
    pickupBtn.className = 'delivery-type-btn py-2.5 px-3 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all';
    if (addressContainer) addressContainer.classList.remove('hidden');
  }
}

// Payment method toggling
function setPaymentMethod(method) {
  currentPaymentMethod = method;
  const cashBtn = document.getElementById('payment-method-cash');
  const transferBtn = document.getElementById('payment-method-transfer');

  if (method === 'Efectivo') {
    cashBtn.className = 'payment-method-btn py-2 px-3 rounded-xl border border-[#FDCC02] bg-[#FDCC02] text-black text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all';
    transferBtn.className = 'payment-method-btn py-2 px-3 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all';
  } else {
    transferBtn.className = 'payment-method-btn py-2 px-3 rounded-xl border border-[#FDCC02] bg-[#FDCC02] text-black text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all';
    cashBtn.className = 'payment-method-btn py-2 px-3 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all';
  }
}

// Render items inside the Cart Modal
function renderCartModal() {
  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const summaryBox = document.getElementById('cart-summary-box');
  const formBox = document.getElementById('cart-checkout-form');
  const sendBtn = document.getElementById('send-order-whatsapp-btn');

  if (!container) return;

  const { count, total } = getCartTotals();

  if (subtotalEl) subtotalEl.textContent = `$${total} MXN`;
  if (totalEl) totalEl.textContent = `$${total} MXN`;

  if (count === 0) {
    container.innerHTML = `
      <div class="py-10 text-center flex flex-col items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-3xl mb-3">
          🛒
        </div>
        <h4 class="font-comic text-xl text-white">Tu carrito está vacío</h4>
        <p class="text-xs text-neutral-400 mt-1 max-w-xs">
          Aún no has agregado ningún antojito. Explora nuestro menú oficial y elige con hambre y sin miedo.
        </p>
        <button type="button" onclick="closeCartModal()" class="mt-4 bg-[#FDCC02] hover:bg-[#e5b802] text-black font-extrabold text-xs px-5 py-2.5 rounded-full shadow transition-all">
          Explorar el Menú
        </button>
      </div>
    `;
    if (summaryBox) summaryBox.classList.add('hidden');
    if (formBox) formBox.classList.add('hidden');
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.classList.add('opacity-50', 'pointer-events-none');
    }
    return;
  }

  if (summaryBox) summaryBox.classList.remove('hidden');
  if (formBox) formBox.classList.remove('hidden');
  if (sendBtn) {
    sendBtn.disabled = false;
    sendBtn.classList.remove('opacity-50', 'pointer-events-none');
  }

  container.innerHTML = cart.map(item => {
    return `
      <div class="bg-black/60 border border-neutral-800 rounded-2xl p-3 sm:p-4 space-y-2.5">
        <!-- Top row: Product image, title, option, and delete button -->
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3 min-w-0 flex-1">
            <div class="flex flex-col items-center shrink-0">
              <img src="${item.img}" alt="${item.name}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover bg-neutral-900 border border-neutral-700">
              <span class="text-[8px] text-neutral-500 mt-0.5 font-medium leading-none text-center">* Ilustrativa</span>
            </div>
            <div class="min-w-0 flex-1">
              <h5 class="font-bold text-white text-sm sm:text-base leading-snug">
                ${item.name}
              </h5>
              ${item.selectedOption ? `<p class="text-xs text-[#FDCC02] font-semibold mt-0.5">Sabor: ${item.selectedOption}</p>` : ''}
              ${item.includes ? `<p class="text-[11px] text-neutral-400 mt-0.5">★ ${item.includes}</p>` : ''}
              <p class="text-xs text-neutral-400 mt-0.5 font-medium">$${item.price} MXN c/u</p>
            </div>
          </div>

          <!-- Delete Button -->
          <button type="button" onclick="removeFromCart('${item.cartKey}')" title="Eliminar producto"
                  class="text-neutral-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-neutral-800/80 transition-colors shrink-0 -mr-1 -mt-1" aria-label="Eliminar ${item.name}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>

        <!-- Bottom row: Quantity Stepper (left) & Subtotal (right) -->
        <div class="flex items-center justify-between pt-2 border-t border-neutral-800/80">
          <div class="flex items-center border border-neutral-700 bg-neutral-900 rounded-xl overflow-hidden shadow-inner">
            <button type="button" onclick="updateCartQty('${item.cartKey}', -1)" aria-label="Disminuir"
                    class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors font-bold text-base active:scale-95">
              −
            </button>
            <span class="w-7 sm:w-8 text-center text-xs sm:text-sm font-extrabold text-[#FDCC02]">
              ${item.quantity}
            </span>
            <button type="button" onclick="updateCartQty('${item.cartKey}', 1)" aria-label="Aumentar"
                    class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors font-bold text-base active:scale-95">
              +
            </button>
          </div>

          <div class="text-right">
            <span class="text-[11px] text-neutral-400 mr-1.5 hidden sm:inline">Subtotal:</span>
            <span class="font-comic text-base sm:text-lg text-[#FDCC02] font-bold">
              $${item.price * item.quantity} <span class="text-xs font-sans text-neutral-300 font-normal">MXN</span>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Generate WhatsApp order message strictly WITHOUT ANY EMOJIS!
function buildWhatsAppOrderMessage(name, phone, deliveryType, address, payment, notes) {
  const { total } = getCartTotals();

  const lines = [];
  lines.push("PEDIDO BURGUEROS NEZA");
  lines.push("========================================");
  lines.push("DATOS DEL CLIENTE:");
  lines.push("Nombre: " + name);
  lines.push("Telefono: " + phone);
  lines.push("Tipo de entrega: " + (deliveryType === 'pickup' ? "Para Recoger (Pickup en Sucursal)" : "A Domicilio en Neza"));
  if (deliveryType === 'delivery' && address) {
    lines.push("Direccion de entrega: " + address);
  }
  lines.push("Metodo de pago: " + payment);
  lines.push("========================================");
  lines.push("DETALLE DEL PEDIDO:");

  cart.forEach(item => {
    let line = "* " + item.quantity + "x " + item.name + " ($" + (item.price * item.quantity) + " MXN)";
    lines.push(line);
    if (item.selectedOption) {
      lines.push("  - Sabor / Opcion: " + item.selectedOption);
    }
    if (item.includes) {
      lines.push("  - Cortesia: " + item.includes);
    }
  });

  lines.push("========================================");
  lines.push("TOTAL A PAGAR: $" + total + " MXN");
  lines.push("========================================");

  if (notes && notes.trim()) {
    lines.push("Notas especiales: " + notes.trim());
    lines.push("========================================");
  }

  lines.push("(Pedido generado desde la pagina web oficial)");

  // Strict emoji filter to guarantee NO character decoding issues:
  let rawText = lines.join("\n");
  let emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
  return rawText.replace(emojiRegex, '');
}

// Submit Order to WhatsApp
function submitOrderToWhatsApp() {
  const { count } = getCartTotals();
  if (count === 0) {
    alert("Tu carrito está vacío. Por favor agrega productos del menú antes de enviar tu pedido.");
    return;
  }

  const nameInput = document.getElementById('order-customer-name');
  const phoneInput = document.getElementById('order-customer-phone');
  const addressInput = document.getElementById('order-customer-address');
  const notesInput = document.getElementById('order-customer-notes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert("Por favor ingresa tu nombre para el pedido.");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone) {
    alert("Por favor ingresa un número de teléfono de WhatsApp de contacto.");
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (currentDeliveryType === 'delivery' && !address) {
    alert("Por favor ingresa tu dirección de entrega en Neza.");
    if (addressInput) addressInput.focus();
    return;
  }

  const message = buildWhatsAppOrderMessage(name, phone, currentDeliveryType, address, currentPaymentMethod, notes);
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Clear cart and close modal
  clearCart();
  closeCartModal();
}

// ==============================================================
// LOCATION & GOOGLE MAPS INTERACTIVE MODULE
// ==============================================================

// Switch location menu tabs: Ubicación | Horarios | Servicios
function switchLocationTab(tabName) {
  const tabs = ['ubicacion', 'horarios', 'servicios'];
  
  tabs.forEach(name => {
    const btn = document.getElementById(`tab-btn-${name}`);
    const pane = document.getElementById(`pane-${name}`);
    if (!btn || !pane) return;

    if (name === tabName) {
      btn.className = 'location-tab-btn py-2 px-2 rounded-xl text-center transition-all bg-[#FDCC02] text-black shadow font-extrabold flex items-center justify-center gap-1.5 focus:outline-none';
      pane.classList.remove('hidden');
      pane.classList.add('block');
    } else {
      btn.className = 'location-tab-btn py-2 px-2 rounded-xl text-center transition-all text-neutral-400 hover:text-white flex items-center justify-center gap-1.5 focus:outline-none';
      pane.classList.add('hidden');
      pane.classList.remove('block');
    }
  });
}

// Copy branch address to clipboard with animated visual feedback
function copyBranchAddress() {
  const address = 'Lago Constanza 241-b, Agua Azul, 57500 Ciudad Nezahualcóyotl, Méx.';
  const copyBtn = document.getElementById('copy-address-btn');
  const copyText = document.getElementById('copy-text');
  const copyIcon = document.getElementById('copy-icon');

  const onCopied = () => {
    if (copyText) copyText.textContent = '¡Copiada!';
    if (copyBtn) {
      copyBtn.classList.add('bg-emerald-600/30', 'border-emerald-500/60', 'text-emerald-300');
      copyBtn.classList.remove('bg-neutral-800/90', 'text-neutral-200');
    }
    if (copyIcon) {
      copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />';
      copyIcon.classList.remove('text-[#FDCC02]');
      copyIcon.classList.add('text-emerald-400');
    }

    setTimeout(() => {
      if (copyText) copyText.textContent = 'Copiar Dirección';
      if (copyBtn) {
        copyBtn.classList.remove('bg-emerald-600/30', 'border-emerald-500/60', 'text-emerald-300');
        copyBtn.classList.add('bg-neutral-800/90', 'text-neutral-200');
      }
      if (copyIcon) {
        copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>';
        copyIcon.classList.add('text-[#FDCC02]');
        copyIcon.classList.remove('text-emerald-400');
      }
    }, 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(address).then(onCopied).catch(() => {
      fallbackCopy(address, onCopied);
    });
  } else {
    fallbackCopy(address, onCopied);
  }
}

function fallbackCopy(text, callback) {
  try {
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    if (callback) callback();
  } catch (err) {
    console.error('No se pudo copiar el texto', err);
  }
}

// Dynamic branch schedule status calculation (2:00 PM - 10:00 PM, Tuesday to Sunday)
function updateBranchStatus() {
  const badge = document.getElementById('branch-status-badge');
  if (!badge) return;

  try {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday
    const hour = now.getHours();

    if (day === 1) { // Lunes descanso
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-red-400"></span><span>🔴 Hoy Cerrado (Descanso) • Abrimos Mañana 2:00 PM</span>';
    } else if (hour >= 14 && hour < 22) { // 2 PM a 10 PM
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>🟢 Abierto Ahora • ¡Te esperamos!</span>';
    } else {
      badge.className = 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold shrink-0 self-start sm:self-auto shadow-sm';
      badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span><span>🟡 Abrimos a las 2:00 PM • ¡Pide tu orden!</span>';
    }
  } catch (e) {
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>🟢 Martes a Domingo • 2:00 PM – 10:00 PM</span>';
  }
}

// Setup event listeners once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
    });
  }

  // Close mobile drawer when clicking a link
  document.querySelectorAll('#mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.add('hidden');
    });
  });

  // Modal category tabs click
  const modalTabs = document.querySelectorAll('.menu-tab-btn');
  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.category;
      openMenuModal(cat);
    });
  });

  // Close modal button for menu
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeMenuModal);
  }

  // Close modal clicking outside
  const menuModal = document.getElementById('menu-modal');
  if (menuModal) {
    menuModal.addEventListener('click', (e) => {
      if (e.target === menuModal) closeMenuModal();
    });
  }

  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) closeCartModal();
    });
  }

  const imageModal = document.getElementById('menu-image-modal');
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) closeMenuImageModal();
    });
  }

  // Escape key closes modals & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenuModal();
      closeCartModal();
      closeMenuImageModal();
      if (mobileDrawer) mobileDrawer.classList.add('hidden');
    }
  });

  // Render initial menu section
  renderMenuSection('todas');

  // Initialize UI with cart state
  updateCartUI();

  // Initialize branch live status
  updateBranchStatus();
});

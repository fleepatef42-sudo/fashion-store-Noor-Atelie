const products = [
    {
        id: 1,
        name: "فستان Linen Flow",
        category: "فساتين",
        price: 1890,
        oldPrice: 2290,
        rating: 4.9,
        tag: "جديد",
        accent: "#d9c5b1",
        sizes: ["S", "M", "L"],
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
        description: "فستان بانسيابية ناعمة وخامة خفيفة تناسب النهار والمساء.",
    },
    {
        id: 2,
        name: "جاكيت Tailored Sand",
        category: "جاكيتات",
        price: 2340,
        oldPrice: 2790,
        rating: 4.8,
        tag: "قصّة مستقيمة",
        accent: "#cbb09a",
        sizes: ["M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80",
        description: "جاكيت بكتف واضح وتفصيل نظيف لستايل يومي أكثر أناقة.",
    },
    {
        id: 3,
        name: "قميص Soft Poplin",
        category: "قمصان",
        price: 960,
        oldPrice: 1190,
        rating: 4.7,
        tag: "أساسي فاخر",
        accent: "#efe2d1",
        sizes: ["S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
        description: "قميص يومي مرن وسهل التنسيق مع البنطلونات والتنانير.",
    },
    {
        id: 4,
        name: "طقم City Ease",
        category: "أطقم",
        price: 2560,
        oldPrice: 2990,
        rating: 4.9,
        tag: "الأكثر مبيعًا",
        accent: "#b9bea7",
        sizes: ["M", "L"],
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
        description: "طقم مريح بتفصيل حديث يعطي حضورًا مرتبًا بدون مجهود.",
    },
    {
        id: 5,
        name: "فستان Evening Fold",
        category: "فساتين",
        price: 2790,
        oldPrice: 3250,
        rating: 4.8,
        tag: "مناسب للمساء",
        accent: "#9a806c",
        sizes: ["S", "M"],
        image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
        description: "فستان ناعم بلمسة لامعة خفيفة يرفع الإطلالة فورًا.",
    },
    {
        id: 6,
        name: "حذاء Studio Step",
        category: "أحذية",
        price: 1640,
        oldPrice: 1890,
        rating: 4.6,
        tag: "مريح طوال اليوم",
        accent: "#d2b79e",
        sizes: ["37", "38", "39", "40"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        description: "حذاء عملي بتفاصيل نظيفة يناسب الحركة اليومية والتنسيقات الهادئة.",
    },
    {
        id: 7,
        name: "جاكيت Cropped Muse",
        category: "جاكيتات",
        price: 1980,
        oldPrice: 2290,
        rating: 4.7,
        tag: "لون الموسم",
        accent: "#b7b195",
        sizes: ["S", "M", "L"],
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        description: "جاكيت قصير بستايل معاصر يضيف توازنًا رائعًا للقطعة الأساسية.",
    },
    {
        id: 8,
        name: "قميص Atelier Stripe",
        category: "قمصان",
        price: 1090,
        oldPrice: 1320,
        rating: 4.8,
        tag: "إصدار محدود",
        accent: "#e6d7c6",
        sizes: ["M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        description: "قميص بخطوط دقيقة يمنح الإطلالة إحساسًا مرتّبًا وخفيفًا.",
    },
];

const state = {
    activeFilter: "الكل",
    search: "",
    sort: "featured",
    priceRange: "all",
    selectedSize: "all",
    favoritesOnly: false,
    cart: loadStorage("noor-atelier-cart", []),
    favorites: loadStorage("noor-atelier-favorites", []),
};

const FREE_SHIPPING_THRESHOLD = 2500;
const THEME_STORAGE_KEY = "noor-atelier-theme";

const elements = {
    productsGrid: document.getElementById("productsGrid"),
    searchInput: document.getElementById("searchInput"),
    priceFilter: document.getElementById("priceFilter"),
    sizeFilter: document.getElementById("sizeFilter"),
    sortSelect: document.getElementById("sortSelect"),
    favoritesOnlyToggle: document.getElementById("favoritesOnlyToggle"),
    resetFilters: document.getElementById("resetFilters"),
    resultsMeta: document.getElementById("resultsMeta"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartItems: document.getElementById("cartItems"),
    cartCount: document.getElementById("cartCount"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    cartShipping: document.getElementById("cartShipping"),
    pageOverlay: document.getElementById("pageOverlay"),
    newsletterForm: document.getElementById("newsletterForm"),
    newsletterEmail: document.getElementById("newsletterEmail"),
    newsletterMessage: document.getElementById("newsletterMessage"),
    countdownClock: document.getElementById("countdownClock"),
    shippingStatus: document.getElementById("shippingStatus"),
    shippingProgressFill: document.getElementById("shippingProgressFill"),
    toastMessage: document.getElementById("toastMessage"),
    navToggle: document.getElementById("navToggle"),
    siteNav: document.getElementById("siteNav"),
    themeToggle: document.getElementById("themeToggle"),
    quickView: document.getElementById("quickView"),
    quickViewBody: document.getElementById("quickViewBody"),
    backToTop: document.getElementById("backToTop"),
    scrollProgressBar: document.getElementById("scrollProgressBar"),
};

let toastTimer;
let quickViewProductId = null;
let quickViewQuantity = 1;

function loadStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(value) {
    return new Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "EGP",
        maximumFractionDigits: 0,
    }).format(value);
}

function getProductById(id) {
    return products.find((product) => product.id === id);
}

function getCartQuantity(productId) {
    const item = state.cart.find((entry) => entry.id === productId);
    return item ? item.quantity : 0;
}

function getFilteredProducts() {
    const normalizedSearch = state.search.trim().toLowerCase();

    const filtered = products.filter((product) => {
        const matchesFilter =
            state.activeFilter === "الكل" || product.category === state.activeFilter;

        let matchesPrice = true;
        if (state.priceRange === "under-1500") {
            matchesPrice = product.price < 1500;
        } else if (state.priceRange === "1500-2200") {
            matchesPrice = product.price >= 1500 && product.price <= 2200;
        } else if (state.priceRange === "over-2200") {
            matchesPrice = product.price > 2200;
        }

        const matchesSize =
            state.selectedSize === "all" || product.sizes.includes(state.selectedSize);

        const matchesFavorites = !state.favoritesOnly || state.favorites.includes(product.id);

        const matchesSearch =
            !normalizedSearch ||
            product.name.toLowerCase().includes(normalizedSearch) ||
            product.category.toLowerCase().includes(normalizedSearch) ||
            product.description.toLowerCase().includes(normalizedSearch);

        return matchesFilter && matchesSearch && matchesPrice && matchesSize && matchesFavorites;
    });

    const sorted = [...filtered];

    if (state.sort === "price-asc") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (state.sort === "price-desc") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (state.sort === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    } else if (state.sort === "discount") {
        sorted.sort(
            (a, b) =>
                (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice
        );
    } else if (state.sort === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    }

    return sorted;
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();
    const activeOptions = [];

    if (state.activeFilter !== "الكل") activeOptions.push(`الفئة: ${state.activeFilter}`);
    if (state.priceRange !== "all") activeOptions.push("فلتر السعر مفعل");
    if (state.selectedSize !== "all") activeOptions.push(`المقاس: ${state.selectedSize}`);
    if (state.favoritesOnly) activeOptions.push("المفضلة فقط");

    elements.resultsMeta.textContent = filteredProducts.length
        ? `تم العثور على ${filteredProducts.length} قطعة${activeOptions.length ? ` • ${activeOptions.join(" • ")}` : ""}`
        : "لا توجد نتائج مطابقة الآن. جرّبي كلمة بحث أو فئة أخرى.";

    updateFavoritesOnlyState();

    if (!filteredProducts.length) {
        elements.productsGrid.innerHTML = `
            <div class="empty-state">
                <h3>لا توجد قطع بهذه المواصفات</h3>
                <p>جرّبي إزالة الفلتر أو كتابة اسم قطعة مختلفة لعرض نتائج أكثر.</p>
            </div>
        `;
        refreshIcons();
        return;
    }

    elements.productsGrid.innerHTML = filteredProducts
        .map((product, index) => {
            const isFavorite = state.favorites.includes(product.id);
            const quantity = getCartQuantity(product.id);
            const sizesMarkup = product.sizes
                .map((size) => `<span>${size}</span>`)
                .join("");

            return `
                <article class="product-card" style="--card-accent: ${product.accent}; animation-delay: ${index * 60}ms">
                    <div class="product-card__media">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <span class="product-card__badge">${product.tag}</span>
                        <button
                            class="product-card__favorite ${isFavorite ? "is-active" : ""}"
                            type="button"
                            data-toggle-favorite="${product.id}"
                            aria-label="إضافة إلى المفضلة"
                            aria-pressed="${isFavorite}"
                        >
                            <i data-lucide="heart"></i>
                        </button>
                    </div>

                    <div class="product-card__meta">
                        <span>${product.category}</span>
                        <div class="product-card__rating">
                            <strong>${product.rating}</strong>
                            <i data-lucide="star"></i>
                        </div>
                    </div>

                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__desc">${product.description}</p>

                    <div class="product-card__sizes">${sizesMarkup}</div>

                    <div class="product-card__price">
                        <strong>${formatPrice(product.price)}</strong>
                        <del>${formatPrice(product.oldPrice)}</del>
                    </div>

                    <div class="product-card__footer">
                        <button class="button button--primary" type="button" data-add-to-cart="${product.id}">
                            <i data-lucide="shopping-cart"></i>
                            <span>${quantity ? `أضف مرة أخرى (${quantity})` : "أضف للحقيبة"}</span>
                        </button>
                        <button class="button button--secondary" type="button" data-quick-view="${product.id}">
                            عرض سريع
                        </button>
                        <button class="button button--secondary" type="button" data-open-cart aria-label="فتح الحقيبة">
                            <i data-lucide="arrow-up-left"></i>
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");

    refreshIcons();
}

function addToCart(productId) {
    const product = getProductById(productId);
    const existingItem = state.cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ id: productId, quantity: 1 });
    }

    syncCart();
    if (product) {
        showToast(`تمت إضافة "${product.name}" إلى الحقيبة`);
    }
    openCart();
}

function updateCartQuantity(productId, nextQuantity) {
    if (nextQuantity <= 0) {
        state.cart = state.cart.filter((item) => item.id !== productId);
    } else {
        state.cart = state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: nextQuantity } : item
        );
    }

    syncCart();
}

function getCartSubtotal() {
    return state.cart.reduce((total, item) => {
        const product = getProductById(item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function renderCart() {
    if (!state.cart.length) {
        elements.cartItems.innerHTML = `
            <div class="empty-state">
                <h3>الحقيبة فارغة حاليًا</h3>
                <p>أضيفي بعض القطع المفضلة وسيظهر ملخص الطلب هنا.</p>
            </div>
        `;
        elements.cartSubtotal.textContent = formatPrice(0);
        elements.cartShipping.textContent = "مجاني";
        elements.cartCount.textContent = "0";
        updateShippingProgress(0);
        refreshIcons();
        return;
    }

    elements.cartItems.innerHTML = state.cart
        .map((item) => {
            const product = getProductById(item.id);

            if (!product) {
                return "";
            }

            return `
                <article class="cart-item">
                    <div class="cart-item__thumb">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="cart-item__content">
                        <div>
                            <h3>${product.name}</h3>
                            <div class="cart-item__meta">${product.category}</div>
                        </div>

                        <div class="cart-item__footer">
                            <div class="cart-item__qty">
                                <button type="button" data-decrease-item="${product.id}" aria-label="تقليل الكمية">-</button>
                                <strong>${item.quantity}</strong>
                                <button type="button" data-increase-item="${product.id}" aria-label="زيادة الكمية">+</button>
                            </div>

                            <div class="cart-item__price">${formatPrice(product.price * item.quantity)}</div>
                        </div>
                    </div>
                </article>
            `;
        })
        .join("");

    const subtotal = getCartSubtotal();
    const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);

    elements.cartSubtotal.textContent = formatPrice(subtotal);
    elements.cartShipping.textContent = subtotal >= FREE_SHIPPING_THRESHOLD ? "مجاني" : formatPrice(90);
    elements.cartCount.textContent = String(totalItems);
    updateShippingProgress(subtotal);

    refreshIcons();
}

function updateShippingProgress(subtotal) {
    const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

    elements.shippingProgressFill.style.width = `${progress}%`;
    elements.shippingStatus.textContent = remaining
        ? `متبقي ${formatPrice(remaining)} للحصول على شحن مجاني`
        : "ممتاز! طلبك الآن يشمل شحنًا مجانيًا";
}

function syncCart() {
    saveStorage("noor-atelier-cart", state.cart);
    renderProducts();
    renderCart();
}

function updateFavoritesOnlyState() {
    elements.favoritesOnlyToggle.classList.toggle("is-active", state.favoritesOnly);
    elements.favoritesOnlyToggle.textContent = state.favoritesOnly
        ? "المفضلة فقط ✓"
        : "المفضلة فقط";
}

function resetAllFilters() {
    state.activeFilter = "الكل";
    state.search = "";
    state.sort = "featured";
    state.priceRange = "all";
    state.selectedSize = "all";
    state.favoritesOnly = false;

    elements.searchInput.value = "";
    elements.sortSelect.value = "featured";
    elements.priceFilter.value = "all";
    elements.sizeFilter.value = "all";
    setActiveFilter("الكل");
}

function toggleFavorite(productId) {
    if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
    } else {
        state.favorites.push(productId);
    }

    saveStorage("noor-atelier-favorites", state.favorites);
    renderProducts();
}

function setActiveFilter(filterValue) {
    state.activeFilter = filterValue;
    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === filterValue);
    });
    renderProducts();
}

function openCart() {
    elements.cartDrawer.classList.add("is-open");
    elements.cartDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-cart-open");
    syncOverlayState();
}

function closeCart() {
    elements.cartDrawer.classList.remove("is-open");
    elements.cartDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-cart-open");
    syncOverlayState();
}

function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) {
        return;
    }

    quickViewProductId = product.id;
    quickViewQuantity = 1;
    renderQuickView(product);
    elements.quickView.classList.add("is-open");
    elements.quickView.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");
    syncOverlayState();
}

function closeQuickView() {
    elements.quickView.classList.remove("is-open");
    elements.quickView.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");
    quickViewProductId = null;
    quickViewQuantity = 1;
    syncOverlayState();
}

function renderQuickView(product) {
    const sizesMarkup = product.sizes.map((size) => `<span>${size}</span>`).join("");
    elements.quickViewBody.innerHTML = `
        <div class="quick-view__media">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="quick-view__content">
            <div class="quick-view__meta">
                <span class="eyebrow">${product.category}</span>
                <strong>${product.rating} ★</strong>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="quick-view__sizes">${sizesMarkup}</div>
            <div class="product-card__price">
                <strong>${formatPrice(product.price)}</strong>
                <del>${formatPrice(product.oldPrice)}</del>
            </div>
            <div class="quick-view__actions">
                <div class="quick-view__qty">
                    <button type="button" data-modal-minus aria-label="تقليل الكمية">-</button>
                    <strong id="quickViewQtyValue">${quickViewQuantity}</strong>
                    <button type="button" data-modal-plus aria-label="زيادة الكمية">+</button>
                </div>
                <button class="button button--primary" type="button" data-modal-add>
                    إضافة للحقيبة
                </button>
            </div>
        </div>
    `;
    refreshIcons();
}

function addQuickViewToCart() {
    if (!quickViewProductId) {
        return;
    }

    const existingItem = state.cart.find((item) => item.id === quickViewProductId);
    if (existingItem) {
        existingItem.quantity += quickViewQuantity;
    } else {
        state.cart.push({ id: quickViewProductId, quantity: quickViewQuantity });
    }

    const product = getProductById(quickViewProductId);
    if (product) {
        showToast(`تمت إضافة ${quickViewQuantity} من "${product.name}" إلى الحقيبة`);
    }
    syncCart();
    closeQuickView();
    openCart();
}

function updateQuickViewQuantity(next) {
    quickViewQuantity = Math.max(1, next);
    const qtyElement = document.getElementById("quickViewQtyValue");
    if (qtyElement) {
        qtyElement.textContent = String(quickViewQuantity);
    }
}

function syncOverlayState() {
    const shouldShowOverlay =
        elements.cartDrawer.classList.contains("is-open") ||
        elements.quickView.classList.contains("is-open");
    elements.pageOverlay.classList.toggle("is-visible", shouldShowOverlay);
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("theme-dark", isDark);
    elements.themeToggle.setAttribute("aria-label", isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي");
    saveStorage(THEME_STORAGE_KEY, theme);
    refreshIcons();
}

function toggleTheme() {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
}

function handleScrollEffects() {
    const scrollTop = window.scrollY;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min((scrollTop / maxScroll) * 100, 100);

    elements.scrollProgressBar.style.width = `${progress}%`;
    elements.backToTop.classList.toggle("is-visible", scrollTop > 420);
}

function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toastMessage.classList.add("is-visible");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        elements.toastMessage.classList.remove("is-visible");
    }, 2200);
}

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function setupCountdown() {
    const updateCountdown = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const diff = Math.max(endOfDay - now, 0);

        const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
        const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
        const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

        elements.countdownClock.textContent = `${hours}:${minutes}:${seconds}`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

document.addEventListener("click", (event) => {
    const openCartButton = event.target.closest("[data-open-cart]");
    const closeCartButton = event.target.closest("[data-close-cart]");
    const addToCartButton = event.target.closest("[data-add-to-cart]");
    const quickViewButton = event.target.closest("[data-quick-view]");
    const closeQuickViewButton = event.target.closest("[data-close-quick-view]");
    const quickViewAddButton = event.target.closest("[data-modal-add]");
    const quickViewPlusButton = event.target.closest("[data-modal-plus]");
    const quickViewMinusButton = event.target.closest("[data-modal-minus]");
    const toggleFavoriteButton = event.target.closest("[data-toggle-favorite]");
    const favoritesOnlyButton = event.target.closest("#favoritesOnlyToggle");
    const increaseButton = event.target.closest("[data-increase-item]");
    const decreaseButton = event.target.closest("[data-decrease-item]");
    const filterButton = event.target.closest("[data-filter]");

    if (openCartButton) {
        openCart();
    }

    if (closeCartButton) {
        closeCart();
    }

    if (closeQuickViewButton) {
        closeQuickView();
    }

    if (event.target === elements.pageOverlay) {
        closeCart();
        closeQuickView();
    }

    if (addToCartButton) {
        addToCart(Number(addToCartButton.dataset.addToCart));
    }

    if (quickViewButton) {
        openQuickView(Number(quickViewButton.dataset.quickView));
    }

    if (quickViewAddButton) {
        addQuickViewToCart();
    }

    if (quickViewPlusButton) {
        updateQuickViewQuantity(quickViewQuantity + 1);
    }

    if (quickViewMinusButton) {
        updateQuickViewQuantity(quickViewQuantity - 1);
    }

    if (toggleFavoriteButton) {
        toggleFavorite(Number(toggleFavoriteButton.dataset.toggleFavorite));
    }

    if (favoritesOnlyButton) {
        state.favoritesOnly = !state.favoritesOnly;
        renderProducts();
    }

    if (increaseButton) {
        const productId = Number(increaseButton.dataset.increaseItem);
        updateCartQuantity(productId, getCartQuantity(productId) + 1);
    }

    if (decreaseButton) {
        const productId = Number(decreaseButton.dataset.decreaseItem);
        updateCartQuantity(productId, getCartQuantity(productId) - 1);
    }

    if (filterButton) {
        setActiveFilter(filterButton.dataset.filter);
    }

    if (event.target.closest("#navToggle")) {
        const isExpanded = elements.navToggle.getAttribute("aria-expanded") === "true";
        elements.navToggle.setAttribute("aria-expanded", String(!isExpanded));
        elements.siteNav.classList.toggle("is-open", !isExpanded);
    }

    if (event.target.closest(".site-nav a")) {
        elements.siteNav.classList.remove("is-open");
        elements.navToggle.setAttribute("aria-expanded", "false");
    }

    if (event.target.closest("#themeToggle")) {
        toggleTheme();
    }

    if (event.target.closest("#backToTop")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCart();
        closeQuickView();
    }
});

elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
});

elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
});

elements.priceFilter.addEventListener("change", (event) => {
    state.priceRange = event.target.value;
    renderProducts();
});

elements.sizeFilter.addEventListener("change", (event) => {
    state.selectedSize = event.target.value;
    renderProducts();
});

elements.resetFilters.addEventListener("click", () => {
    resetAllFilters();
});

elements.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = elements.newsletterEmail.value.trim();

    if (!email) {
        elements.newsletterMessage.textContent = "من فضلك اكتبي بريدًا إلكترونيًا صحيحًا.";
        return;
    }

    elements.newsletterMessage.textContent = `تم تسجيل ${email} في نشرة Noor Atelier بنجاح.`;
    elements.newsletterForm.reset();
});

window.addEventListener("scroll", handleScrollEffects);

const storedTheme = loadStorage(THEME_STORAGE_KEY, "light");
applyTheme(storedTheme === "dark" ? "dark" : "light");

renderProducts();
renderCart();
setupCountdown();
handleScrollEffects();
refreshIcons();

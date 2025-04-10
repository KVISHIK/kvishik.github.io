new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1,
                title: "Red Apple",
                short_text: "Sweet and crunchy",
                image: "img/t-all/apple1.webp",
                desc: "Fresh apple with a delicious aroma.",
                characteristics: {
                    resistance: ["HR: ToMV:0-2; Fol: 1,2; Ve/Vd;", "IR: TYLCV"],
                    plant: [
                        "Strong vigor that provides good leaf coverage.",
                        "Very high productivity with good fruit setting.",
                        "Early matured variety."
                    ],
                    cycle: ["Spring", "Fall", "Winter"],
                    fruit: [
                        "Long shelf life on plant and post harvest.",
                        "Nice shiny attractive deep red color.",
                        "Average fruit size: 140 – 160 grams."
                    ],
                    color: "Red"
                }
            },
            {
                id: 2,
                title: "Green Apple",
                short_text: "Slightly sour but tasty",
                image: "img/t-all/apple2.jpg",
                desc: "An apple with a pleasant sour taste.",
                characteristics: {
                    resistance: ["HR: ToMV:0-2; Fol: 1,2; Ve/Vd;"],
                    plant: [
                        "Medium vigor with good leaf structure.",
                        "Consistent fruit setting.",
                        "Late matured variety."
                    ],
                    cycle: ["Summer", "Fall"],
                    fruit: [
                        "Slightly sour with crisp texture.",
                        "Bright green color with smooth skin.",
                        "Average fruit size: 130 – 150 grams."
                    ],
                    color: "Green"
                }
            },
            {
                id: 3,
                title: "Yellow Apple",
                short_text: "Sweet, not too big",
                image: "img/t-all/apple3.jpg",
                desc: "Tasty and juicy apple.",
                characteristics: {
                    resistance: ["HR: ToMV:0-2; Ve/Vd;"],
                    plant: [
                        "Moderate vigor with upright growth.",
                        "Good productivity and easy harvesting."
                    ],
                    cycle: ["Spring", "Summer"],
                    fruit: [
                        "Golden yellow skin with smooth texture.",
                        "Sweet and juicy flesh.",
                        "Average fruit size: 120 – 140 grams."
                    ],
                    color: "Yellow"
                }
            },
            {
                id: 4,
                title: "Golden Apple",
                short_text: "Sweet and crunchy",
                image: "img/t-all/apple4.webp",
                desc: "Golden apples are known for their taste and aroma.",
                characteristics: {
                    resistance: ["HR: ToMV:0-2; Fol: 1,2;"],
                    plant: [
                        "Vigorous plant with high resistance to pests.",
                        "Good fruit setting even in cooler climates."
                    ],
                    cycle: ["Fall", "Winter"],
                    fruit: [
                        "Golden skin with a hint of blush.",
                        "Crisp, sweet flesh with floral notes.",
                        "Average fruit size: 150 – 170 grams."
                    ],
                    color: "Golden"
                }
            },
            {
                id: 5,
                title: "Granny Smith Apple",
                short_text: "Tender, juicy",
                image: "img/t-all/apple5.webp",
                desc: "Perfect for baking and snacking.",
                characteristics: {
                    resistance: ["HR: ToMV:0-2; IR: TYLCV"],
                    plant: [
                        "High vigor with spreading growth.",
                        "Excellent productivity even in poor soils."
                    ],
                    cycle: ["Spring", "Fall", "Winter"],
                    fruit: [
                        "Firm, crisp texture with tart flavor.",
                        "Green skin with occasional russeting.",
                        "Average fruit size: 140 – 160 grams."
                    ],
                    color: "Green"
                }
            }
        ],
        product: {},
        cart: {},
        btnVisible: 0,
        cartBtnText: "Add to Cart",
        cartPageLink: "contact.html",
        orderPlaced: false,
        contactFields: { name: '', telephone: '', email: '', message: '', captcha: '' }
    },
    methods: {
        getProduct() {
            const productId = window.location.hash.replace('#', '');
            const foundProduct = this.products.find(p => p.id == productId);
            if (foundProduct) {
                this.product = foundProduct;
            } else {
                this.product = {};
            }
            this.checkInCart();
        },
        addToCart(id) {
            const product = this.products.find(p => p.id == id);
            if (product) {
                this.cart[id] = { ...product, quantity: (this.cart[id]?.quantity || 0) + 1 };
                localStorage.setItem('cart', JSON.stringify(this.cart));
                this.cartBtnText = "Go to Cart";
            }
        },
        checkInCart() {
            try {
                this.cart = JSON.parse(localStorage.getItem('cart')) || {};
            } catch (e) {
                console.error("Error parsing cart from localStorage:", e);
                this.cart = {};
            }

            if (this.product.id && this.cart[this.product.id]) {
                this.cartBtnText = "Go to Cart";
            }
        },
        goToCart() {
            window.location.href = this.cartPageLink;
        },
        removeFromCart(id) {
            Vue.delete(this.cart, id);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        makeOrder() {

            this.cart = {};
            localStorage.removeItem('cart');
            this.orderPlaced = true;
        },
        submitForm() {

            if (!this.contactFields.name || !this.contactFields.telephone || !this.contactFields.email || !this.contactFields.message || !this.contactFields.captcha) {
                return;
            }
            this.makeOrder();
        }
    },
    mounted() {
        this.checkInCart();
        this.getProduct();
    }
});

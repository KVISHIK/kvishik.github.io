new Vue({
    el: '#app', // Add an ID for the container where Vue will be displayed
    data: {
        products: [
            {
                id: 1,
                title: "Red Apple",
                short_text: "Sweet and crunchy",
                image: "img/t-all/apple1.webp",
                desc: "Fresh apple with a delicious aroma."
            },
            {
                id: 2,
                title: "Green Apple",
                short_text: "Slightly sour but tasty",
                image: "img/t-all/apple2.jpg",
                desc: "An apple with a pleasant sour taste."
            },
            {
                id: 3,
                title: "Yellow Apple",
                short_text: "Sweet, not too big",
                image: "img/t-all/apple3.jpg",
                desc: "Tasty and juicy apple."
            },
            {
                id: 4,
                title: "Golden Apple",
                short_text: "Sweet and crunchy",
                image: "img/t-all/apple4.webp",
                desc: "Golden apples are known for their taste and aroma."
            },
            {
                id: 5,
                title: "Granny Smith Apple",
                short_text: "Tender, juicy",
                image: "img/t-all/apple5.webp",
                desc: "Perfect for baking and snacking."
            }
        ]
    }
});


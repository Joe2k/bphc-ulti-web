const images = [
    {
        key: 20,
        src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
        original:
            "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
        width: 320,
        height: 213,
        caption: "Time to Think (Tom Eversley - isorepublic.com)",
    },
    {
        key: 21,
        src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
        original:
            "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
        width: 320,
        height: 179,
        tags: [
            { value: "Nature", title: "Nature" },
            { value: "Fauna", title: "Fauna" },
        ],
        caption: "Untitled (Jan Vasek - jeshoots.com)",
    },
    {
        key: 22,
        src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
        original:
            "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
        width: 320,
        height: 215,
        tags: [{ value: "People", title: "People" }],
        caption: "Untitled (moveast.me)",
    },
    {
        key: 23,
        src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        original:
            "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        width: 257,
        height: 320,
        caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
        key: 24,
        src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        original:
            "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        width: 226,
        height: 320,
        caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
        key: 25,
        src: "https://images.unsplash.com/photo-1568323993144-20d546ba585d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        original:
            "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        width: 226,
        height: 320,
        caption: "A photo by Matthew Wiebe. (unsplash.com)",
    },
    {
        key: 1,
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        original:
            "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        tags: [
            { value: "Nature", title: "Nature" },
            { value: "Flora", title: "Flora" },
        ],
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        key: 2,
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        original:
            "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 212,
        caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
        key: 3,
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        original:
            "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
        caption: "Color Pencils (Jeshu John - designerspics.com)",
    },
    {
        key: 4,
        src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
        original:
            "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
        width: 320,
        height: 213,
        caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    },
    {
        key: 5,
        src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
        original:
            "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
        width: 320,
        height: 183,
        caption: "37H (gratispgraphy.com)",
    },
    {
        key: 6,
        src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        original:
            "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
        width: 240,
        height: 320,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "8H (gratisography.com)",
    },
    {
        key: 7,
        src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        original:
            "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
        width: 320,
        height: 190,
        caption: "286H (gratisography.com)",
    },
    {
        key: 8,
        src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        original:
            "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
        width: 320,
        height: 148,
        tags: [{ value: "People", title: "People" }],
        caption: "315H (gratisography.com)",
    },
    {
        key: 9,
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        original:
            "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        width: 320,
        height: 213,
        caption: "201H (gratisography.com)",
    },
    {
        key: 10,
        src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        original:
            "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
        alt: "Big Ben - London",
        width: 248,
        height: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)",
    },
    {
        key: 11,
        src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
        original:
            "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
        alt: "Red Zone - Paris",
        width: 320,
        height: 113,
        tags: [{ value: "People", title: "People" }],
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    },
    {
        key: 12,
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        original:
            "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        alt: "Wood Glass",
        width: 313,
        height: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    },
    {
        key: 13,
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        original:
            "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        width: 320,
        height: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    },
    {
        key: 14,
        src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
        original:
            "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
        width: 320,
        height: 194,
        caption: "Old Barn (Tom Eversley - isorepublic.com)",
    },
    {
        key: 15,
        src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
        original:
            "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
        alt: "Cosmos Flower",
        width: 320,
        height: 213,
        caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    },
    {
        key: 16,
        src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        original:
            "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        width: 271,
        height: 320,
        caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
        key: 17,
        src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
        original:
            "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
        width: 320,
        height: 213,
        tags: [
            { value: "Nature", title: "Nature" },
            { value: "People", title: "People" },
        ],
        caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    },
    {
        key: 18,
        src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        original:
            "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        width: 320,
        height: 213,
        tags: [
            { value: "People", title: "People" },
            { value: "Sport", title: "Sport" },
        ],
        caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    },
    {
        key: 19,
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        original:
            "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        width: 320,
        height: 213,
        caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    },
];

export default images;

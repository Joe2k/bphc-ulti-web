//write functions here to take data and push

const posts = [
    {
        timestamp: new Date("2021-05-18T16:00:00Z"),
        type: "picture",
        url: "https://res.cloudinary.com/deejstqqy/image/upload/v1681205937/SpyBITS_qmujxy.jpg",
        title: "Proin eget mollis purus. Praesent.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum suscipit accumsan. Sed nec interdum mauris. Aliquam erat volutpat. Sed volutpat, eros ut maximus interdum, augue orci ultrices felis, nec blandit eros odio venenatis velit. Quisque ligula sapien, porttitor vitae velit ut, varius pretium elit. Nunc ipsum leo, feugiat eleifend fringilla id, ullamcorper et ligula. Vivamus interdum id libero ultrices ullamcorper.",
    },
    {
        timestamp: new Date("2021-04-18T16:00:00Z"),
        type: "vid",
        url: "https://res.cloudinary.com/deejstqqy/video/upload/v1680948185/samples/cld-sample-video.mp4",
        title: "Proin eget mollis purus. Praesent.",
        body: "Donec posuere imperdiet iaculis. Praesent convallis vitae arcu sed lacinia. Donec ipsum ipsum, lacinia a commodo nec, finibus nec elit. Sed arcu turpis, consectetur iaculis orci vitae, accumsan maximus velit. Sed sagittis posuere hendrerit. Nam massa libero, dignissim a facilisis consequat, molestie ut purus. Integer euismod interdum dapibus.",
    },
    {
        timestamp: new Date("2021-03-18T16:00:00Z"),
        type: "ytvid",
        url: "https://www.youtube.com/embed/yD1juX7c_T8",
        title: "Ut rhoncus urna ut hendrerit consequat. Suspendisse fringilla, urna non tristique lobortis, eros massa cursus lacus, et laoreet dui diam ut lorem.",
        body: "Donec posuere imperdiet iaculis. Praesent convallis vitae arcu sed lacinia. Donec ipsum ipsum, lacinia a commodo nec, finibus nec elit. Sed arcu turpis, consectetur iaculis orci vitae, accumsan maximus velit. Sed sagittis posuere hendrerit. Nam massa libero, dignissim a facilisis consequat, molestie ut purus. Integer euismod interdum dapibus.",
    },
    {
        timestamp: new Date("2023-05-18T16:00:00Z"),
        type: "vid",
        url: "https://res.cloudinary.com/deejstqqy/video/upload/v1681122561/NCUC_2022_Prep_Video_lbwlt8.mp4",
        title: "Quisque ipsum purus, dictum vitae sollicitudin ac.",
        body: "Nulla eget suscipit nisi, id congue odio. Sed congue sapien urna, eget rutrum eros venenatis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed rhoncus ipsum. Nunc vel urna elit. Fusce aliquam pretium sem, in convallis felis sagittis nec. Maecenas quam odio, auctor sed gravida elementum, faucibus id lacus. Etiam malesuada ante sed tincidunt euismod.",
    },
    {
        timestamp: new Date("2022-05-18T16:00:00Z"),
        type: "ytvid",
        url: "https://www.youtube.com/embed/cmuwg8XMyVg?modestbranding=1",
        title: "Maecenas metus leo, viverra nec consequat vitae, tincidunt at sem.",
        body: "Vestibulum velit tortor, tempor vitae ipsum non, rutrum vestibulum nulla. Morbi laoreet dui imperdiet ipsum eleifend vulputate. Mauris faucibus suscipit sapien nec imperdiet. Vestibulum malesuada vulputate tellus, ac congue massa pretium sit amet. Quisque non tempus ligula. Proin euismod finibus nulla vitae tempus. Morbi ut ligula ut leo bibendum ultrices sed a neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
];

export default posts;

$(document).ready(function() {
    let header = $("#menu");
    let content = $("#content");
    let footer = $("#footer");

    header.load("./menu.html");
    content.load("./content.html");
    footer.load("./footer.html");
});

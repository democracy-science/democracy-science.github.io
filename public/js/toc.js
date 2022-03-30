// declare a table of content array 
// it is declared here, to set the scope
var toc = [];

// build an array with all the id of the links in the toc 
// wait for the dom content to be loaded first
document.addEventListener('DOMContentLoaded', function (event) {
    // get the table of contents
    var div = document.getElementById('TableOfContents');
    // get the links, filter by the a tag 
    var links = div.getElementsByTagName('a');
    // build the array
    for (var i = 0; i < links.length; i += 1) {
        toc.push(links[i].getAttribute("href"));
    }
});

// on scroll, for each element in the table of content
// check if the element is in the view port
document.addEventListener('scroll', function () {
    toc.forEach(element => isInViewport(element));
}, {
    passive: true
});

// check if element is in the view port 
// then make its class active
function isInViewport(item) {
    // get the item and the bouding box
    item = item.replace("#", "");
    el = document.getElementById(item);
    rect = el.getBoundingClientRect();

    // check if visible
    isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
    // get the href for the items that are visible
    href = document.querySelectorAll('*[href="#' + item + '"]')[0];
    // if the item is visible, make its href active
    if (isVisible == true) {
        href.classList.add("active");
    } else {
        href.classList.remove("active");
    }
}
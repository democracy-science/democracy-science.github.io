const filter_items = document.getElementsByClassName('filter-item');

for (let i=0; i < filter_items.length; i++) {
    let item =   filter_items[i];
    item.addEventListener('click', function () {
        let selection = item.dataset.filter;
        if (selection == "all") {
            showAll()
        } else {
            modifyContent(selection);
        }

    })
}

const modifyContent = function (year_month) {
    let news =  document.getElementsByClassName('content-item');
    for (let j=0; j < news.length; j++) {
        if (news[j].dataset.content == year_month) {
            news[j].classList.remove('hidden')
        } else {
            news[j].classList.add('hidden');
        }
    }
}

const showAll = function () {
    let news =  document.getElementsByClassName('content-item');
    for (let j=0; j < news.length; j++) { news[j].classList.remove('hidden') }
}
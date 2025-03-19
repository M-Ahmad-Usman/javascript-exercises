const getTheTitles = function(books) {
    const arrayOfTitles = books.reduce((titles, book) => {
        titles.push(book.title);
        return titles;
    }, [])

    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

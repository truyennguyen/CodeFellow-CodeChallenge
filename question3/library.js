$("#removeOddShelf").click(function() {
	$("#oddShelf").hide();
});

$("#addOddShelf").click(function() {
	$("#oddShelf").show();
});

$("#removeEvenShelf").click(function() {
	$("#evenShelf").hide();
});

$("#addEvenShelf").click(function() {
	$("#evenShelf").show();
});

function main(books)
{
	//clear the shelf to add new books
	offShelfBooks = [];
	_.forEach(books, function(books) {
		if (books.status === "offShelf") {
			offShelfBooks.push(books.title + ' is written by ' + books.author
				+ '	<input type="button" value="Add" onclick="' + books.id + '.add()"> ' + '<br>');
		}
	});
	addBooksOddShelf(books);
	addBooksEvenShelf(books);
	$("#off-shelf-books").html(offShelfBooks);
}

main(books);
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
	addBooksOddShelf(books);
	addBooksEvenShelf(books);
	removeBooks(books);
}

main(books);
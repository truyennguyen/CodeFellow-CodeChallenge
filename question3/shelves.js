var offShelfBooks = [];
var oddShelf = [];
var evenShelf = [];

function addBooksOddShelf(books)
{
	//clear the shelf to add new books
	oddShelf = [];
	_.forEach(books, function(books)
	{
		//add book to shelf and add a button to remove book from shelf
		if(books.shelf === "odd" && books.status === "onShelf")
			oddShelf.push(books.title + ' is written by ' + books.author +
				'	<input type="button" value="Remove" onclick="' + books.id + '.remove()"> ' + '<br>');
	});
	$("#odd-shelf").html(oddShelf);
}

function addBooksEvenShelf(books)
{
	//clear the shelf to add new books
	evenShelf = [];
	_.forEach(books, function(books)
	{
		if(books.shelf === "even" && books.status === "onShelf")
			//add book to shelf and add a button to remove book from shelf
			evenShelf.push(books.title + ' is written by ' + books.author +
				'	<input type="button" value="Remove" onclick="' + books.id + '.remove()"> ' + '<br>');
	});
	$("#even-shelf").html(evenShelf);
}

function removeBooks(books)
{
	//clear the shelf to add new books
	offShelfBooks = [];
	_.forEach(books, function(books) {
		if (books.status === "offShelf") {
			offShelfBooks.push(books.title + ' is written by ' + books.author
				+ '	<input type="button" value="Add" onclick="' + books.id + '.add()"> ' + '<br>');
		}
	});
	$("#off-shelf-books").html(offShelfBooks);
}
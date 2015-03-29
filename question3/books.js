function BookStructure(author, title, shelf, status, id)
{
	this.author = author;
	this.title = title;
	this.shelf = shelf;
	this.status = status;
	this.id = id;
}

BookStructure.prototype = {
	remove: function(){
		this.status = "offShelf";
		main(books);
	},
	add: function(){
		this.status = "onShelf";
		main(books);
	}
};

var book1 = new BookStructure('J.K. Rowling', 'Harry Porter', 'odd', "onShelf", "book1");
var book2 = new BookStructure('David Michell', 'The Bone Clocks', 'even', "onShelf", "book2");
var book3 = new BookStructure('Phil Klay', 'Redeployment', 'odd', "onShelf", "book3");
var book4 = new BookStructure('Emily John', 'Station Eleven', 'even', "onShelf", "book4");
var book5 = new BookStructure('Anthony Doerr', 'All the light we cannot see', 'odd', "onShelf", "book5");
var book6 = new BookStructure('Dinaw Mengestu', 'All our names', 'even', "onShelf", "book6");

var books = [book1, book2, book3, book4, book5, book6];
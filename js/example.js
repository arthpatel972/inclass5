// ADD NEW ITEM TO END OF LIST
var last_item = document.createElement('li');
last_item.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(last_item);

// ADD NEW ITEM START OF LIST
var first_item = document.createElement('li');
first_item.appendChild(document.createTextNode('Kale'));
var element = document.getElementById('one');
document.querySelector('ul').insertBefore(first_item, element);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

document.getElementById('one').setAttribute('class', 'cool');
document.getElementById('two').setAttribute('class', 'cool');
document.getElementById('three').setAttribute('class', 'cool');
document.getElementById('four').setAttribute('class', 'cool');
first_item.setAttribute('class', 'cool');
last_item.setAttribute('class', 'cool');

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var list = document.getElementsByTagName('li');
list_length= list.length;
document.querySelector('h2').append(list_length);


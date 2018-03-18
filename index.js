var lovebox = document.getElementById('love')
var one = document.getElementById('onefoto')
var two = document.getElementById('twofoto')
var three = document.getElementById('threefoto')
var four = document.getElementById('fourfoto')

var textbox = document.getElementById('text')
var button = document.getElementById('button')

function reset() {
	setTimeout(function () {
		lovebox.src = 'love.jpg'
	}, 500)
}
 
one.onclick = function () {
	var lover = 'dog.jpg'

	lovebox.src = lover

	reset()
}
two.onclick = function () {
	var lover = 'cat.jpg'

	lovebox.src = lover

	reset()
}
three.onclick = function () {
	var lover = 'hamster.jpg'

	lovebox.src = lover

	reset()
}
four.onclick = function () {
	var lover = 'parrot.jpg'

	lovebox.src = lover

	reset()
}


button.onclick = function () {
var textb = textbox.value

	if (textb == 'хочу собачку'){
	lovebox.src = 'dog.jpg'
	textbox.value = ''
}
if (textb == 'хочу котика'){
	lovebox.src = 'cat.jpg'
	textbox.value = ''

}
if (textb == 'хочу хомяка'){
	lovebox.src = 'hamster.jpg'
	textbox.value = ''

}
if (textb == 'хочу попугая'){
	lovebox.src = 'julius.jpg'
	textbox.value = ''

}
}




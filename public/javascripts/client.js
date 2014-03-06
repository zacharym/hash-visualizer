var findBucket = function(item, primeChoice, tableSize){
	var charArray = item.split('');
	var itemValue = 0;
	for(var i=0; i<charArray.length; i++){
		var charCodeVal = charArray[i].charCodeAt(0);
		var charValue = ((Math.pow(primeChoice,i))*charArray[i].charCodeAt(0));
		itemValue += charValue;
	}
	var bucketValue = (itemValue % tableSize);
	return bucketValue;
};

function initCanvas(tableSize, numWords){
	var canvas = document.getElementById('tableCanvas');
	canvas.width = tableSize;
	canvas.height = 80;
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "black";
	return ctx;
}

function cleanWord(word){
	word.replace(/\W/gi, '');
	return word;
}

function checkBucket(word, bucket, fillArray){
	for(var i=0; i<fillArray[bucket].length; i++){
		if(fillArray[bucket][i] == word){
			return true;
		}
	}
	return false;
}

function placeWord(word, primeChoice, tableSize, ctx, fillArray){
	word = cleanWord(word);
	var bucket = findBucket(word, primeChoice, tableSize);
	var duplicate = checkBucket(word, bucket, fillArray);
	if(!duplicate){
		fillArray[bucket][fillArray[bucket].length] = word;
		var itemOrder = fillArray[bucket].length;
		var ypos = (80 - (itemOrder*3));
		ctx.fillRect(bucket, ypos, 1, 3);
	}
	return fillArray;
}

function placeItems(wordArray, index, primeChoice, tableSize, ctx, fillArray){
	fillArray = placeWord(wordArray[index], primeChoice, tableSize, ctx, fillArray);
	index++;
	if(index < wordArray.length){
		if((index % 100) == 0){
			setTimeout(function(){
				placeItems(wordArray, index, primeChoice, tableSize, ctx, fillArray);
			}, 10);
		} else {
			placeItems(wordArray, index, primeChoice, tableSize, ctx, fillArray);
		}
			
	}
}

$(document).ready(function($){
	$('#visualize').on('click', function(){
		var text = $('#itemIn').val();
		var wordArray = text.split(/\s+/);
		var primeChoice = $('#primeChoice').val();
		var tableSize = $('#tableSize').val();
		console.log(wordArray);
		var ctx = initCanvas(tableSize, wordArray.length);

		var fillArray = [];
		for(var i=0; i<tableSize; i++){
			fillArray[i] = new Array();
		}

		placeItems(wordArray, 0, primeChoice, tableSize, ctx, fillArray);
	});
});





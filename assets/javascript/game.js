$(document).ready(function(){
//The players score	
var playerScore = 0;
//Prints players score to scoreDisplay
$('.scoreDisplayChild').html(playerScore);

function randomNumbers(){
	/*creates random number between 19-120
	  for the random Number box*/
	var randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	//Prints random number to the random number nox
	$('.ranNumBox').html(randNum);
}

function bt1RandNum()
{
	//creates random number for btn1
	var randNumbt1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	$('.b1').on('click',function(){
		var demo = $('.b1').attr('value', randNumbt1);
		var test1 = $('.b1').attr('value');
		console.log('button #1 ' + test1);
	});	
}
function bt2RandNum()
{
	//creates random number for btn1
	var randNumbt2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	$('.b2').on('click',function(){
		var demo = $('.b2').attr('value', randNumbt2);
		var test2 = $('.b2').attr('value');
		console.log('button #2 ' +  test2);
	});	
}
function bt3RandNum()
{
	//creates random number for btn1
	var randNumbt3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	$('.b3').on('click',function(){
		var demo = $('.b3').attr('value', randNumbt3);
		var test3 = $('.b3').attr('value');
		console.log('button #3 ' + test3);
	});	
}
function bt4RandNum()
{
	//creates random number for btn1
	var randNumbt4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	
	$('.b4').on('click',function(){
		var demo = $('.b4').attr('value', randNumbt4);
		var test4 = $('.b4').attr('value');
		console.log('button #4 ' +  test4);
	});	
}
	
	randomNumbers();
	bt1RandNum();
	bt2RandNum();
	bt3RandNum();
	bt4RandNum();	







});
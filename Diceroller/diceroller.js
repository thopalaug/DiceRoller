
$(document).ready(function(){

	/*
	To-do list:
			
		initiatve table
			- which fields?
			- auto sort by a integer
			
	*/
	
	function rollDice(a,b,c){
			
		var i;
			
		var dice = 0;		//Temp var to store the result of the random function.
		var rolls = "";		//A string to collect the individual rolls.
		var total = 0;		//Stores the sum of the rolls.
		
		var numberOfDice 	= parseInt(a);
		var diceType 		= parseInt(b);
		var modifier 		= parseInt(c);
		
		
		//Checks if numberOfDice is equal to NaN. Value is set to 0 if true.
		if(numberOfDice !== numberOfDice){
			numberOfDice = 0;
		};
	
		//Checks if modifier is equal to NaN. Value is set to 0 if true.
		if(modifier !== modifier){
			modifier = 0;
		};
		
		
		//Function to roll the dices
		for(i = 0; i < numberOfDice; i++){
			
			dice = Math.floor(Math.random() * diceType) + 1;
			total += dice;
			rolls += dice + ", ";
			
		};
		

		//Prints the results
		$( "#resultsOutput" ).prepend(
					
					//Prints the type of dice and how many, and the modifier
					numberOfDice + "d" + diceType + " + " + modifier + "<br>" +
					
					
					//Prints the individual rolls and the modifier
					rolls + " + " + modifier + "<br>" +
					
					
					//Prints the total of the roll
					"Total: " + (total + modifier) + "<br><br>"
					
			);
		};
	

	
	//Calls the rollDice function for d4
	$( "#d4-rollButton" ).click(function(){
		
		rollDice($("#d4-diceInput").val(), 4 , $("#d4-modifier").val());		
	});
	
	
	//Calls the rollDice function for d6
	$( "#d6-rollButton" ).click(function(){
		
		rollDice($("#d6-diceInput").val(), 6 , $("#d6-modifier").val());		
	});
	
	
	//Calls the rollDice function for d8
	$( "#d8-rollButton" ).click(function(){
		
		rollDice($("#d8-diceInput").val(), 8 , $("#d8-modifier").val());		
	});

	
	//Calls the rollDice function for d10
	$( "#d10-rollButton" ).click(function(){
		
		rollDice($("#d10-diceInput").val(), 10 , $("#d10-modifier").val());		
	});
	
	
	//Calls the rollDice function for d12
	$( "#d12-rollButton" ).click(function(){
		
		rollDice($("#d12-diceInput").val(), 12 , $("#d12-modifier").val());		
	});
	
	
	//Calls the rollDice function for d20
	$( "#d20-rollButton" ).click(function(){
		
		rollDice($("#d20-diceInput").val(), 20 , $("#d20-modifier").val());		
	});
	
	
	//Calls the rollDice function for d100
	$( "#d100-rollButton" ).click(function(){
		
		rollDice($("#d100-diceInput").val(), 100 , $("#d100-modifier").val());		
	});
	
	
	
});




//prompt to insert the user's name & set up variables for player's health and attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//delcare a fight variable and call an alert to the user
var fight = function(){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators")

    // create a prompt asking to fight
   var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if the player choses to fight, then fight
    if (promptFight === 'fight' || promptFight=== 'FIGHT') {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        // check enemy's health
        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!")
        } else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
    
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
    
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if the player choses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP'){
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        // if yes(true), leave fight
        if (confirmSkip){
         window.alert(playerName + " has chosen to skip the  fight")
        //  subtract money from playerMoney for skipping
        playerMoney = playerMoney -2
        } else {
            // if no (flase), ask fquestion again by running fight() again
            fight()
        }
        
    } else{
        window.alert("You need to choose a valid Option. Try again!")
    }

};

// call the fight function
fight();

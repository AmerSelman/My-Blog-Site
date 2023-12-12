var turnCount = 1;
var player_A_Score = 0;
var player_B_Score = 0;
class CardS{
	
	constructor(playerAPoints,playerBPoints,cards){
		this.cardsArray = cards;
		this.playerAPoints = playerAPoints;
		this.playerBPoints = playerBPoints;
		this.NowAPoints = playerAPoints;
		this.NowBPoints = playerBPoints;
		this.pointsA = document.getElementById("bodovi-A-igraca");
		this.pointsB = document.getElementById("bodovi-B-igraca");

	}
	startGame(){
		this.cardToCheck = null;
		this.totalPointsA = 0;
		this.totalPointsB = 0;
		this.matchedCards = [];
		this.busy = true;

	}
	flipCard(card){
		if(this.canFlipCard(card)){
			card.classList.add("visible");
		}
	}
	canFlipCard(card){
		return true;
		//return !this.busy;
	}
}

function clickOnCard(row,column)
{
	if(row=='0' && column=='0')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage').src= num +".jpg";
		var path = document.getElementById('myimage').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage").classList.add('not-active');
		}, 2000);
	}
	else if(row=='0' && column=='1')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage2').src= num +".jpg";
		var path = document.getElementById('myimage2').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage2").classList.add('not-active');
		}, 2000);
	}
	else if(row=='0' && column=='2')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage3').src= num +".jpg";
		var path = document.getElementById('myimage3').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage3").classList.add('not-active');
		}, 2000);
	}
	else if(row=='0' && column=='3')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage4").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage4").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage4").classList.add('not-active');
		}, 2000);
	}
	else if(row=='0' && column=='4')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage5').src= num +".jpg";
		var path = document.getElementById('myimage5').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage5").classList.add('not-active');
		}, 2000);
	}
	else if(row=='1' && column=='0')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage6").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage6").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage6").classList.add('not-active');
		}, 2000);
	}
	else if(row=='1' && column=='1')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage7').src= num +".jpg";
		var path = document.getElementById('myimage7').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage7").classList.add('not-active');
		}, 2000);
	}
	else if(row=='1' && column=='2')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage8').src= num +".jpg";
		var path = document.getElementById('myimage8').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage8").classList.add('not-active');
		}, 2000);
	}
	else if(row=='1' && column=='3')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage9").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage9").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage9").classList.add('not-active');
		}, 2000);
	}
	else if(row=='1' && column=='4')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage10").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage10").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage10").classList.add('not-active');
		}, 2000);
	}
	else if(row=='2' && column=='0')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage11').src= num +".jpg";
		var path = document.getElementById('myimage11').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage11").classList.add('not-active');
		}, 2000);
	}
	else if(row=='2' && column=='1')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage12').src= num +".jpg";
		var path = document.getElementById('myimage12').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage12").classList.add('not-active');
		}, 2000);
	}
	else if(row=='2' && column=='2')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage13').src= num +".jpg";
		var path = document.getElementById('myimage13').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage13").classList.add('not-active');
		}, 2000);
	}
	else if(row=='2' && column=='3')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage14').src= num +".jpg";
		var path = document.getElementById('myimage14').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage14").classList.add('not-active');
		}, 2000);
	}
	else if(row=='2' && column=='4')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage15").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage15").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage15").classList.add('not-active');
		}, 2000);
	}
	else if(row=='3' && column=='0')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage16').src= num +".jpg";
		var path = document.getElementById('myimage16').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage16").classList.add('not-active');
		}, 2000);
	}
	else if(row=='3' && column=='1')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage17').src= num +".jpg";
		var path = document.getElementById('myimage17').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage17").classList.add('not-active');
		}, 2000);
	}
	else if(row=='3' && column=='2')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage18').src= num +".jpg";
		var path = document.getElementById('myimage18').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage18").classList.add('not-active');
		}, 2000);
	}
	else if(row=='3' && column=='3')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage19').src= num +".jpg";
		var path = document.getElementById('myimage19').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage19").classList.add('not-active');
		}, 2000);
	}
	else if(row=='3' && column=='4')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage20").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage20").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage20").classList.add('not-active');
		}, 2000);
	}
	else if(row=='4' && column=='0')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage21').src= num +".jpg";
		var path = document.getElementById('myimage21').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage21").classList.add('not-active');
		}, 2000);
	}
	else if(row=='4' && column=='1')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage22").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage22").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage22").classList.add('not-active');
		}, 2000);
	}
	else if(row=='4' && column=='2')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage23').src= num +".jpg";
		var path = document.getElementById('myimage23').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage23").classList.add('not-active');
		}, 2000);
	}
	else if(row=='4' && column=='3')
	{
		var num = Math.floor(Math.random() * 10) + 1;
		document.getElementById('myimage24').src= num +".jpg";
		var path = document.getElementById('myimage24').src;
		var data = path.split(".");
		var name = data[0].split("/");
		if(turnCount%2 ==1)
		{
			player_A_Score = player_A_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
			turnCount = turnCount+1;
		}
		else
		{
			player_B_Score = player_B_Score + parseInt(name[name.length-1], 10);
			document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
			turnCount = turnCount+1;
		}
		setTimeout(function()
		{
			document.getElementById("myimage24").classList.add('not-active');
		}, 2000);
	}
	else if(row=='4' && column=='4')
	{
		var rand = Math.floor(Math.random() * 2);
		if(rand == 0)
		{
			document.getElementById("myimage25").src = "smiley.png";
			if(turnCount%2 ==1)
			{
				player_A_Score = player_A_Score * 2;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = player_B_Score * 2;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		else if(rand == 1)
		{
			document.getElementById("myimage25").src = "angry.jpg";
			if(turnCount%2 ==1)
			{
				player_A_Score = 0;
				document.getElementById('bodovi-A-igraca').innerHTML = player_A_Score;
				turnCount = turnCount+1;
			}
			else
			{
				player_B_Score = 0;
				document.getElementById('bodovi-B-igraca').innerHTML = player_B_Score;
				turnCount = turnCount+1;
			}
		}
		setTimeout(function()
		{
			document.getElementById("myimage25").classList.add('not-active');
		}, 2000);
	}
	if(player_A_Score>=50)
	{
		alert("Player A wins the Game"); 
		window.stop();
		document.location.reload(true);
	}
	if(player_B_Score>=50)
	{	
		alert("Player B wins the Game"); 
		window.stop();
		document.location.reload(true);
	}
	if(turnCount>=25)
	{
		alert("Game is Draw"); 
		window.stop();
		document.location.reload(true);
	}
}
function ready(){
	let overlays = Array.from(document.getElementsByClassName("overlay-text"));
	let cards = Array.from(document.getElementsByClassName("card"));
	let game = new CardS(0,0,cards);

	//overlays.forEach(overlay =>{
	//	overlay.addEventListener("click",() =>{
	//		overlay.classList.remove("visible");
	//		game.startGame();
	//});
	//}
	//cards.forEach(card =>){

	//}

	cards.forEach(card =>{
		card.addEventListener("click",() =>{
			game.flipCard(card);
		});
	});
}

if(document.readyState === "loading"){
	document.addEventListener("DOMContentLoaded",ready());
} else{
	ready();
}
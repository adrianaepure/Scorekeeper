var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var resetBtn = document.querySelector("#reset");
var p1Disp = document.querySelector("#p1Disp");
var p2Disp = document.querySelector("#p2Disp");
var numInput = document.querySelector("input[type=number]");
var winDisp = document.querySelector("#winDisp");
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;


p1Btn.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Disp.classList.add("winner");
			gameOver = true;
		}
		p1Disp.textContent = p1Score;
	}
});

p2Btn.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
	if(p2Score === winningScore){
		gameOver = true;
		p2Disp.classList.add("winner");
	}
	p2Disp.textContent = p2Score;
	}
});

resetBtn.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Disp.textContent = p1Score;
	p2Disp.textContent = p2Score;
	p1Disp.classList.remove("winner");
	p2Disp.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winDisp.textContent = this.value;
	winningScore = Number(this.value);
	reset();

});
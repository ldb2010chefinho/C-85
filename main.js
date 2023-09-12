// 2 - Crie uma referência para o canvas
canvas = document.getElementById("myCanvas");
ctx =canvas.getContext("2d");
// 3- Dê uma altura e largura específicas para a imagem do carro.
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

// 4- Defina a posição inicial para a imagem de um carro.
var greencar_x = 5;
var greencar_y = 225;
function add() {
	// 5 - Escreva os comandos para fazer upload de imagens de carros e fundo da tela
	background_imgTag = new Image(); //definindo uma variável com uma nova imagem
	background_imgTag.onload = uploadBackground; // ajustando uma função, ao carregar esse variável
	background_imgTag.src = background_img;   // carregar imagem

	greencar_imgTag = new Image(); //definindo uma variável com uma nova imagem
	greencar_imgTag.onload = uploadgreencar; // ajustando uma função, ao carregar esse variável
	greencar_imgTag.src = greencar_img;   // carregar imagem
}


function uploadBackground() {
	// 6- Escreva os comandos para adicionar a imagem de fundo
	ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);
}

function uploadgreencar() {
	// 7- Escreva os comandos para adicionar a imagem do carro
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
		
	}
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		
	}
}

function right()
{
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
   }
}

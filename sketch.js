let grid = []
let font = "iA Writer Mono"
let fontSize = 20;
let dX = 16;
let dY = 24;
let sizeX
let sizeY

let frameCounter = 0;
let width = 800;
let height = 800;

function gridCircle(x, y, r, qq = false)
{

	for (let i = 0; i < r; i += 0.1)
	{
		for (let j = 0; j < Math.sqrt(r * r - i * i); j++)
		{
			// if (i * i + j * j <= r * r)
			{
				let p = Math.round(x + i)
				let q = Math.round(y + j)
				let a = Math.round(255 * Math.sqrt((i * i + j * j) / (r * r) ))
				console.log(a)
				let c
				if (qq)
				{
					 c = color(255 - a, 255 - a, 255 - a)
	
				}
				else
				{
					 c = color(a, a, a)
				}
				//c.setAlpha(a)
				dot(Math.round(x + i), Math.round(y + j), { letter: "█", fill: c })
				dot(Math.round(x + i), Math.round(y - j), { letter: "█", fill: c })
				dot(Math.round(x - i), Math.round(y + j), { letter: "█", fill: c })
				dot(Math.round(x - i), Math.round(y - j), { letter: "█", fill: c })
			}
		}

		
	}

	// for (let i = 0; i < TWO_PI; i += TWO_PI / 100)
	// {
	// 	let p = (x + r * sin(i)) | 0
	// 	let q = (y + r * cos(i)) | 0

	// 	dot(p, q, { letter: ".", fill: "blue" })
	// }
}

function dot(x, y, o)
{
	if (x < 0 || x >= sizeX)
	{
		return;
	}

	if (y < 0 || y >= sizeY)
	{
		return;
	}

	grid[x][y] = o
}


function drawGrid()
{
	for (let i = 0; i < sizeX; i++) 
	{
		for (let j = 0; j < sizeY; j++) 
		{
			fill(grid[i][j].fill)
			text(grid[i][j].letter || "", i * dX, j * dY)
		}
	}
}

function clearGrid()
{
	for (let i = 0; i < sizeX; i++) 
	{
		grid[i] = []
		for (let j = 0; j < sizeY; j++) 
		{
			grid[i][j] = {
				letter: null,
				fill: "black"
			}
		}
	}
}


function setup() {
	createCanvas(width, height);
	textFont(font)
	textSize(fontSize)
	textAlign(LEFT, TOP)
	
	sizeX = width / dX
	sizeY = height / dY

	
}

function draw() 
{

	frameCounter++
	clear()
	clearGrid();
	gridCircle(sizeX / 2, sizeY / 2, 20 - abs(sin(frameCounter/ 70) * 10))
	gridCircle(sizeX / 2, sizeY / 2, abs(sin(frameCounter/ 70) * 10), true)
	
	drawGrid(); 
}
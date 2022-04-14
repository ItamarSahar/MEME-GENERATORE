'use strict'
var gElCanvas
var gCtx

function onImgSelect(img) {
	openMemeEditor()
	var imgId = img.getAttribute('data-imgId')
	setImg(imgId)
	renderMeme()
}
function renderMeme() {
	drawImg()
	const lines = getLines()
	lines.forEach((line) => {
		drawText(line)
	})
}

function recderCanvas() {
	gElCanvas = document.querySelector('#my-canvas')
	gCtx = gElCanvas.getContext('2d')
}

function openMemeEditor() {
	document.body.classList.add('open-editor')
}
// window.addEventListener('resize', resizeCanvas)
function resizeCanvas() {
	var elContainer = document.querySelector('.canvas-container')
	gElCanvas.width = elContainer.offsetWidth - 100
}

function drawText(line) {
	const x = gElCanvas.width / 2
	gCtx.font = `${line.size}px impact`
	gCtx.textBaseline = 'middle'
	gCtx.textAlign = `${line.align}`
	gCtx.lineWidth = 2
	gCtx.fillStyle = `${line.fillColor}`
	gCtx.fillText(line.txt, x, line.y)
	gCtx.strokeStyle = `${line.strokeColor}`
	gCtx.strokeText(line.txt, x, line.y)
}

function clearCanvas() {
	gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImg() {
	const meme = getMeme()
	var elImg = document.querySelector(`[data-imgid="${meme.selectedImgId}"]`)
	gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function downloadCanvas(elLink) {
	const data = gElCanvas.toDataURL()
	elLink.href = data
	elLink.download = 'my-canvas'
}

function onStrokeColor(val) {
	setStrokeColor(val)
	renderMeme()
}

function onFillColor(val) {
	setFillColor(val)
	renderMeme()
}

function changeFontSize(val) {
	let size = setLineSize(val)
	document.querySelector('.font-size').innerHTML = `${size}px`
	renderMeme()
}

function onAddLine() {
	setNewLine()
	renderMeme()
}

function onLineTxt(val) {
	setLineTxt(val)
	renderMeme()
}

function onChangeFocusLine() {
	let line = setFocusLine()
	document.querySelector('.font-size').innerHTML = `${line.size}px`
	document.querySelector('.txt').value = line.txt

	drawRect(line)
}

function drawRect(line) {
	renderMeme()
	const x = line.size / 2
	gCtx.rect(x, line.y - 25, gElCanvas.width - line.size, line.size * 1.2)
	gCtx.strokeStyle = 'red'
	gCtx.stroke()
	gCtx.beginPath()
}

function onFontChange(val) {
	setFontLine(val)
}

function onChangePos(val) {
	setLinePos(val)
	renderMeme()
}

function onChangeAlign(val) {
	setLineAlign(val)
	renderMeme()
}

function onDeleteLine() {
	setDeleteLine()
	renderMeme()
}

// function saveAndRestoreExample() {
//     gCtx.font = '50px Arial';
//     gCtx.strokeStyle = 'green';
//     gCtx.strokeText('Saving the context', 10, 50);
//     gCtx.save();
//     gCtx.font = '30px david';
//     gCtx.strokeStyle = 'black';
//     gCtx.strokeText('Switching to something else', 10, 100);
//
//     gCtx.strokeText('Back to previous', 10, 150);
// }

'use strict'
let gFocusLine = 0
//   gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
const gImgs = [
	{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
	{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
	{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
	{ id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
	{ id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
	{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
	{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
	{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
	{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
	{ id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
	{ id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
	{ id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
	{ id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
	{ id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
	{ id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
	{ id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
	{ id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
	{ id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
	selectedImgId: 5,
	selectedLineIdx: 0,
	lines: [
		{
			txt: 'text text text text',
			size: 48,
			align: 'center',
			fillColor: 'white',
			strokeColor: 'black',
			y: 30,
			font: 'impact',
		},
		{
			txt: 'text text text text',
			size: 48,
			align: 'center',
			fillColor: 'white',
			strokeColor: 'black',
			y: 420,
			font: 'impact',
		},
	],
}
function setLineTxt(txt) {
	gMeme.lines[gFocusLine].txt = txt
}

function setImg(imgId) {
	gMeme.selectedImgId = imgId
}
function setStrokeColor(val) {
	gMeme.lines[gFocusLine].strokeColor = val
}
function setFillColor(val) {
	gMeme.lines[gFocusLine].fillColor = val
}

function setLineSize(val) {
	gMeme.lines[gFocusLine].size += val
	return gMeme.lines[gFocusLine].size
}
function setLinePos(val) {
	gMeme.lines[gFocusLine].y += val
}
function setFontLine(val) {
	gMeme.lines[gFocusLine].font = val
}
function setNewLine() {
	const newLine = {
		txt: 'text text text text',
		size: 48,
		align: 'center',
		fillColor: 'white',
		strokeColor: 'black',
		y: 225,
		font: 'impact',
	}
	gMeme.lines.push(newLine)
	gFocusLine = gMeme.lines.length - 1
	console.log('add new line!')
}
function setFocusLine() {
	gFocusLine++
	if (gFocusLine >= gMeme.lines.length) gFocusLine = 0
	return gMeme.lines[gFocusLine]
}

function setLineAlign(val) {
	gMeme.lines[gFocusLine].align = val
}

function setDeleteLine() {
	gMeme.lines.splice(gFocusLine, 1)
	setFocusLine()
}

function getMeme() {
	return gMeme
}
function getLines() {
	return gMeme.lines
}
function getLineText() {
	return gMeme.lines[gMeme.selectedLineIdx]
}

function getImg(imgId) {
	return gImgs.find((img) => img.id === imgId)
}
function getImgs() {
	return gImgs
}

function getFocusLine() {
	return gFocusLine
}

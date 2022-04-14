'use strict'

function renderGallery() {
	document.body.classList.remove('open-editor');
	const imgs = getImgs()
	const strHtmls = imgs.map(
		(img) => `
<img src="meme-${img.url}" alt="" class="img" onclick="onImgSelect(this)" data-imgId = "${img.id}" />`
	)
	document.querySelector('.gallery').innerHTML = strHtmls.join('')
}




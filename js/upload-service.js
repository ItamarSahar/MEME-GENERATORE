// *** Upload a picture to the canvas. ***

function uploadImg() {
	const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

	// A function to be called if request succeeds
	function onSuccess(uploadedImgUrl) {
		const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
		document.querySelector('.upload-service').innerHTML += `
		<button title="SHARE MEME">
		<a
			class="btn"
			href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}"
			title="Share on Facebook"
			target="_blank"
			onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;"
		>
			Share </a
		>
	</button>`
	}
	doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
	const formData = new FormData()
	formData.append('img', imgDataUrl)

	fetch('//ca-upload.com/here/upload.php', {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.text())
		.then((url) => {
			console.log('Got back live url:', url)
			onSuccess(url)
		})
		.catch((err) => {
			console.error(err)
		})
}

function onImgInput(ev) {
	loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
	var reader = new FileReader()

	reader.onload = (event) => {
		console.log('onload')
		var img = new Image()
		// Render on canvas
		img.src = event.target.result
		img.onload = onImageReady.bind(null, img)
	}
	console.log('after')
	reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
	gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

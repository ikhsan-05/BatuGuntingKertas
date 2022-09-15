
const imgPCom = document.querySelector('.musuh img');
function getPCom(){
	let pil = Math.floor(Math.random()*3);
	if(pil == 0) return 'batu';
	if(pil == 1) return 'gunting';
	if(pil == 2) return 'kertas';
}

function getHasil(pCom, pPlay){
	if(pCom == pPlay) return 'seri';
	if(pCom == 'batu') return ((pPlay == 'kertas') ? 'menang' : 'kalah');
	if(pCom == 'gunting') return ((pPlay == 'batu') ? 'menang' : 'kalah');
	if(pCom == 'kertas') return ((pPlay == 'gunting') ? 'menang' : 'kalah');
}

const pPlayS = document.querySelectorAll('td img');
pPlayS.forEach( function(element){
	element.addEventListener('click',function(){
		const pCom = getPCom();
		imgPCom.setAttribute('src',`src/${pCom}.png`);
		const pPlay = element.getAttribute('id');
		const hasil = getHasil(pCom, pPlay);
		
		setInfo(hasil);
	});
});

const info = document.querySelector('.info');
function setInfo(hasil){
	const keterangan = info.querySelector('.keterangan');
	keterangan.innerHTML = hasil;
	if(hasil == 'menang'){
		const sPemain = info.querySelector('.sPemain');
		sPemain.innerHTML = `${Number(sPemain.innerHTML) + 1}`;
	}else if(hasil == 'kalah'){
		const sComp = info.querySelector('.sMusuh');
		sComp.innerHTML = `${Number(sComp.innerHTML) + 1}`;
	}
} 

// const button = document.getElementById('aa');
// const input = document.querySelector('input');

// function main(){
// 	const mass = document.querySelector('p.input');
// 	const keterangan = document.querySelector('#keterangan');
// 	mass.classList.add('warning');
// 	let pPlay = undefined;
// 	if(input.value != ''){
// 		let menang = undefined;
// 		pPlay = input.value.toUpperCase();
// 		input.value = '';
// 		if(pPlay == 'GUNTING' || pPlay == 'BATU' || pPlay == 'KERTAS'){
// 			// buat pilihan komputer
// 			let pCom = Math.random()*3;
// 			if(pCom < 1){
// 				pCom = 'GUNTING';
// 			}else if(pCom < 2){
// 				pCom = 'BATU';
// 			}else{
// 				pCom = 'KERTAS';
// 			}
		
// 			//logic membandingkan pPlay dan pCom
// 			if(pCom != pPlay){
// 				if(pCom == "BATU"){
// 					menang = (pPlay == "KERTAS") ? true : false;
// 				}else if(pCom == "KERTAS"){
// 					menang = (pPlay == "GUNTING") ? true : false;
// 				}else{
// 					menang = (pPlay == "BATU") ? true : false;
// 				}
// 			}

// 			//Tambah Skore
// 			if(menang === true){
// 				const sPlay = document.querySelector('tr td.sPlay');
// 				sPlay.innerHTML = `${Number(sPlay.innerHTML)+1}`;
// 				keterangan.innerHTML = 'MENANG komputer memilih '+pCom;
// 			}else if(menang === false){
// 				const sCom = document.querySelector('tr td.sCom');
// 				sCom.innerHTML = `${Number(sCom.innerHTML)+1}`;
// 				keterangan.innerHTML = 'KALAH komputer memilih '+pCom;
// 			}else if(menang === undefined){
// 				keterangan.innerHTML = 'SERI komputer memilih '+pCom;
// 			}

// 		}else{
// 			mass.innerHTML = "Warning : Input Salah!";
// 			mass.classList.remove('warning');
// 		}
// 	}else{
// 		mass.innerHTML = "Warning : Input Kosong!";
// 		mass.classList.remove('warning');
// 	}
// }

// //input yang dipilih
// button.addEventListener("click", main);

document.body.addEventListener('click',function(){

});


const pCom = document.querySelector('.musuh img')
function randomPCom(){
	let pil = Math.floor(Math.random()*3);
	if(pil == 0){
		pCom.setAttribute('src', 'src/batu.png')
	}else if(pil == 1){
		pCom.setAttribute('src', 'src/kertas.png')
	}else if(pilih == 2){
		pCom.setAttribute('src', 'src/gunting.png')
	}
}
randomPCom();
document.body.addEventListener('click',randomPCom)

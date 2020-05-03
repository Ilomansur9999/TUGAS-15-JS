function panjangAC() {
	var ab = 8;
	var bc = 6;

	console.log('Nilai AB :', ab);
	console.log('Nilai BC :', bc);


	ab = Math.pow(ab,2);
	bc = Math.pow(bc,2);

	ac = ab + bc;


	console.log('Panjang sisi AC pada segitiga siku-siku tersebut adalah :', Math.sqrt(ac), 'cm')

}

panjangAC();

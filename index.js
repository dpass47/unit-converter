const inputNum = document.querySelector(".input-num");
const literConvert = document.querySelector(".liter-convert");
const meterConvert = document.querySelector(".meter-convert");
const kgConvert = document.querySelector(".kg-convert");

function weightConvert() {
	const kgWeight = inputNum.value / 2.204623;
	const lbWeight = 2.204623 * inputNum.value;
	if (inputNum.value === "1") {
		kgConvert.innerHTML = `${inputNum.value} kilo = ${lbWeight.toFixed(
			3
		)} pounds | ${inputNum.value} pound = ${kgWeight.toFixed(3)} kilos`;
	} else {
		kgConvert.innerHTML = `${inputNum.value} kilos = ${lbWeight.toFixed(
			3
		)} pounds | ${inputNum.value} pounds = ${kgWeight.toFixed(3)} kilos`;
	}
}

function lengthConvert() {
	const meterLength = inputNum.value / 3.28084;
	const feetLength = inputNum.value * 3.28084;
	if (inputNum.value === "1") {
		meterConvert.innerHTML = `${inputNum.value} meter = ${feetLength.toFixed(
			3
		)} feet | ${inputNum.value} foot = ${meterLength.toFixed(3)} meters`;
	} else {
		meterConvert.innerHTML = `${inputNum.value} meters = ${feetLength.toFixed(
			3
		)} feet | ${inputNum.value} feet = ${meterLength.toFixed(3)} meters`;
	}
}

function liquidConvert() {
	const literVolume = inputNum.value * 3.785411784;
	const galVolume = 0.2641720524 * inputNum.value;
	if (inputNum.value === "1") {
		literConvert.innerHTML = `${inputNum.value} liter = ${galVolume.toFixed(
			3
		)} gallons | ${inputNum.value} gallon = ${literVolume.toFixed(3)} liters`;
	} else {
		literConvert.innerHTML = `${inputNum.value} liters = ${galVolume.toFixed(
			3
		)} gallons | ${inputNum.value} gallons = ${literVolume.toFixed(3)} liters`;
	}
}

inputNum.addEventListener("focus", function () {
	inputNum.value = "";
});

inputNum.addEventListener("change", function () {
	weightConvert();
	lengthConvert();
	liquidConvert();
});

inputNum.addEventListener("blur", function () {
	if (inputNum.value === "") {
		inputNum.value = 0;
		weightConvert();
		liquidConvert();
		lengthConvert();
	}
});

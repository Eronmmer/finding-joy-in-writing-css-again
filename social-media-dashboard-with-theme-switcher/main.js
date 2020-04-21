if (!localStorage.getItem("theme")) {
	localStorage.setItem("theme", "light");
	console.log("fuck");
}

// elements and theme gymnastics
const toggler = document.querySelector(".mood-change__toggler");
const innerToggler = document.querySelector(".mood-change__inner-toggler");
const moodChangeText = document.querySelector(".mood-change__text");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const lightTexts = document.querySelectorAll(".light-text");
const topBg = document.querySelector(".top-bg");

const setDarkModeStyles = () => {
	localStorage.setItem("theme", "dark");
	moodChangeText.textContent = "Light Mode";
	toggler.classList.add("mood-change__toggler--dark");
	innerToggler.classList.add("mood-change__inner-toggler--dark");
	body.classList.add("body--dark");
	cards.forEach((card) => {
		card.classList.add("card--dark");
	});
	lightTexts.forEach((text) => {
		text.classList.add("light-text--dark");
	});
	topBg.classList.add("top-bg--dark");
};

const setLightModeStyles = () => {
	localStorage.setItem("theme", "light");
	moodChangeText.textContent = "Dark Mode";
	toggler.classList.remove("mood-change__toggler--dark");
	innerToggler.classList.remove("mood-change__inner-toggler--dark");
	body.classList.remove("body--dark");
	cards.forEach((card) => {
		card.classList.remove("card--dark");
	});
	lightTexts.forEach((text) => {
		text.classList.remove("light-text--dark");
	});
	topBg.classList.remove("top-bg--dark");
};

const setTransitions = () => {
	toggler.classList.add("set-transition");
	innerToggler.classList.add("set-transition");
	body.classList.add("set-transition");
	cards.forEach((card) => {
		card.classList.add("set-transition");
	});
	lightTexts.forEach((text) => {
		text.classList.add("set-transition");
	});
	topBg.classList.add("set-transition");
};

toggler.addEventListener("click", () => {
	if (localStorage.getItem("theme") === "light") {
		setDarkModeStyles();
		setTransitions();
	} else {
		setLightModeStyles();
		setTransitions();
	}
});

const theme = localStorage.getItem("theme");
if (theme === "dark") {
	setDarkModeStyles();
} else {
	setLightModeStyles();
}

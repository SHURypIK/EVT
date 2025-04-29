const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme;
if (isDarkTheme) {
	theme = 'dark-mode';
} else {
	theme = 'light-mode';
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', e => {
	if (e.matches) {
		theme = 'dark-mode';
	} else {
		theme = 'light-mode';
	}
});
//---------------------------------Карусель-------------------------------------------------//
function carousel() {
	const wrapper = document.querySelector('.wrapper-reviews');
	const computedStyles = window.getComputedStyle(wrapper);
	const gap = parseFloat(computedStyles.gap);

	const card = document.querySelector('.review-card');
	const computedStylesCard = window.getComputedStyle(card);
	const cardWidth = parseFloat(computedStylesCard.width);

	const reviews = document.querySelector('.article-reviews');
	const reviewsWidth = reviews.offsetWidth;

	const minReviewIndex = 0;
	const maxReviewIndex = Math.floor(
		(gap * 5 + cardWidth * 6 - reviewsWidth) / cardWidth
	);
	const movement = (gap * 5 + cardWidth * 6 - reviewsWidth) / maxReviewIndex;

	let index = 0;

	const leftBtn = document.getElementById('left-control');
	const rightBtn = document.getElementById('right-control');
	rightBtn.addEventListener('click', () => {
		index++;
		slideChange(index);
	});
	leftBtn.addEventListener('click', () => {
		index--;
		slideChange(index);
	});

	function slideChange(index) {
		document.querySelector('.wrapper-reviews').style.transform = `translateX(-${
			index * movement
		}px)`;
		leftBtn.disabled = index <= minReviewIndex;
		rightBtn.disabled = index >= maxReviewIndex;
	}

	slideChange(index);
}
carousel();
//------------------------------------------------------------------------------------//

//--------------------------------------Input-focus-----------------------------------//
function inputFocus() {
	const inputFields = document.querySelectorAll('.div-input-field');

	inputFields.forEach(field => {
		const input = field.querySelector('input');
		field.addEventListener('click', () => {
			input.focus();
		});
	});
}
inputFocus();
//------------------------------------------------------------------------------------//

//--------------------------Input-img-form and button-form----------------------------//
function inputImgAndButtonForm() {
	const nameInput = document.getElementById('name');
	const phoneInput = document.getElementById('phone');
	const emailInput = document.getElementById('email');

	const nameIcon = document.getElementById('img-name');
	const phoneIcon = document.getElementById('img-phone');
	const emailIcon = document.getElementById('img-mail');

	const submitButton = document.getElementById('submit');

	const modal = document.getElementById('modal');
	const modalMessage = document.getElementById('modal-message');

	submitButton.addEventListener('click', function () {
		modal.style.display = 'flex';
		document.body.style.overflow = 'hidden';
		modalMessage.style.display = 'block';
	});

	function checkForm() {
		if (
			nameInput.value.trim() !== '' &&
			phoneInput.value.trim() !== '' &&
			emailInput.value.trim() !== ''
		) {
			submitButton.disabled = false;
		} else {
			submitButton.disabled = true;
		}
	}

	nameInput.addEventListener('input', checkForm);
	nameInput.addEventListener('focus', function () {
		nameIcon.src = `images/${theme}/form/fill-active/user.svg`;
	});
	nameInput.addEventListener('blur', function () {
		if (nameInput.value.trim() === '') {
			nameIcon.src = `images/common/form-empty/user.svg`;
			nameInput.value = '';
		}
	});

	phoneInput.addEventListener('input', checkForm);
	phoneInput.addEventListener('focus', function () {
		phoneIcon.src = `images/${theme}/form/fill-active/phone.svg`;
	});
	phoneInput.addEventListener('blur', function () {
		if (phoneInput.value.trim() === '') {
			phoneIcon.src = 'images/common/form-empty/phone.svg';
			phoneInput.value = '';
		}
	});

	emailInput.addEventListener('input', checkForm);
	emailInput.addEventListener('focus', function () {
		emailIcon.src = `images/${theme}/form/fill-active/mail.svg`;
	});
	emailInput.addEventListener('blur', function () {
		if (emailInput.value.trim() === '') {
			emailIcon.src = 'images/common/form-empty/mail.svg';
			emailInput.value = '';
		}
	});
}
inputImgAndButtonForm();
//------------------------------------------------------------------------------------//

//--------------------Input-img-modal-form and button-modal-form----------------------//
function inputImgAndButtonModalForm() {
	const modalNameInput = document.getElementById('modal-name');
	const modalPhoneInput = document.getElementById('modal-phone');
	const modalEmailInput = document.getElementById('modal-email');

	const modalNameIcon = document.getElementById('img-modal-name');
	const modalPhoneIcon = document.getElementById('img-modal-phone');
	const modalEmailIcon = document.getElementById('img-modal-mail');

	const modalSubmitButton = document.getElementById('modal-submit');
	const modalForm = document.getElementById('modal-form');
	const modalMessage = document.getElementById('modal-message');

	modalSubmitButton.addEventListener('click', function () {
		modalForm.style.display = 'none';
		modalMessage.style.display = 'block';
	});

	function checkForm() {
		if (
			modalNameInput.value.trim() !== '' &&
			modalPhoneInput.value.trim() !== '' &&
			modalEmailInput.value.trim() !== ''
		) {
			modalSubmitButton.disabled = false;
		} else {
			modalSubmitButton.disabled = true;
		}
	}

	modalNameInput.addEventListener('input', checkForm);
	modalNameInput.addEventListener('focus', function () {
		modalNameIcon.src = `images/${theme}/form/fill-active/user.svg`;
	});
	modalNameInput.addEventListener('blur', function () {
		if (modalNameInput.value.trim() === '') {
			modalNameIcon.src = 'images/common/form-empty/user.svg';
			modalNameInput.value = '';
		}
	});

	modalPhoneInput.addEventListener('input', checkForm);
	modalPhoneInput.addEventListener('focus', function () {
		modalPhoneIcon.src = `images/${theme}/form/fill-active/phone.svg`;
	});
	modalPhoneInput.addEventListener('blur', function () {
		if (modalPhoneInput.value.trim() === '') {
			modalPhoneIcon.src = 'images/common/form-empty/phone.svg';
			modalPhoneInput.value = '';
		}
	});

	modalEmailInput.addEventListener('input', checkForm);
	modalEmailInput.addEventListener('focus', function () {
		modalEmailIcon.src = `images/${theme}/form/fill-active/mail.svg`;
	});
	modalEmailInput.addEventListener('blur', function () {
		if (modalEmailInput.value.trim() === '') {
			modalEmailIcon.src = 'images/common/form-empty/mail.svg';
			modalEmailInput.value = '';
		}
	});
}
inputImgAndButtonModalForm();
//------------------------------------------------------------------------------------//

//------------------------------Button-target-action and close-modal----------------------------------//
function buttonTargetActionAndCloseModal() {
	const button = document.getElementById('target-action');
	const modal = document.getElementById('modal');
	const span = document.getElementById('close-modal');

	const modalForm = document.getElementById('modal-form');
	const modalMessage = document.getElementById('modal-message');

	button.addEventListener('click', function () {
		modal.style.display = 'flex';
		document.body.style.overflow = 'hidden';
		modalForm.style.display = 'flex';
	});

	span.addEventListener('click', function () {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
		modalForm.style.display = 'none';
		modalMessage.style.display = 'none';
		cleanModalForm();
		cleanForm();
	});

	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
			modalForm.style.display = 'none';
			modalMessage.style.display = 'none';
			cleanModalForm();
			cleanForm();
		}
	});
}
buttonTargetActionAndCloseModal();
//------------------------------------------------------------------------------------//

function cleanModalForm() {
	const modalNameInput = document.getElementById('modal-name');
	const modalPhoneInput = document.getElementById('modal-phone');
	const modalEmailInput = document.getElementById('modal-email');

	const modalNameIcon = document.getElementById('img-modal-name');
	const modalPhoneIcon = document.getElementById('img-modal-phone');
	const modalEmailIcon = document.getElementById('img-modal-mail');

	const modalSubmitButton = document.getElementById('modal-submit');

	modalSubmitButton.disabled = true;
	modalNameInput.value = '';
	modalPhoneInput.value = '';
	modalEmailInput.value = '';

	modalNameIcon.src = 'images/common/form-empty/user.svg';
	modalPhoneIcon.src = 'images/common/form-empty/phone.svg';
	modalEmailIcon.src = 'images/common/form-empty/mail.svg';
}

function cleanForm() {
	const nameInput = document.getElementById('name');
	const phoneInput = document.getElementById('phone');
	const emailInput = document.getElementById('email');

	const nameIcon = document.getElementById('img-name');
	const phoneIcon = document.getElementById('img-phone');
	const emailIcon = document.getElementById('img-mail');

	const submitButton = document.getElementById('submit');

	submitButton.disabled = true;
	nameInput.value = '';
	phoneInput.value = '';
	emailInput.value = '';

	nameIcon.src = 'images/common/form-empty/user.svg';
	phoneIcon.src = 'images/common/form-empty/phone.svg';
	emailIcon.src = 'images/common/form-empty/mail.svg';
}

function burger() {
	const burgerImg = document.getElementById('burger');
	const source = document.querySelector('.burger-picture source');
	const nav = document.getElementById('nav');
	let active = false;

	burgerImg.addEventListener('click', () => {
		active = !active;
		if (active) {
			burgerImg.src = `images/${theme}/form/Group.svg`;
			source.srcset = `images/${theme}/form/Group.svg`;
			burgerImg.classList.replace('.burger-img', '.burger-img-close');
			nav.style.display = 'flex';
		} else {
			burgerImg.src = `images/${theme}/burger.svg`;
			source.srcset = `images/${theme}/burger.svg`;
			burgerImg.classList.replace('.burger-img-close', '.burger-img');
			nav.style.display = 'none';
		}
	});
}

burger();

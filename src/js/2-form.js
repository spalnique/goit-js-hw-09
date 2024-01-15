const feedback = document.querySelector('.feedback-form');
const email = feedback.elements.email;
const message = feedback.elements.message;
const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'))
	? JSON.parse(localStorage.getItem('feedback-form-state'))
	: '';

email.value = parsedData ? parsedData.email : '';
message.value = parsedData ? parsedData.message : '';

email.addEventListener('focus', () => {
	if (!email.getAttribute('style')) {
		return;
	}
	email.removeAttribute('style');
	email.removeAttribute('placeholder');
});

message.addEventListener('focus', () => {
	if (!message.getAttribute('style')) {
		return;
	}
	message.removeAttribute('style');
	message.removeAttribute('placeholder');
});

feedback.addEventListener('input', () => {
	localStorage.setItem(
		'feedback-form-state',
		JSON.stringify({
			email: email.value.trim(),
			message: message.value.trim(),
		}),
	);
});

feedback.addEventListener('submit', (e) => {
	if (!email.value) {
		e.preventDefault();
		email.setAttribute('style', 'border-color: tomato');
		email.setAttribute('placeholder', 'E-mail is required to proceed');
		return;
	}
	if (!message.value) {
		e.preventDefault();
		message.setAttribute('style', 'border-color: tomato');
		message.setAttribute('placeholder', 'Message is required to proceed');
		return;
	}
	e.preventDefault();
	console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
	localStorage.clear(); // або .removeItem('feedback-form-state'), якщо хочемо тільки цей ключ видалити
	feedback.reset();
});

document.addEventListener(
	'DOMContentLoaded',
	() => {
		document.body.classList.add('visible');
	},
	{ once: true },
);

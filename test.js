
var userEmails = [
	'nickdeckerdevs@gmail.com',
	'6studiozero@gmail.com'
];


function makeUserSuperAdmin(email) {
	return Promise.resolve()
	.then(() => {
		window.setTimeout(() => {
			document.querySelector('#create-user-button').click();
			resolve('create user')
		}, 1000);
	})
	.then(() => {
		window.setTimeout(() => {
			let emailInput = document.querySelector('.form-control.user-detail-inputs');
			emailInput.select();
			emailInput.value = email;
			emailInput.dispatchEvent(new Event('input', {bubbles: true}));
			resolve('input email')
		}, 1000);
	})
	.then(() => {
		window.setTimeout(() => {
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').classList.remove('disabled')
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').classList.remove('private-button--disabled')
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').setAttribute('aria-disabled', false);
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').click();
			resolve('click next after email')
		}, 2000);
	})
	.then(() => {
		window.setTimeout(() => {
			document.querySelector('[data-test-id="action-dropdown"]').click();
			resolve('activate dropdown')
		}, 2000);
	})
	.then(() => {
		window.setTimeout(() => {
			document.querySelector('[data-test-id="make-super-admin"]').click();
			resolve('click make super admin')

		}, 2000);
	})
	.then(() => {
		window.setTimeout(() => {
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').click();
			resolve('')
		}, 2000);
	})
	.then(() => {
		window.setTimeout(() => {
			debugger;
			document.querySelector('.private-wizard__footer.private-modal__footer .private-button--primary').click();
		}, 5000);
	})
	.then(() => {
		window.setTimeout(() => {
			debugger;
			document.querySelector('.form-control.private-form__control.private-search-control__input').select().focus();

		}, 10000)
	});
}

async createUsers () => {
	// const = await makeUserSuperAdmin(email)
	for(let email of userEmails) {
		const
	}
}


// const createUsers = async () => {
// 	await asyncForEach
// }

// async function asyncForEach(emails, callback) {
//
// }
for(let i = 0; i < userEmails.length; i++) {
	makeUserSuperAdmin(userEmails[i]);
}

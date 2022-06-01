// START: TAB FUNCTIONS
const tabs = document.querySelectorAll('[data-tab]')
const tabContents = document.querySelectorAll('.tab__content')

tabs.forEach(item => {
	item.addEventListener('click', () => {
		const selector = item.getAttribute('data-tab')
		tabs.forEach(tab => {
			tab.getAttribute('data-tab') !== selector
				? tab.classList.remove('tab__item--active')
				: tab.classList.add('tab__item--active')
		})
		tabContents.forEach(tabContent => {
			tabContent.getAttribute('id') !== selector
				? tabContent.classList.remove('tab__content--active')
				: tabContent.classList.add('tab__content--active')
		})
	})
})
// END: TAB FUNCTIONS

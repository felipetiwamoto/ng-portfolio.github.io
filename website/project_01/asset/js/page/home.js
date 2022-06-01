;(async () => {
	const planRadios = document.querySelectorAll('.price .price__radio')

	if (planRadios) {
		activePlanTab('plan__basic')

		planRadios.forEach(item => {
			item.addEventListener('click', () => {
				activePlanTab(item.getAttribute('value'))
			})
		})

		function activePlanTab(dataTabSelector) {
			const planTabs = document.querySelectorAll('.price .price__tab__item')

			if (planTabs) {
				planTabs.forEach(item => item.classList.remove(`price__tab__item--active`))
				const activePlanTab = document.querySelector(`.price .price__tab__item[data-tab="${dataTabSelector}"]`)
				activePlanTab.classList.add(`price__tab__item--active`)
			}
		}
	}
})()

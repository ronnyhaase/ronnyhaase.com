function debounce(fn, wait) {
	let t
	return function () {
		clearTimeout(t)
		t = setTimeout(() => fn.apply(this, arguments), wait)
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// Run animations
	document.querySelectorAll(".animate-paused").forEach((el) => {
		el.style.willChange = "transform, opacity"
		el.classList.toggle("opacity-0")
		el.classList.remove("animate-direction-reverse")
		el.classList.remove("animate-paused")
		el.classList.add("animate-running")
	})
	setTimeout(
		() =>
			document
				.querySelectorAll(".animate-running")
				.forEach((el) => (el.style.willChange = "auto")),
		2000,
	)

	// Smooth scroll
	const samePageAnchorElements = document.querySelectorAll('a[href^="#"]')
	samePageAnchorElements.forEach((el) =>
		el.addEventListener("click", (ev) => {
			ev.preventDefault()

			const scrollTarget = document.querySelector(
				ev.currentTarget.getAttribute("href"),
			)
			const top = scrollTarget.getBoundingClientRect().top + window.scrollY
			window.scrollTo({ top, behavior: "smooth" })
		}),
	)

	// Blur intro on scroll
	const updateParallaxEffect = () => {
		const currentScrollY = window.scrollY
		const maxScrollY = document.body.clientHeight
		const relativeScrollY = Math.max(0, currentScrollY / maxScrollY)
		document.getElementById("intro").style.filter =
			`blur(${relativeScrollY * 5}px)`
	}
	document.addEventListener(
		"scroll",
		debounce((ev) => {
			updateParallaxEffect()
		}, 1),
	)
})

function debounce (fn, wait) {
  let t
  return function () {
    clearTimeout(t)
    t = setTimeout(() => fn.apply(this, arguments), wait)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupTracking()
  setupSmoothScroll()
  setupParallax()
  runAnimations()
})

function setupParallax () {
  const updateParallaxEffect = () => {
    const currentScrollY = window.scrollY
    const maxScrollY = document.body.clientHeight
    const relativeScrollY = Math.max(0, 1 - (currentScrollY / maxScrollY))
    document.getElementById('intro').style.transform = `scale(${relativeScrollY}, ${relativeScrollY})`
  }

  document.addEventListener('scroll', debounce(ev => {
    updateParallaxEffect()
  }, 1))
}

function setupSmoothScroll() {
  const samePageAnchorElements = document.querySelectorAll('a[href^="#"]')
  samePageAnchorElements.forEach(el => el.addEventListener('click', ev => {
    ev.preventDefault()

    const scrollTarget = document.querySelector(
      ev.currentTarget.getAttribute('href')
    )
    const top = scrollTarget.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }))
}

function runAnimations() {
  document.querySelectorAll('#intro .Animation').forEach(el => {
    el.classList.add('running')
  })
}

function setupTracking () {
  const trackingElements = document.querySelectorAll('[data-analytics]')
  trackingElements.forEach(el => el.addEventListener('click', handleTrackingClick))
}

const noop = () => undefined
const preventRepeatedCall = (fn) => {
  let handled = false
  return () => {
    if (!handled) {
      handled = true
      fn()
    }
  }
}
const isAnchorElement = (el) => el.tagName === 'A'
const getAnalyticsData = (el) => {
  try {
    return JSON.parse(el.getAttribute('data-analytics'))
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null
    } else {
      throw error
    }
  }
}
const createAnchorCallback = (el) => () => location.href = el.getAttribute('href')

function trackEvent(trackingData, callback) {
  const protectedCallback = preventRepeatedCall(callback)

  // Fallback - Plausible not guarantees callback to be called
  setTimeout(protectedCallback, 1000)

  plausible(trackingData.goal, {
    protectedCallback,
    props: trackingData.props,
  })
}

function handleTrackingClick(ev) {
  const targetEl = ev.currentTarget
  const isTargetAnchorElement = isAnchorElement(targetEl)
  const trackingData = getAnalyticsData(targetEl)

  if (!trackingData) {
    return
  }

  if (isTargetAnchorElement) {
    ev.preventDefault()
  }

  trackEvent(trackingData, isTargetAnchorElement ? createAnchorCallback(targetEl) : noop)
}

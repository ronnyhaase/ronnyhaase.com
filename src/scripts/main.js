document.addEventListener("DOMContentLoaded", function () {
  setupTracking()
  runAnimations()
});

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
const preventRepeatedCall = fn => {
  let handled = false
  return () => {
    if (!handled) {
      handled = true
      fn()
    }
  }
}
const isAnchorElement = el => el.tagName === 'A'
const getAnalyticsData = el => {
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
const createAnchorCallback = el => () => location.href = el.getAttribute('href')

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

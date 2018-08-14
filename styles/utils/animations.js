/**
 * Provides styled-components utilities for CSS animation properties
 */
import { style, compose } from 'styled-system'

const animation = style({
  prop: 'animation'
})

const animationName = style({
  prop: 'animationName'
})

const animationDuration = style({
  prop: 'animationDuration'
})

const animationTimingFunction = style({
  prop: 'animationTimingFunction'
})

const animationDelay = style({
  prop: 'animationDelay'
})

const animationIterationCount = style({
  prop: 'animationIterationCount'
})

const animationDirection = style({
  prop: 'animationDirection'
})

const animationFillMode = style({
  prop: 'animationFillMode'
})

const animationPlayState = style({
  prop: 'animationPlayState'
})

const animations = compose(
  animation,
  animationName,
  animationDelay,
  animationDirection,
  animationDuration,
  animationFillMode,
  animationIterationCount,
  animationPlayState,
  animationTimingFunction
)

export {
  animation,
  animationDelay,
  animationDirection,
  animationDuration,
  animationFillMode,
  animationIterationCount,
  animationName,
  animationPlayState,
  animationTimingFunction,
  animations
}

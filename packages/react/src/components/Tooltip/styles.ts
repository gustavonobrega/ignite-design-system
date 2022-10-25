import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const TooltipProvider = styled(Tooltip.TooltipProvider, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  '&[data-state="closed"]': {
    animation: `${fadeOut} 200ms ease-out`,
  },
  '&[data-state="delayed-open"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  padding: '$3 $4',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: 'gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

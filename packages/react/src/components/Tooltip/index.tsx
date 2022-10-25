import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  content: string
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent side="top">
            <Text size="sm">{content}</Text>

            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'

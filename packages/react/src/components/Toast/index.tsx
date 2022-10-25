import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  ToastProvider,
  ToastRoot,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>
        <ToastClose asChild>{<X size={20} />}</ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'

import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  zIndex: 1,
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  width: '$80',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  gap: 4,
  alignItems: 'self-start',
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastAction = styled(Toast.Action, {})

export const ToastClose = styled(Toast.Close, {
  gridArea: 'action',
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
})

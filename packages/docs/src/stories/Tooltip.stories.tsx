import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Text size="md">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>
    ),
    content: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            height: '$40',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

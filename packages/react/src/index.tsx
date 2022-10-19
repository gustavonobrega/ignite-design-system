import { styled } from './styles'

const Heading = styled('h1', {
  fontFamily: '$default',
  fontSize: '$2xl',
})

export function App() {
  return (
    <div>
      <Heading>Hello world</Heading>
    </div>
  )
}

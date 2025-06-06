import type { Meta, StoryObj } from '@storybook/react'
import Button from '../Button'
const meta: Meta<typeof Button> = {
  title: 'Componentes/Button',
  component: Button
}
export default meta
type Story = StoryObj<typeof Button>
export const Numero: Story = {
  args: {
    value: '7',
    onClick: () => {}
  }
}
export const Operador: Story = {
  args: {
    value: '+',
    onClick: () => {}
  }
}

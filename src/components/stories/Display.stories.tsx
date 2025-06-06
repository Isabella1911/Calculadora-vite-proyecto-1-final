import type { Meta, StoryObj } from '@storybook/react'

import Display from '../Display'

const meta: Meta<typeof Display> = {
  title: 'Componentes/Display',
  component: Display
}
export default meta
type Story = StoryObj<typeof Display>
export const Vacio: Story = {
  args: {
    value: ''
  }
}
export const Error: Story = {
  args: {
    value: 'ERROR'
  }
}

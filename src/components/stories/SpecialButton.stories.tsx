import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botones Especiales',
  component: Button
}
export default meta
type Story = StoryObj<typeof Button>

export const Porcentaje: Story = {
  args: {
    value: '%',
    onClick: () => {}
  }
}
export const CambioDeSigno: Story = {
  args: {
    value: '+/-',
    onClick: () => {}
  }
}

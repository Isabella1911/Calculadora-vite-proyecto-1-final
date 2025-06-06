import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botón Igual',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Igual: Story = {
  args: {
    value: '=',
    onClick: () => alert('Botón igual presionado')
  }
}

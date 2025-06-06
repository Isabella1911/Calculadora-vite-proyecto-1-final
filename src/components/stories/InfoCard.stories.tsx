import type { Meta, StoryObj } from '@storybook/react'

import InfoCard from '../InfoCard'

const meta: Meta<typeof InfoCard> = {
  title: 'Componentes/InfoCard',
  component: InfoCard
}

export default meta

type Story = StoryObj<typeof InfoCard>

export const Default: Story = {
  args: {}
}

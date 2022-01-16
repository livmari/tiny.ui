import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../src/Button/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Click me!',
    },
  },
}

export default meta

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />

export const Solid = ButtonTemplate.bind({})
export const Muted = ButtonTemplate.bind({})
export const Outlined = ButtonTemplate.bind({})
export const Text = ButtonTemplate.bind({})

Solid.args = {
  variant: 'solid',
  children: 'Click me!',
  size: 'base',
}

Muted.args = {
  variant: 'muted',
  children: 'Click me!',
  size: 'base',
}

Outlined.args = {
  variant: 'outlined',
  children: 'Click me!',
  size: 'base',
}

Text.args = {
  variant: 'text',
  children: 'Click me!',
  size: 'base',
}

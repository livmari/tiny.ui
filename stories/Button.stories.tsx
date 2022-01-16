import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../src/Button/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
}

export default meta

export const Solid: Story<ButtonProps> = (args) => <Button {...args} />

Solid.args = {
  variant: 'solid',
  children: 'Click me!',
  size: 'base',
}

export const Muted: Story<ButtonProps> = (args) => <Button {...args} />

Muted.args = {
  variant: 'muted',
  children: 'Click me!',
  size: 'base',
}

export const Outlined: Story<ButtonProps> = (args) => <Button {...args} />

Outlined.args = {
  variant: 'outlined',
  children: 'Click me!',
  size: 'base',
}

export const Text: Story<ButtonProps> = (args) => <Button {...args} />

Text.args = {
  variant: 'text',
  children: 'Click me!',
  size: 'base',
}

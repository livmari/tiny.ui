import React, { HTMLAttributes, ReactNode } from 'react'
import type { FunctionComponent } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'solid' | 'muted' | 'outlined' | 'text'
  size: 'small' | 'base' | 'large'
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>
}

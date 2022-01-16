import React, { HTMLAttributes, ReactNode } from 'react'
import type { FunctionComponent } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'solid' | 'muted' | 'outlined' | 'text'
  size: 'small' | 'base' | 'large'
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'solid',
  size = 'base',
}) => {
  // TODO: replace with tailwindcss
  const buttonStyles = {
    padding: '.25em .45em',
    fontSize:
      size === 'small' ? '0.875rem' : size === 'base' ? '1rem' : '1.125rem',
    fontWeight: '500',
    letterSpacing: '0.0025rem',
    color: variant === 'solid' ? 'white' : 'mediumpurple',
    background:
      variant === 'solid'
        ? 'mediumpurple'
        : variant === 'muted'
        ? 'lavender'
        : variant === ('outlined' || 'text')
        ? 'transparent'
        : 'transparent',
    borderRadius: '.375rem',
    borderWidth: '.125rem',
    borderStyle: 'solid',
    borderColor:
      variant === 'text'
        ? 'transparent'
        : variant === 'muted'
        ? 'lavender'
        : 'mediumpurple',
  }

  return <button style={buttonStyles}>{children}</button>
}

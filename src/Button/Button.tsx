import React, { HTMLAttributes, ReactNode } from 'react'
import type { FunctionComponent } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** The button label goes here. */
  children: ReactNode

  /** The different style types of the button. */
  variant: 'solid' | 'muted' | 'outlined' | 'text'

  /** The size of the button and its children. */
  size: 'small' | 'base' | 'large'
}

/** The main ui button component. */
export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'solid',
  size = 'base',
}) => {
  const primaryColor = {
    soft: '#e0e7ff',
    light: '#a5b4fc',
    default: '#4f46e5',
    dark: '#4338ca',
    darkest: '#312e81',
  }

  // TODO: replace with tailwindcss
  const buttonStyles = {
    padding: '.4em .8em',
    fontSize:
      size === 'small' ? '0.875rem' : size === 'base' ? '1rem' : '1.125rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    lineHeight: '1.25rem',
    color: variant === 'solid' ? 'white' : primaryColor.default,
    background:
      variant === 'solid'
        ? primaryColor.default
        : variant === 'muted'
        ? primaryColor.soft
        : variant === ('outlined' || 'text')
        ? 'transparent'
        : 'transparent',
    borderRadius: '.5rem',
    borderWidth: '.125rem',
    borderStyle: 'solid',
    borderColor:
      variant === 'text'
        ? 'transparent'
        : variant === 'muted'
        ? primaryColor.soft
        : primaryColor.default,
  }

  return <button style={buttonStyles}>{children}</button>
}

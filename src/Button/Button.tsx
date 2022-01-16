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
  // TODO: replace with tailwindcss
  /*
  const buttonStyles = {
    padding: '.4em .8em',
    lineHeight: '1.25rem',
    color: variant === 'solid' ? 'white' : primaryColor.default,

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
   */

  return (
    <button
      className={`${
        size === 'small' ? 'text-sm' : size === 'base' ? 'text-base' : 'text-lg'
      } ${
        // Sets background color
        variant === 'solid'
          ? 'bg-primary-600'
          : variant === 'muted'
          ? 'bg-primary-100'
          : variant === ('outlined' || 'text')
          ? 'bg-transparent'
          : 'bg-transparent'
      } ${variant === 'solid' ? 'text-white' : 'text-primary-600'} border-2 ${
        // Sets the border color
        variant === 'text'
          ? 'border-transparent'
          : variant === 'muted'
          ? 'border-primary-100'
          : 'border-primary-600'
      } font-medium tracking-wide rounded-lg`}
    >
      {children}
    </button>
  )
}

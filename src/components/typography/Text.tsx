import Typography, { TypographyProps } from '@mui/material/Typography'
import React from 'react'

interface TextProps extends TypographyProps {
  warn?: boolean
  success?: boolean
  error?: boolean
}

export const Text = ({ error, warn, success, ...rest }: TextProps) => {
  let color = '#aaa'
  if (error) color = '#990000'
  if (warn) color = '#a68813'
  if (success) color = 'green'

  return (
    <Typography
      color={color}
      lineHeight="15px"
      fontSize={14}
      mb={0}
      py={'3px'}
      {...rest}
    />
  )
}

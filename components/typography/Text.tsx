import Typography, { TypographyProps } from '@mui/material/Typography'
import React from 'react'

interface TextProps extends TypographyProps {
  warn?: boolean
  success?: boolean
}

export const Text = ({ warn, success, ...rest }: TextProps) => {
  let color = '#aaa'
  if (warn) color = '#990000'
  if (success) color = 'green'

  return <Typography color={color} fontSize={14} mb={0} {...rest} />
}

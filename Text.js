import React, { useContext } from 'react'
import { Text } from 'react-native'

import { ThemeContext } from './ThemeContext'

export default (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Text style={{ color: theme === 'light' ? '#000' : '#fff', ...props.style }} {...props}>
      {props.children}
    </Text>
  )
}

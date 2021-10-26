import React, { useContext } from 'react'

import Wrapper from './Wrapper'
import Text from './Text'
import { TouchableOpacity } from 'react-native'
import { ThemeContext } from './ThemeContext'

export default () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Text>Context Tutorial</Text>
      <TouchableOpacity
        style={{ marginVertical: 20 }}
        onPress={toggleTheme}
      >
        <Text>Switch Theme</Text>
      </TouchableOpacity>
    </Wrapper>
  )
}

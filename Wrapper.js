import React, { useContext } from 'react'
import { SafeAreaView, View, StatusBar, Platform } from 'react-native'

import { ThemeContext } from './ThemeContext'

export default ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
      {Platform.OS === 'ios' && <StatusBar barStyle={`${theme === 'light' ? 'dark' : 'light'}-content`} />}
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        {children}
      </View>
    </SafeAreaView>
  )
}

import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  onChangeTheme: () => {},
  onSavedVideo: () => {},
})

export default AppTheme

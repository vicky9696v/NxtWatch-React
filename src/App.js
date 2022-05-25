import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import AppTheme from './Context/context'

import NotFound from './components/NotFound'
import Login from './components/LoginRoute'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideosList from './components/SavedVideos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './protectedRoute'

// Replace your code here
class App extends Component {
  state = {
    activeTheme: 'light',
    savedVideos: [],
  }

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  addSavedVideos = async data => {
    const {savedVideos} = this.state
    this.setState(prev => ({savedVideos: [...prev.savedVideos, data]}))
    console.log(savedVideos)
    if (savedVideos.length > 0) {
      const checkSaved = savedVideos.filter(each => each.id === data.id)

      if (checkSaved.length === 0) {
        this.setState({savedVideos: [...savedVideos, data]})
      } else {
        this.setState({savedVideos: [...savedVideos, checkSaved]})
      }
    }
  }

  render() {
    const {activeTheme, savedVideos} = this.state

    return (
      <AppTheme.Provider
        value={{
          activeTheme,
          savedVideos,
          addSavedVideos: this.addSavedVideos,
          changeTheme: this.changeTheme,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosList}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/Trending" component={Trending} />

            <Route exact path="/not-found" component={NotFound} />

            <Redirect to="/not-found" />
          </Switch>
        </>
      </AppTheme.Provider>
    )
  }
}

export default App

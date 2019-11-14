import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import routes from './common/routes.js'
import { hot } from 'react-hot-loader/root'

const App = () => (<Router>
    {/* kick it all off with the App route */}
    {renderRoutes(routes)}
</Router>)
export default process.env.NODE_ENV === 'development' ? hot(App) : App

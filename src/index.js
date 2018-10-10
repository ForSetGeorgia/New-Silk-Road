import React from 'react'
import { render } from 'react-snapshot';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import App from './App'
import './index.css'

render(
  <Router><App /></Router>,
  document.getElementById('root')
)

serviceWorker.unregister()

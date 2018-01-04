import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import SZCard from '../src/components/SZCard'
import SZPieChart from '../src/components/SZPieChart'

ReactDOM.render(<SZPieChart />, document.getElementById('root'))
registerServiceWorker();

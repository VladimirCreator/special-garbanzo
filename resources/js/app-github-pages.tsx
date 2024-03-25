import React from 'react'
import ReactDOM from 'react-dom/client'

import '../css/app.css'
import Index from './Pages/Card/Index'

const main = document.querySelector('main#root') as HTMLElement
const root = ReactDOM.createRoot(main)

root.render(
	React.createElement(
		React.StrictMode, null, React.createElement(Index, { cards: [{ card_number: '0123456789012345', expiration_date: '26 / 01' }] })
	)
)

import PhoneInput from './components/PhoneInput/PhoneInput'

import './App.css'
import { useState } from 'react'
import Input from './components/Input/Input'
import Card, { CardHeader, CardContent, CardFooter } from './components/Card'
import Button from './components/Button'

function App() {
	const [value, setValue] = useState('')

	return (
		<div className='App'>
			<div>
				<PhoneInput value={value} onChange={(value) => setValue(value)} />
				<p>Value: {value}</p>
			</div>
			<Input />
			<Card>
				<CardHeader>My title</CardHeader>
				<CardContent>This is the content of this component</CardContent>
				<CardFooter>The footer</CardFooter>
			</Card>
			<Button onClick={() => console.log("clicked")}>My button</Button>
		</div>
	)
}

export default App

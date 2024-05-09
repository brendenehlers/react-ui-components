import PhoneInput from './components/PhoneInput/PhoneInput'

import './App.css'
import { useState } from 'react'
import Input from './components/Input/Input'
import Card, { CardHeader, CardContent, CardFooter } from './components/Card'

function App() {
	const [value, setValue] = useState('')

	const handleChange = (value: string) => {
		setValue(value)
	}

	return (
		<div className='App'>
			<PhoneInput value={value} onChange={handleChange} />
			<p>{value}</p>
			<Input />
			<Card>
				<CardHeader>My title</CardHeader>
				<CardContent>This is the content of this component</CardContent>
				<CardFooter>The footer</CardFooter>
			</Card>
		</div>
	)
}

export default App

import React from 'react'
import "./App.css"
import {Navbar,About, Home, Projects, Contact, Alert, Footer} from './components/index'
import { useInView } from 'react-intersection-observer'
const App = () => {
  const {ref:aboutref, inView:isvisible}= useInView();
  const { ref: navbarref, inView:down} = useInView();
  return (
		<>
			<Navbar visible={down}/>
			<Alert/>
			<Home ref={aboutref} visible={isvisible}/>
			<div ref={navbarref}><About />
			<Projects />
			<Contact/>
			<Footer/></div>
		</>
	);
}

export default App
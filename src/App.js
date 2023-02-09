import React from 'react'
import "./App.css"
import {Navbar,Education, About, Projects, Contact, Alert, Footer} from './components/index'
import { useInView } from 'react-intersection-observer'
const App = () => {
  const {ref:aboutref, inView:isvisible}= useInView();
  const { ref: navbarref, inView:down} = useInView();
  return (
		<>
			<Navbar visible={down}/>
			<Alert/>
			<About ref={aboutref} visible={isvisible}/>
			<div ref={navbarref}><Education  />
			<Projects />
			<Contact/></div>
			<Footer/>
		</>
	);
}

export default App
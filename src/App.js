import React from 'react'
import "./App.css"
import {Navbar,About, Home, Projects, Contact, Alert, Footer} from './components/index'
import { useInView } from 'react-intersection-observer'
const App = () => {
  const {ref:homeref, inView:isvisible}= useInView();
  const {ref:aboutIllRef, inView:aboutIllVisible}= useInView();
  const { ref: navbarref, inView:down} = useInView();
  const { ref: contactref, inView:contactVisible} = useInView();
  return (
		<>
			<Navbar aboutVisible={down} />
			<Alert />
			<Home ref={homeref} textVisible={isvisible} aboutVisible={down} />
			<div ref={navbarref}>
				<About ref={aboutIllRef} aboutIllVisible={aboutIllVisible}/>
				<Projects />
				<Contact ref={contactref} contactVisible={contactVisible} />
				<Footer />
			</div>
		</>
	);
}

export default App
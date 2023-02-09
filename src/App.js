import React from 'react'
import "./App.css"
import {Navbar,Education, About, Projects} from './components/index'
import { useInView } from 'react-intersection-observer'
const App = () => {
  const {ref:aboutref, inView:isvisible}= useInView();
  const { ref: navbarref, inView:down} = useInView();
  return (
		<>
			<Navbar visible={down}/>
			<About ref={aboutref} visible={isvisible}/>
			<Education ref={navbarref} />
			<Projects />
		</>
	);
}

export default App
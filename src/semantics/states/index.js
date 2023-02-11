import './index.css';
import Modal from '../../ui/modal/index.js'

import { useState } from 'react';

function States(props) {

  const [stateСhoice, setStateСhoice] = useState("");
  const [modal, setModal] = useState({show: false, src: "", alt: ""});
  const [states, setStates] = useState(props.user.data.states)

 	function onChoice(choice) {setStateСhoice(choice)}
  function toGo(value) {props.setEnter(value)}

  function onModal(event) {
		setModal({
	  	show: true,
	  	src: event.target.src,
	  	alt: event.target.alt
  	});
	}

	let screen;
	if (states) {
		let listGlobal, listLocal = false;
		if (states.globalStates?.length > 0) {
			listGlobal = states.globalStates.map( (name, index) =>
			  <img 
				  src={require(`../../images/globalStates/${name.src}.svg`).default} 
				  key={index} 
				  alt={name.alt}
				  onClick={(event) => onModal(event)} 
			  />
			)
		}

		if (states.localStates?.length > 0) {
			listLocal = states.localStates.map( (name, index) => 
			   <img 
				   src={require(`../../images/localStates/${name.src}.svg`).default} 
				   key={index} 
				   alt={name.alt}
				   onClick={(event) => onModal(event)} 
			   />
			)
		} 

		// state navigation
		if (stateСhoice === "Global") {
			screen = 			
				<>
		    	<h1>Крест</h1>
		    	{listGlobal}
		    	<button className="back-button" onClick={() => onChoice("")}></button>
	    	</>
		} else if (stateСhoice === "Local") {
			screen = 
				<>
		    	<h1>Ноша</h1>
		    	{listLocal}
		    	<button className="back-button" onClick={() => onChoice("")}></button>
	    	</>
		} else {
			screen =
				<>
		    	<h1>Бремя</h1>
			  	<ul>
			  		<li><button className="button" disabled={!listGlobal} onClick={() => onChoice("Global")}>Крест</button></li>
			  		<li><button className="button" disabled={!listLocal} onClick={() => onChoice("Local")}>Ноша</button></li>
			  	</ul>
			  	<button className="back-button" onClick={() => toGo("Menu")}></button>
	    	</>
		}
	} else {
		screen = <div className="spinner-wrapper">
							 <div className="spinner"></div>
						 </div>
	}

  return (
    <div className="states">
    	{screen}
    	<Modal modal={modal} setModal={setModal }/>
    </div>
  );
}

export default States;

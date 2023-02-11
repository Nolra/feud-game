import './index.css';
import Interface from '../../../../ui/interface/index.js'
import Modal from '../../../../ui/modal/index.js'
import gameAPI from '../../../../api/index.js'
import { useState, useEffect } from 'react';

function Situation(props) {
	const [situation, setSituation] = useState(props.save.situation.step)
	const [option, setOption] = useState(null)
  const [modal, setModal] = useState({show: false, src: "", alt: ""});
  const [situationDataEnd, setSituationDataEnd] = useState(props.save.situationDataEnd)
  const situationData = props.save.situation
  const postSaveObj = {}
  const userStates = props.user.data.states;

  useEffect(() => {
	  if (props.save.situation.step === "Final" && !situationDataEnd && props.save?.choice?.id) {
			changeSituation("Final", props.save?.choice?.id, true);
		}

	  if (props.save.situation.step === "End" && !situationDataEnd && props.save?.choice?.id) {
			changeSituation("End", props.save?.choice?.id, true);
		}


  }, []);

  async function changeSituation(action, id, dontSave) {
		if (action === "Final") {
			setOption(null);
			props.save.choice = {id}
			props.setSave(props.save);
			await gameAPI.getChoice(id).then((response) => 
				setSituationDataEnd(response.data),
			)
		}

		postSaveObj.step = action;
		postSaveObj.consequenceId = id;
		postSaveObj.entry = props.user.data.save.entry;
		postSaveObj.situationId = props.user.data.save.situation.id;

  	if (action === "End") {
			if (!dontSave) {
				props.save.karma = props.save.karma ?? 0
				props.save.karma += situationDataEnd?.karma ?? 0;
			  props.setSave(props.save)

			  if (situationDataEnd?.states?.dropState) {
			  	userStates.localStates
			  		.splice(userStates.localStates
			  			.findIndex(item => item.src === situationDataEnd.states.dropState.src), 1)
			  }

			  if (situationDataEnd?.states?.localState) {
			  	if (Array.isArray(situationDataEnd.states.localState)) {
			  		situationDataEnd.states.localState.map((item) => {
			  			userStates.localStates.push(item);
			  		}) 
			  	} else {
			  		userStates.localStates.push(situationDataEnd.states.localState)
			  	}
			  }

			  if (situationDataEnd?.states?.globalState) {
			  	userStates.globalStates.push(situationDataEnd.states.globalState)
			  }
			  props.setUser(props.user)

			  const postSaveArr = userStates.localStates.concat(userStates.globalStates);
			  if (postSaveArr.length) {
			  	postSaveObj.states = postSaveArr;
			  }
			  postSaveObj.karma = props.save.karma;
			  await gameAPI.postSave(postSaveObj);
			}

  		if (situationDataEnd?.karma != undefined) {
	  		if (situationDataEnd.karma > 0) {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/right-white.svg").default;
	  		} else if (situationDataEnd.karma < 0) {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/left-white.svg").default;
	  		} else {
	  			situationDataEnd.karmaSrc = require("../../../../images/karma/center-white.svg").default;
	  		}
	  		situationDataEnd.karmaText = props.save.story.karmaDictionary[props.save.karma];
  		}
  		setModal({
  			  show: true,
  				type: "situation",
					storyEnd: situationDataEnd?.storyEnd,
					dayEnd: situationDataEnd?.dayEnd,
					gameEnd: situationDataEnd?.gameEnd,
	  			karma: {
	  				show: !situationDataEnd?.karma ? false : true, 
	  				src: situationDataEnd?.karmaSrc, 
	  				alt: situationDataEnd?.karmaText
	  			},
	  			localState: {
	  				show: Array.isArray(situationDataEnd?.states) || situationDataEnd?.states.localState ? true : false, 
	  				localState: situationDataEnd?.states?.localState
	  			},
	  			globalState: {
	  				show: situationDataEnd?.states && situationDataEnd?.states.globalState?.src != undefined ? true : false, 
	  				globalState: situationDataEnd?.states?.globalState 
	  			}  
  			})
  	} else {
  		gameAPI.postSave(postSaveObj);
  		setSituation(action)
  	}
		window.scrollTo(0, 0)
  }

  const entryBackground = require(`../../../../images/entry/${props.save.story.src}.png`).default;
  const styleBackground = {
  	'background': `url(${entryBackground}) center top / cover no-repeat`,
  } 

	let screen;
	let color = "";

	if (situation === "Birth") {
		color = "dark"
		screen = 				
			<div className="birth">
				<h1>{situationData.name}</h1>
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.birthText}}></div>
				<button className={`next-button`} onClick={() => changeSituation("Main") }></button>
	  	</div>
	} else if (situation === "Main") {
		color = "light"
		screen = 				
			<div className="main">
				<h1>{situationData.name}</h1>
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.mainText}}></div>
				<img
		  		src={require(`../../../../images/main/${situationData.src}.png`).default} 
					alt={situationData.situation}
				/>
				<button className={`next-button ${color}`} onClick={() => changeSituation("Choice") }></button>
	  	</div>
	} else if (situation === "Choice") {
		color = "dark"
		screen = 				
			<div className="choice">
				<div className="p" dangerouslySetInnerHTML={{__html: situationData.choiceText}}></div>
				<div className="options-box">
					{
						situationData.option.map((item) => {
							return ( 
								<div 
									className={item.id === option ? "option active" : "option"} 
									key={item.id} 
									onClick={() => setOption(item.id) }
									 dangerouslySetInnerHTML={{__html: item.text}}
									>
								</div>
							)
						})
					}
					<img
			  		src={require(`../../../../images/option.png`).default} 
						alt='option'
						className='option-img'
					/>
				</div>
				{option  && 
					<button className="next-button" onClick={() => changeSituation("Final", option)}></button>
				}
	  	</div>
	} else if (situation === "Final") {
		if (situationDataEnd) {
			color = "light"
			screen = 				
				<div className="final">
					<div className="p" dangerouslySetInnerHTML={{__html: situationDataEnd.finalText}}></div>
					<img
			  		src={require(`../../../../images/final/${situationData.src}.png`).default} 
						alt={situationData.situation}
					/>
					<button className={`next-button ${color}`} onClick={() => changeSituation("End")}></button>
		  	</div>
		} else {
			return ( 
				<div className="spinner-wrapper">
					<div className="spinner"></div>
				</div> 
			)
		}
	}
  return (
  	<div className={`situation ${color}`}>
  		<Interface color={color} setEnter={props.setEnter} save={props.save} situation={situation}/>
  		{screen}
  		{
  			modal.show ? 
  				<Modal 
  					setStory={props.setStory} 
		  			modal={modal} 
		  			setModal={setModal} 
		  			setEnter={props.setEnter} 
		  			setSituation={setSituation}
		  			setSave={props.setSave}
		  			save={props.save}
						user={props.user} 
						setUser={props.setUser}
	  			/> 
	  			: undefined
			}
  	</div>
  );
}

export default Situation;

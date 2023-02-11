import './index.css';
import '../modal/index.css';
import { useState, useEffect } from 'react';

function Interface(props) {
	const [modalKarma, setModalKarma] = useState(false);
	const [progress, setProgress] = useState("0%");
	let showKarma, textKarma;

	if (props.save.karma === null || props.save.karma === 0) {
		textKarma = props.save.story.karmaDictionary[0]
		showKarma = "center-white"
	} else if (props.save.karma < 0) {
		textKarma = props.save.story.karmaDictionary[props.save.karma]
		showKarma = "left-white"
	} else if (props.save.karma > 0) {
		textKarma = props.save.story.karmaDictionary[props.save.karma]
		showKarma = "right-white"
	}
	
  useEffect(() => {
		const situationSumm = props.save.situation.progresstotal * 4; // количество делений
		const situationCount = props.save.situation.progressindex; // текущая ситуация
  	const situationAcc = ((situationCount - 1) * 4 );


		if (props.situation === "Birth") {
			setProgress( ((situationAcc + 1) / situationSumm) * 100 + "%")
		} else if (props.situation === "Main") {
			setProgress( ((situationAcc + 2) / situationSumm) * 100 + "%")
		} else if (props.situation === "Choice") {
			setProgress( ((situationAcc + 3) / situationSumm) * 100 + "%")
		} else if (props.situation === "Final") {
			setProgress( ((situationAcc + 4) / situationSumm) * 100 + "%")
		}
  }, [props.situation]);

  return (
  	<>
	  	<div className={`interface ${props.color}`}>
	  		<button className="settings" onClick={() => props.setEnter("Menu")}></button>
	  		<button className={`karma ${showKarma}`} onClick={() => setModalKarma(true)}></button>
	      <button  className="inventory" onClick={() => props.setEnter("States")}></button>
	  	</div>
	  	<div className="progress-bar"></div>
	  	<div className="progress-ivent" style={{width: progress}}></div>
			{modalKarma &&
	  		<div className="modal modal-karma">
		      <img src={require(`../../images/karma/${showKarma}.svg`).default} alt={showKarma} />
		      <div className="desk">{textKarma}</div>
		      <button className="back-button" onClick={() => setModalKarma(false)} ></button>
	  		</div>
			}
		</>
  );
}

export default Interface;

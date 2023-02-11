import './index.css';
import Story from './story/index.js'
import { useState } from 'react';

function Game(props) {
	const [game, setGame] = useState("Story")

	let screen;
	if (game === "Story") {
		screen = <Story 
								game={game} setGame={setGame} 
								setEnter={props.setEnter}
								save={props.save} setSave={props.setSave}
								load={props.load} setLoad={props.setLoad}
								user={props.user} setUser={props.setUser}
							/>
	}

  return (
  	<div className="game">
  		{screen}
  	</div>
  );
}

export default Game;

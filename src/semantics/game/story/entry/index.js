import './index.css';
import { useState, useEffect } from 'react';
import gameAPI from '../../../../api/index.js'

function Entry(props) {
  useEffect(() => {
    props.user.data.save.entry = false;
    props.setUser(props.user)
    gameAPI.postSave(
      {
        step: "Birth",
        consequenceId: props.user.data.save.situationDataEnd?.id || null,
        entry: props.user.data.save.entry,
        situationId: props.user.data.save.situation.id,
        karma: 0
      }
    ).then(() => {
      gameAPI.getSave().then(response => {
        props.setUser(response);
      })
    })
  }, []);

  function entryAction() {
    props.setStory("Situation");
  }

  return (
		<div className="situation entry">
  		<img src={require(`../../../../images/entry/${props.storyData.src}.png`).default} alt={props.storyData.name}/>
      <h1>{props.storyData.name}</h1>
      <button className={`next-button`} onClick={() => entryAction()}></button>
  	</div>
  );
}

export default Entry;

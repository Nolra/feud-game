import './index.css';
import gameAPI from '../../api/index.js'
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Modal(props) {
  const [karma, setKarma] = useState(props.modal.karma) 
  const [localState, setLocalState] = useState(props.modal.localState) 
  const [globalState, setGlobalState] = useState(props.modal.globalState)
  const [update, setUpdate] = useState(false)
  const history = useHistory();

  let screen;
  if (props.modal.type === "situation") {
    if (!update) {
      if (!props.modal.storyEnd) {
        gameAPI.getSituation(props.save.situation.id).then((response) => 
          props.save.situation = response.data,
          props.user.data.save = props.save,
          props.setSave(props.save),
          props.setUser(props.user),
          setUpdate(true),
          gameAPI.postSave(
            {
              step: "Birth",
              consequenceId: null,
              entry: false,
              situationId: props.save.situation.nextSituationId
            }
          )
        )
      } else {
        setUpdate(true)
      }
    }

    function changeModal(value, array) {
      if (value === "Karma") {
        setKarma({show: false})
      } else if (value === "localState") {
        if (array) {
          const lastLocalState = {}; 
          lastLocalState.localState = localState.localState[1];
          lastLocalState.show = true;
          setLocalState(lastLocalState)
        } else {
          setLocalState({show: false})
        }
      } else if (value === "globalState") {
        setGlobalState({show: false})
      }
    }

    if (update) {
      if (karma.show) {
        screen = 
        <>
          <div className="desk">{karma.alt}</div>
          <img src={karma.src} alt={karma.alt} />
          <button className="next-button" onClick={() => changeModal("Karma")} ></button>
        </>
      } else if (!karma.show && localState.show) {
        if (Array.isArray(localState.localState)) {
          screen = 
          <>
            <div className="desk">{localState.localState[0].alt}</div>
            <img src={require(`../../images/localStates/${localState.localState[0].src}.svg`).default} alt={localState.localState[0].alt} />
            <button className="next-button" onClick={() => changeModal("localState", true)} ></button>
          </>
        } else {
          screen = 
          <>
            <div className="desk">{localState.localState.alt}</div>
            <img src={require(`../../images/localStates/${localState.localState.src}.svg`).default} alt={localState.localState.alt} />
            <button className="next-button" onClick={() => changeModal("localState")} ></button>
          </>
        }
      } else if (!karma.show && !localState.show && globalState.show) {
        screen = 
        <>
          <div className="desk">{globalState.globalState.alt}</div>
          <img src={require(`../../images/globalStates/${globalState.globalState.src}.svg`).default} alt={globalState.globalState.alt} />
          <p>{globalState.globalState.text}</p>
          <button className="next-button" onClick={() => changeModal("globalState")} ></button>
        </>
      } else {

        if (props.modal.gameEnd) {
          props.save.finished = true;
          props.setSave(props.save)
          gameAPI.postSave(props.save);
          history.push("/final");
        } else if (props.modal.dayEnd) {
          props.save.storyEnd = true;
          props.setSave(props.save)
          props.setStory("Entry");
        } else if (props.modal.storyEnd) {
          props.save.storyEnd = true;
          props.setSave(props.save)
          props.setStory("Entry");
        } else {
          props.setSituation("Birth")
          props.save.step = "Birth"
          props.setSave(props.save);
        }
        props.setModal({show:false})
      }
    } else {
    <>

    </>
    }
  } else {
    screen = 
    <>
      <div className="desk">{props.modal.alt}</div>
      <img src={props.modal.src} alt={props.modal.alt} />
      <button className="back-button" onClick={() => props.setModal({show:false})} ></button>
    </>
  }

  if (!props.modal.show) {
    return (
      <div className="modal hide">
        {screen}
      </div>
    );
  }

  return (
  	<div className="modal">
      {screen}
  	</div>
  );
}

export default Modal;

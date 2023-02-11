import './index.css';
import Entry from './entry/index.js'
import Situation from './situation/index.js'
import { useState, useEffect } from 'react';
import gameAPI from '../../../api/index.js'

function Story(props) {
	const [story, setStory] = useState("");
	const [storyData, setStoryData] = useState(null);	

  useEffect(() => { 
  	setStoryData(props.save.story)
		if (props.save.entry) {
			setStory("Entry")
		} else {
			setStory("Situation")
		}
  }, []);

	if (props.save.storyEnd === true && story === "Entry") {
		 async function storyAwait() {
			const response = await gameAPI.postStory(props.save.story.id, props.save.choice.id);
			props.user.data.save = {
				...props.user.data.save,
				karma: 0,
				entry: true,
				situation: response.data.situation,
				story: response.data,
				choice: null,
				situationDataEnd: null
			};
			props.save.storyEnd = false;
			props.setSave(props.save);
			props.setUser(props.user);
			setStoryData(props.user.data.save.story)
		 }
		 storyAwait()
	}
	let screen;
	if (storyData && !props.save.storyEnd) {
		if (story === "Entry") {
			screen = <Entry 
									storyData={storyData} setStory={setStory}
									save={props.save} setSave={props.setSave}
									user={props.user} setUser={props.setUser}
								/>
		} else if (story === "Situation") {
			screen = <Situation 
									setStoryData={setStoryData} storyData={storyData} 
									setStory={setStory} setEnter={props.setEnter}
									save={props.save} setSave={props.setSave}
									load={props.load} setLoad={props.setLoad}
									user={props.user} setUser={props.setUser}
								/>
		} 
	} else {
		screen = <div className="spinner-wrapper">
								 <div className="spinner"></div>
							 </div>
	}

  return (
  	<>{screen}</>
  );
}

export default Story;

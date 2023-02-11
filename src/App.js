import Menu from "./semantics/menu"
import Login from "./semantics/login"
import States from "./semantics/states"
import Game from "./semantics/game"
import gameAPI from './api'
import Mail from './semantics/mail'
import Landing from './semantics/landing'
import PromoLanding from './semantics/promo-landing'
import Bestiary from './semantics/bestiary'

import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

function App(props) {

	// useState navigation
  const [enter, setEnter] = useState("Login");
	// useState menu items
	const [menu, setMenu] = useState([true,true,true,true,true]);
	// useState save game
	const [save, setSave] = useState(null);
	// useState user
  const [user, setUser] = useState(null);
  // useState load
	const [load, setLoad] = useState(false);
	
  useEffect(() => {
  	if (localStorage.getItem("token_feud") && !user) {
        gameAPI.getSave()
        .then((result) => okEvent(result))
        .catch((result) => {
        		localStorage.removeItem("token_feud");
        		window.location.reload();
        });
	      function okEvent(result) {
	        setUser(result);
	        setEnter("Menu");
	      }
  	}
  	if (user) {
  		if (!user.data.save.situation.step) {
  			user.data.save.situation.step = "Birth"
  			setUser(user);
  		}
			setSave(user.data.save);
  		localStorage.setItem("token_feud", user.data.token);
  	}
  }, [user]);

	// enter navigation
	let screen;
	if (enter === "Login") {
		screen = 
		<Login 
			enter={enter} setEnter={setEnter}
			menu={menu} setMenu={setMenu}
			save={save} setSave={setSave}
			user={user} setUser={setUser}
		/>
	}
	if (enter === "Menu") {
		screen = 
		<Menu 
			menu={menu} setMenu={setMenu} 
			enter={enter} setEnter={setEnter}
			save={save} setSave={setSave}
			load={load} setLoad={setLoad}
			user={user} setUser={setUser}
		/>
	}
	if (enter === "States") {
		screen = 
			<States 
				enter={enter} setEnter={setEnter}
				menu={menu} setMenu={setMenu}
				user={user} setUser={setUser}
				save={save} setSave={setSave}
			/>
	}

	if (enter === "Game") {
		screen = 
			<Game 
				enter={enter} setEnter={setEnter}
				menu={menu} setMenu={setMenu} 
				save={save} setSave={setSave}
				load={load} setLoad={setLoad}
				user={user} setUser={setUser}
			/>
	}

	if (enter === "Bestiary") {
		screen = 
			<Bestiary 
				enter={enter} setEnter={setEnter}
				menu={menu} setMenu={setMenu} 
				save={save} setSave={setSave}
				load={load} setLoad={setLoad}
				user={user} setUser={setUser}
			/>
	}

  return (
    <Switch>
      <Route path="/game">
		    <div className="feud-game">
		    	{screen}
		    </div>
      </Route>
      <Route path="/final">
        <Mail setEnter={setEnter} />
      </Route>
      <Route path="/promo-landing">
        <PromoLanding />
      </Route>
      <Route path="/">
        <Landing setEnter={setEnter}/>
      </Route>
    </Switch>
  );

}

export default App;

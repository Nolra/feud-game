import './index.css';
import gameAPI from '../../api/index.js'
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Menu(props) {
  const [hello, setHello] = useState(false);
  const history = useHistory();

	function toGo(value, load) {
		if (load) {
      gameAPI.getSave()
      .then((result) => okEvent(result))
      .catch()
      function okEvent(result) {
        props.setSave(result.data.save)
        if (result.data.save.finished) {
        	history.push("/final");
        } else {
        	props.setEnter(value)
        }
      }
		} else {
			props.setEnter(value);
		}
	}

  function exit() {
  	localStorage.clear();
  	window.location.reload();
  }

	if (props.user) {
		props.menu[4] = false;
		if (Object.keys(props.user.data.states.globalStates).length !== 0 || Object.keys(props.user.data.states.localStates).length !== 0) {
			props.menu[2] = false;
		}
  	if ((props.user.data.save.situation.step === "Birth" && props.user.data.save.situation.id === 1 && props.user.data.save.entry === true)) {
			props.menu[0] = false;
			props.menu[1] = true;
  	} else {
			props.menu[0] = true;
			props.menu[1] = false;
  	}
	  // Приветсвенный текст для нового пользователя
		if (hello) {
			return (
				<div className="hello">
					<div className="hello-box">
			      <p>
			        Добро пожаловать в <span>Феод</span> — самое большое территориальное образование на планете, гражданином тебе посчастливилось родиться. 
			      </p>
			      <p>
			        Скорее всего, ты не подозревал, что родился в Феоде, потому что с самого детства тебе рассказывали совсем другие вещи о стране и людях, которые в ней живут.
			      </p>
			      <p>
			        Но если ты внимательно посмотришь по сторонам то увидишь, что фантастическое, безжалостное и героическое прошлое никуда не делось - оно давно обогнало будущее и заняло его место.
			      </p>
			      <p>
			        В следующие три дня ты будешь постоянно принимать решения. Да или нет, согласиться или не согласиться, ударить или подставить другую щеку, выйти погулять или остаться дома.
			      </p>
			      <p>
			        По окончанию каждого дня ты получишь на почту приглашение на следующий день. От твоего выбора будет много зависеть. Или мало. Как пойдет.
			      </p>
			      <p>
			        Куда несется эта тройка мы тебе не скажем, потому что сами едем в ней. До встречи.
			      </p>
			    </div>
	        <div className="row">
	          <div className="come-in button" onClick={() => toGo("Game", false)}>Начать</div>
	        </div>
		     </div>
				)
		}
	  return (
	    <div className="menu">
	    	<h1>
	    		Распутье
		  		<button 
			  		className="button exit" 
			  		onClick={() => exit()}
		  		></button>
	    	</h1>
		  	<ul>
		  		<li>
			  		<button 
				  		className="button" 
				  		disabled={props.menu[0]}
				  		onClick={() => setHello(true)}
			  		>
			  		Начать</button>
		  		</li>
		  		<li>
		  			<button 
			  			className="button" 
			  			disabled={props.menu[1]}
			  			onClick={() => toGo("Game", true)}
		  			>
		  			Продолжить
		  			</button>
		  		</li>
		  		<li>
		  			<button 
			  				className="button" 
			  				disabled={props.menu[2]}
			  				onClick={() => toGo("States")}
		  				>
		  				Бремя
		  			</button>
		  		</li>
		  		<li><button className="button" disabled={props.menu[3]}>Мир разрушен</button></li>
		  		<li>
		  			<button
		  				className="button"
		  				disabled={props.menu[4]}
		  				onClick={() => toGo("Bestiary")}
		  			>
		  				Бестиарий
		  			</button>
		  		</li>
		  	</ul>
	    </div>
	  );
	} else {
		return <div className="spinner-wrapper">
							 <div className="spinner"></div>
						 </div>
	}
}

export default Menu;

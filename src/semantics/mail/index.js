import './index.css';
import { useState } from 'react';
import gameAPI from '../../api/index.js'
import { useHistory } from "react-router-dom";

function Mail(props) {
  const history = useHistory();
  // const [final, setFinal] = useState(null);
  // const [emails, setEmails] = useState([]);
  // const [emailsAll, setEmailsAll] = useState([]);
  // const [emailsSpam, setEmailsSpam] = useState([]);
  // const [hello, setHello] = useState(true);
  // const [menu, setMenu] = useState("");
  // const [menuItems, setMenuItems] = useState({all: true, spam: false, star: false});
  // const [feed, setFeed] = useState(false);
  // const [feedName, setFeedName] = useState("");
  // const [feedMessage, setFeedMessage] = useState("");
  // const [emailsShow, setEmailsShow] = useState([]);
  // const [emailsStar, setEmailsStar] = useState([]);
  // const [emailsNotShowed, setEmailsNotShowed] = useState([]);
  // const [letter, setLetter] = useState({show: false, content: {}});

  // async function getAllLetters() {
  //   const content = await gameAPI.getLetters();
  //   setFinal(content.data);
  //   setEmails(content.data.emails);
  //   setEmailsAll(content.data.emails.filter(item => !item.spam));
  //   setEmailsSpam(content.data.emails.filter(item => item.spam));
  //   setEmailsStar(content.data.emails.filter(item => item.star));
  //   setEmailsNotShowed(content.data.emails.filter(item => !item.spam && !item.showed));
  //   setEmailsShow(content.data.emails.filter(item => !item.spam));
  // }

  // if (final === null) {
  //   getAllLetters()
  //   return (
  //     <div className="spinner-wrapper">
  //       <div className="spinner"></div>
  //     </div> 
  //   )
  // }

  // if (hello) {
  //   const hideHello = () => setHello(false);
  //   setTimeout(hideHello, 2000);
  // }
  // const menuHandler = () => menu === "" || menu === false ? setMenu(true) : setMenu(false);
  // const allHandler = () => (setMenuItems({all: true, spam: false, star: false}), menuHandler(), setEmailsShow(emailsAll));
  // const spamHandler = () => (setMenuItems({all: false, spam: true, star: false}), menuHandler(), setEmailsShow(emailsSpam));
  // const starHandler = () => (setMenuItems({all: false, spam: false, star: true}), menuHandler(), setEmailsShow(emailsStar));
  // const feedHandler = () => setFeed(!feed);
  // const feednameHandler = (event) => setFeedName(event.target.value);
  // const messageHandler = (event) => setFeedMessage(event.target.value);
  // const sendHandler = () => (
  //   gameAPI.postFeed({feedName: feedName, message: feedMessage, email: final.login}),
  //   feedHandler()
  // );
  // const searchHandler = (event) => (
  //   menuItems.all === true ? setEmailsShow([
  //     ...emailsAll.filter((item, index) => {
  //       const searchStr = item.sender.toLowerCase() + " " + item.header.toLowerCase() + " " + item.body.toLowerCase();
  //       const value = event.target.value.toLowerCase();
  //       if (searchStr.match(value)) {
  //         return item
  //       }
  //     })]) : undefined,

  //      menuItems.spam ? setEmailsShow([
  //     ...emailsSpam.filter((item, index) => {
  //       const searchStr = item.sender.toLowerCase() + " " + item.header.toLowerCase() + " " + item.body.toLowerCase();
  //       const value = event.target.value.toLowerCase();
  //       if (searchStr.match(value)) {
  //         return item
  //       }
  //     })]) : undefined,

  //     menuItems.star ? setEmailsShow([
  //     ...emailsStar.filter((item, index) => {
  //       const searchStr = item.sender.toLowerCase() + " " + item.header.toLowerCase() + " " + item.body.toLowerCase();
  //       const value = event.target.value.toLowerCase();
  //       if (searchStr.match(value)) {
  //         return item
  //       }
  //     })]) : undefined
  // )
  // const starToggleHandler = (event, id) => (
  //   event.stopPropagation(),
  //   setEmails([...emails.map((item) => {
  //     if (item.id === id) {
  //       item.star = !item.star
  //       setEmailsStar(emails.filter(item => item.star))
  //     }
  //     return item
  //   })])
  // )
  // const openHandler = (id) => (
  //   setEmails([...emails.map((item) => {
  //     if (item.id === id) {
  //       item.showed = true
  //       setEmailsNotShowed(emailsAll.filter(item => !item.showed))
  //       setLetter({show: true, content: item})
  //     }
  //     return item
  //   })])
  // )

  // return (
  //   <div className="mail">
  //     <main>
  //       <div className="mail-header">
  //         <div className="burger" onClick={menuHandler}></div>
  //         <input className="search" type="text" placeholder="Поиск в почте" onChange={searchHandler} />
  //         <div className="avatar">{final.firstLetter}</div>
  //       </div>

  //       <div className="mail-content">
  //         <h1>Все ящики</h1>
  //         {
  //           emailsShow.length > 0 ?
  //           emailsShow.map((item, index) => {
  //             return (
  //               <div className={`mail-item ${item.showed}`} key={index} onClick={() => openHandler(item.id) }>
  //                 <div className={`mail-avatar ${item.template}`}>{item.letter}</div>
  //                 <div className="text-box">
  //                   <div className="mail-head">{item.sender}</div>
  //                   <div className="mail-name">{item.header}</div>
  //                   <div className="mail-body">{item.body}</div>
  //                 </div>
  //                 <div className="status-box">
  //                   <div className="date">{item.date}</div>
  //                   <div className={`star ${item.star}`} onClick={(event) => starToggleHandler(event, item.id)}></div>
  //                 </div>
  //               </div>
  //             )
  //           })
  //           : <div>Писем не найдено</div>
  //         }
  //       </div>

  //       <div className="mail-footer">
  //         <div className="write" onClick={feedHandler}>Написать</div>
  //         <div className={`hello-text ${hello}`}>Вы вошли в аккаунт {final.login}</div>
  //         <div className="bird active"><span>{emailsNotShowed.length}</span>Почта</div>
  //         <div className="docs">Документы</div>
  //       </div>
  //     </main>

  //     <div className={`mail-menu ${menu}`}>
  //       <div className="menu-divider"></div>
  //       <div className={`menu-item all ${menuItems.all}`} onClick={allHandler}>Несортированные <span>{emailsAll.length}</span></div>
  //       <div className={`menu-item spam ${menuItems.spam}`} onClick={spamHandler}>Спам <span>{emailsSpam.length}</span></div>
  //       <div className="menu-divider"></div>
  //       <div className={`menu-item star ${menuItems.star}`} onClick={starHandler}>Помеченные <span>{emailsStar.length}</span></div>
  //     </div>


  //     <div className={`menu-bg ${menu}`} onClick={menuHandler}></div>

  //     {
  //       feed &&
  //       <div className="feedback">
  //         <div className="bar">
  //           <div className="closeFeedback" onClick={feedHandler}></div>
  //           <div className="sendFeedback" onClick={sendHandler}></div>
  //         </div>
  //         <input readOnly="readonly" className="adress" defaultValue={`Кому: ${final.loginFeud}`}/>
  //         <input readOnly="readonly" className="send"  defaultValue={`От: ${final.login}`}/>
  //         <input className="feedname"  placeholder="Тема" value={feedName} onChange={feednameHandler}/>
  //         <textarea className="message" placeholder="Напишите сообщение" value={feedMessage} onChange={messageHandler}></textarea>
  //       </div>
  //     }


  //     {
  //       letter.show &&
  //       <div className="letter">
  //         <div className="bar">
  //           <div className="closeLetter" onClick={() => setLetter({show:false})}></div>
  //         </div>
  //         <div className="letter-header">
  //           <div className="name">{letter.content.header} <span className="tag">Входящие</span></div>
  //           <div className={`star ${letter.content.star}`} onClick={(event) => starToggleHandler(event, letter.content.id)}></div>
  //         </div>
  //         <div className="letter-head">
  //           <div className={`avatar ${letter.content.template}`}>{letter.content.letter}</div>
  //           <div className="logistic">
  //             <div className="from">{letter.content.sender}</div>
  //             <div className="to">кому: мне</div>
  //           </div>
  //         </div>


  //         {
  //           letter.content.template === "default" &&
  //           <div className="letter-body">
  //             {letter.content.body}
  //           </div>
  //         }



  //         {
  //           letter.content.template === "facebook" &&
  //           <div className="letter-body facebook">
  //             <div className="facebook-body">
  //               <div className="facebook-logo"></div>
  //               <div className="facebook-head">
  //                 <div className="facebook-notis">Оповещения</div>
  //                 <div className="facebook-info"><span>1</span> новое оповещение</div>
  //                 <div className="facebook-hello">Много чего произошло в Facebook c момента вашего последнего визита. Вот некоторые сообщения, которые вы пропустили от ваших друзей.</div>
  //                 <div className="message-body">
  //                   <div className="avatar"></div>
  //                   <div className="message-logistic">
  //                     <div className="message-sender">{letter.content.templateContent.sender}</div>
  //                     <div className="message-date">
  //                       {letter.content.templateContent.date}
  //                       <span className="message-dot"></span>
  //                       <span className="message-planet"></span>
  //                     </div>
  //                   </div>
  //                   <div className="facebook-message">{letter.content.body}</div>
  //                   <div className="footer-message">
  //                     <div className="footer-bar">
  //                       <div className="footer-like">{letter.content.templateContent.likes}</div>
  //                       <div className="footer-comment">Комментарии:{letter.content.templateContent.comments}</div>
  //                       <div className="footer-share">Поделились:{letter.content.templateContent.share}</div>
  //                     </div>
  //                     <div className="footer-panel">
  //                       <div className="footer-liked">Нравится</div>
  //                       <div className="footer-commented">Комментировать</div>
  //                       <div className="footer-shared">Поделиться</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         }


  //         {
  //           letter.content.template === "university" &&
  //           <div className="letter-body university">
  //             {letter.content.body}
  //           </div>
  //         }

  //         {
  //           letter.content.template === "gosuslugi" &&
  //           <div className="letter-body gosuslugi">
  //             <div className="gosuslugi-body">
  //               <div className="gosuslugi-logo"></div>
  //               <div className="gosuslugi-post">{letter.content.body}</div>
  //               <div className="gosuslugi-footer"></div>
  //               <div className="gosuslugi-bottom"></div>
  //             </div>
  //           </div>
  //         }

  //         {
  //           letter.content.template === "change" &&
  //           <div className="letter-body change">
  //             <div className="change-body">
  //               <div className="change-logo"></div>
  //               <div className="change-post">{letter.content.body}</div>
  //               <div className="change-divider"><span>Последние подписавшиеся</span><span>1 день назад</span></div>
  //               <div className="change-bottom">
  //               {
  //                 letter.content.templateContent.comments.map((comment, index) => {
  //                   return (
  //                     <div className="change-comment">
  //                       <div className="avatar-box">
  //                         <div className="avatar"></div>
  //                       </div>
  //                       <div className="text-box">
  //                         <div className="text-top">
  //                           <div className="comment-name">{comment.sender} </div>
  //                           <div className="comment-date"> · 1 день назад</div>
  //                         </div>
  //                         <div className="text-middle">{comment.body}</div>
  //                         <div className="text-bottom">
  //                           <div className="comment-like">{comment.likes} </div> 
  //                           <div className="comment-action"> · Пожаловаться</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   )
  //                 }) 
  //               }
  //               </div>
  //             </div>
  //             <div className="description">
  //               Это сообщение было отправлено Change.org по адресу: {final.login} потому, что вы являетесь зарегистрированным пользователем Change.org. Ваше мнение важно для нас, поэтому мы будем рады его услышать! Свяжитесь с нашим Центром поддержки.
  //               <br/><br/>Change.org  ·  далеко за стенами Феода
  //             </div>
  //           </div>
  //         }
  //       </div>
  //     }
  //   </div>
  // )


  function toMenu() {
    props.setEnter("Menu");
    history.push("/game");
  }


  if (!localStorage.getItem("token_feud")) {
    history.push("/game");
  }

  return (
    <div className="hello final">
      <h1 className="title">Конец Феода</h1>
      <div  className="hello-box">
        <p>
          Здесь должна была быть вторая, финальная часть игры, целиком посвященная последствиям ваших выборов которые вы делали в игре. Мы собирались сымитировать обыкновенную почту в джимейле или на яндексе, на которую вам каждый день приходят письма от госуслуг, уведомления о новых сообщениях, предложения подписок. По одному письму на каждый пройденный сюжет.
          Герой нашей  игры - обычный человек, множество обычных людей сразу, его дом - страшная российская обыденность, в которой скидки на авито, повестки в армию и уголовный срок за репост сосуществуют в одном пространстве. 
        </p>
        <p>
          Наш финальный ход должен был произвести двойной срыв покровов - вернуть вас в реальность, демонстрируя, что в средневековых декорациях были зашифрованы вполне понятные действия, и одновременно показать, что неофеодализм вовсе не является декорацией, в отличие от всего остального.
          Но началась война, и теперь это единственный результат, который мы можем вам предоставить. Выбора у нас не осталось, и все действия, которые мы совершали до этого так или иначе вели нас сюда. Нам придется что-то с этим делать.
        </p>
      </div>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/W6LSI_pyLZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button className="button" onClick={() => toMenu()}>Выход</button>
    </div>
  );
}

export default Mail;

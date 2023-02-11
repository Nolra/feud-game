import axios from "axios";

const gameAPI = {

  // получить объект эвента по id
  getSave() {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/user/save`,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    })
  },

	// {email, password}
  postRegister(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/auth/register`,
      data: data,
    });
  },

	// {email, password}
  postLogin(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/auth/login`,
      data: data,
    });
  },

	// шлешь объект сохранения, как тот, что получаешь в логине
  postSave(data) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/user/save`,
      data: data,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },

	// получить объект эвента по id
  getStory(id, callback) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/story/${id}`,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    })
  },

	// закрыть эвент, получить  следующий эвент. временная заплатка вместо карты
  postStory(id, consequenceId) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/story`,
      data: {id, consequenceId},
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },

	// получить следующую ситуацию по id текущей
  getSituation(id) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/situation/${id}`,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },

	// получить последствия выбора
  getChoice(id) {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/choice/${id}`,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },


  // получить письма для финала
  getLetters() {
    return axios({
      method: "get",
      url:`https://api.feudalism.ru/api/mail/letters`,
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },

  // отправить отзыв из финала
  postFeed({feedName, message, email}) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/mail/feedback`,
      data: {feedName, message, email},
      headers: {
        Authorization: localStorage.getItem("token_feud"),
        "Content-Type": "application/json",
      },
    });
  },

  // отправить отзыв из финала
  postSubscribe({email}) {
    return axios({
      method: "post",
      url:`https://api.feudalism.ru/api/mail/subscribe`,
      data: {email},
    });
  },






};
export default gameAPI;
// lib
const unlock = (eventTypes) => {

  // check if it's an array and not empty
  if (!Array.isArray(eventTypes) || eventTypes.length === 0) {
    console.log('no events provided');
    return;
  }

  // todo: initiate an array for unlock event promises
  const eventsArray = [];

  // todo: add event listener for each option and push to array
  eventTypes.forEach(eventType => {
    const p = new Promise((resolve, reject) => {
      window.addEventListener(eventType, () => {
        console.log(eventType);   
        resolve();
      })
    })
    eventsArray.push(p);
  })

  console.log(eventTypes);

  return Promise.all(eventsArray)
}

export {
  unlock
}

// usage
import { unlock } from "@sahilkhosla/unlock-js";
import axios from 'axios';

const unlockEventOptions = ['scroll', 'click', 'keypress', 'mouseout'];

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5ff3d03fb69c062d1c393c39';

//initiate network call
const requestData = () => {
  return axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
}

//wait for network call to finish and print data
const parseData = async () => {
  const response = await requestData();
  console.log(response.data);
}

unlock(unlockEventOptions).then(parseData);

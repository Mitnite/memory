import waiting_1 from '../img/waiting/waiting_1.jpg';
import waiting_2 from '../img/waiting/waiting_2.jpg';
import waiting_3 from '../img/waiting/waiting_3.jpg';
import waiting_4 from '../img/waiting/waiting_4.jpg';
import sendoff from '../img/sendoff/main.png'
import sendoff_1 from '../img/sendoff/sendoff_1.jpg'
import sendoff_2 from '../img/sendoff/sendoff_2.jpg'
import sendoff_3 from '../img/sendoff/sendoff_3.jpg'
import sendoff_4 from '../img/sendoff/sendoff_4.jpg'


const initialState = {
  waiting: [
    {url: waiting_1},
    {url: waiting_2},
    {url: waiting_3},
    {url: waiting_4},

  ],
  sendoff: [
    {url: sendoff},
    {url: sendoff_1},
    {url: sendoff_2},
    {url: sendoff_3},
    {url: sendoff_4},

  ]


}

export default function rootReducer(state = initialState, action) {
  return state
}
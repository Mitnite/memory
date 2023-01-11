import waiting_1 from '../img/summer/waiting/waiting_1.jpg';
import waiting_2 from '../img/summer/waiting/waiting_2.jpg';
import waiting_3 from '../img/summer/waiting/waiting_3.jpg';
import waiting_4 from '../img/summer/waiting/waiting_4.jpg';

import sendoff_1 from '../img/summer/sendoff/main.png';
import sendoff_2 from '../img/summer/sendoff/sendoff_1.jpg';
import sendoff_3 from '../img/summer/sendoff/sendoff_2.jpg';
import sendoff_4 from '../img/summer/sendoff/sendoff_3.jpg';
import sendoff_5 from '../img/summer/sendoff/sendoff_4.jpg';

import ministry_1 from '../img/summer/ministry/ministry_1.jpg';
import ministry_2 from '../img/summer/ministry/ministry_2.jpg';
import ministry_3 from '../img/summer/ministry/ministry_3.jpg';
import ministry_4 from '../img/summer/ministry/ministry_4.jpg';
import ministry_5 from '../img/summer/ministry/ministry_5.jpg';
import ministry_6 from '../img/summer/ministry/ministry_6.jpg';
import ministry_7 from '../img/summer/ministry/ministry_7.jpg';
import ministry_8 from '../img/summer/ministry/ministry_8.jpg';
import ministry_9 from '../img/summer/ministry/ministry_9.jpg';
import ministry_10 from '../img/summer/ministry/ministry_10.jpg';

import photo_session_0 from '../img/summer/photo_session/photo_session_1.jpg';
import photo_session_1 from '../img/summer/photo_session/photo_session_2.jpg';
import photo_session_2 from '../img/summer/photo_session/photo_session_2_1.jpg';
import photo_session_3 from '../img/summer/photo_session/photo_session_2_2.jpg';
import photo_session_4 from '../img/summer/photo_session/photo_session_2_3.jpg';
import photo_session_5 from '../img/summer/photo_session/photo_session_2_4.jpg';
import photo_session_6 from '../img/summer/photo_session/photo_session_5.jpg';
import photo_session_7 from '../img/summer/photo_session/photo_session_6.jpg';
import photo_session_8 from '../img/summer/photo_session/photo_session_7.jpg';
import photo_session_9 from '../img/summer/photo_session/photo_session_8.jpg';
import photo_session_10 from '../img/summer/photo_session/photo_session_14.jpg';

import photo_session0 from '../img/summer/photo_session/photo_session_13.jpg';
import photo_session1 from '../img/summer/photo_session/photo_session_3.jpg';
import photo_session2 from '../img/summer/photo_session/photo_session_3_1.jpg';
import photo_session3 from '../img/summer/photo_session/photo_session_3_2.jpg';
import photo_session4 from '../img/summer/photo_session/photo_session_3_3.jpg';
import photo_session5 from '../img/summer/photo_session/photo_session_3_4.jpg';
import photo_session6 from '../img/summer/photo_session/photo_session_4.jpg';
import photo_session7 from '../img/summer/photo_session/photo_session_9.jpg';
import photo_session8 from '../img/summer/photo_session/photo_session_10.jpg';
import photo_session9 from '../img/summer/photo_session/photo_session_11.jpg';
import photo_session10 from '../img/summer/photo_session/photo_session_15.jpg';

import birthday_1 from '../img/summer/birthday/birthday_1.jpg';
import birthday_2 from '../img/summer/birthday/birthday_2.jpg';
import birthday_3 from '../img/summer/birthday/birthday_3.jpg';
import birthday_4 from '../img/summer/birthday/birthday_4.jpg';

import chokopai_1 from '../img/summer/chokopai/chokopai_1.jpg';
import chokopai_2 from '../img/summer/chokopai/chokopai_2.jpg';
import chokopai_3 from '../img/summer/chokopai/chokopai_3.jpg';
import chokopai_4 from '../img/summer/chokopai/chokopai_4.jpg';
import chokopai_5 from '../img/summer/chokopai/chokopai_5.jpg';
import chokopai_6 from '../img/summer/chokopai/chokopai_6.jpg';
import chokopai_7 from '../img/summer/chokopai/chokopai_7.jpg';
import chokopai_8 from '../img/summer/chokopai/chokopai_8.jpg';

import mulled_1 from '../img/summer/mulled/mulled_0.jpg';
import mulled_2 from '../img/summer/mulled/mulled_1.jpg';
import mulled_3 from '../img/summer/mulled/mulled_2.jpg';
import mulled_4 from '../img/summer/mulled/mulled_3.jpg';
import mulled_5 from '../img/summer/mulled/mulled_4.jpg';

import trampoline_1 from '../img/autumn/trampoline/trampoline_1.jpg';
import trampoline_2 from '../img/autumn/trampoline/trampoline_2.jpg';
import trampoline_3 from '../img/autumn/trampoline/trampoline_3.jpg';
import trampoline_4 from '../img/autumn/trampoline/trampoline_4.jpg';
import trampoline_5 from '../img/autumn/trampoline/trampoline_5.jpg';
import trampoline_6 from '../img/autumn/trampoline/trampoline_6.jpg';
import trampoline_7 from '../img/autumn/trampoline/trampoline_7.gif';


const initialState = {
  sendoff: [
    {url: sendoff_1}, {url: sendoff_2}, {url: sendoff_3}, {url: sendoff_4}, {url: sendoff_5},
  ],

  waiting: [
    {url: waiting_1}, {url: waiting_2}, {url: waiting_3}, {url: waiting_4},
  ],

  ministry: [
    {url: ministry_1}, {url: ministry_2}, {url: ministry_3}, {url: ministry_4}, {url: ministry_5}, {url: ministry_6}, {url: ministry_7}, {url: ministry_8}, {url: ministry_9}, {url: ministry_10}
  ],

  photo_session_left: [
    {url: photo_session_0}, {url: photo_session_1}, {url: photo_session_2}, {url: photo_session_3}, {url: photo_session_4}, {url: photo_session_5}, {url: photo_session_6}, {url: photo_session_7}, {url: photo_session_8}, {url: photo_session_9}, {url: photo_session_10}
  ],
  photo_session_right: [
    {url: photo_session0}, {url: photo_session1}, {url: photo_session2}, {url: photo_session3}, {url: photo_session4}, {url: photo_session5}, {url: photo_session6}, {url: photo_session7}, {url: photo_session8}, {url: photo_session9}, {url: photo_session10}
  ],

  birthday: [
    {url: birthday_1}, {url: birthday_2}, {url: birthday_3}, {url: birthday_4}
  ],

  chokopai: [
    {url: chokopai_1}, {url: chokopai_2}, {url: chokopai_3}, {url: chokopai_4}, {url: chokopai_5}, {url: chokopai_6}, {url: chokopai_7}, {url: chokopai_8}
  ],

  mulled: [
    {url: mulled_1}, {url: mulled_2}, {url: mulled_3}, {url:mulled_4}, {url:mulled_5}
  ],

  trampoline: [
    {url: trampoline_1}, {url: trampoline_2}, {url:trampoline_3}, {url:trampoline_4}, {url:trampoline_5}, {url:trampoline_6}, {url:trampoline_7}
  ],





}

export default function rootReducer(state = initialState, action) {
  return state
}
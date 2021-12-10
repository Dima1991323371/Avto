import React from 'react';
import "./App.scss";
import pnp from './pnp.png';
import Car from './Car.jpg';
import telegram from './telegram.png';
import instagram from './instagram.png';
import electriccar from './electriccar.png';
import salary from './salary.png';
import pngwing7 from './pngwing7.png';
import pngwing6 from './pngwing6.png';
function App() {
  

 
  return (
    <div className="App">
        <img src={Car} alt="" class="pnb"></img>
        <img src={Car} alt="" class="pnb1"></img>
       <div class="global">
     
      <header>
        <div class="container">
        <img src={electriccar} alt="" class="electriccar"></img>
          <img src={salary} alt="" class="salary"></img>
        <h1>Выкуп авто</h1>

        </div>
       

      </header>
      <div class="modal">
  <div class="modal_cli">
  <form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>
  </form>
    </div>
    
  </div>
      <div class="bloc">
          <div class="bloc_block">
          <button class="combo" id="combo" >Оставить заявку</button>
          <button class="combo1" id="combo1">Контакты</button>
          <button class="combo2" id="combo2">Онас</button>
          </div>
          </div>
          <img src={pnp} alt="" class="pnj"></img>
         
          <div class="slayd">
          <div class="slayd_mec">
          <h2>Срочный выкуп авто</h2>
          <p>Выкупаем быстро и поадекватным ценам можем помочь
            с обменом вашего авто на приемлемых для вас условиях
          </p>
          
          </div>
           <div class="slayd_contex">
           <img src={pngwing6} alt="" class="pngwing6"></img>
           
           </div>
         </div>
         <div class="slayd1">
          <h2>Выкуп авто в любом состояние</h2>
          <ul>
          <li class="p">Проблемные документы</li>
          <li class="p">Неростоможеные</li>
         <li class="p">Аварийные Авто</li>
         
         
         <li class="p">Грузовые Авто</li>
         <li class="p">Старые Авто</li>
          </ul>
           <div class="slayd_contex1">
           <img src={pngwing7} alt="" class="pngwing7"></img>
           
           </div>
         </div>
          
          <img src={telegram} alt="" class="telegram"></img>
          <img src={instagram} alt="" class="instagram"></img>
         
        <div class="foot">
          <p class="ler">2021.12.21</p>
          <h3>тел.+380994078433</h3>
        </div>
   
  </div>
  
    </div>
  );
}

export default App;

import React from 'react';
import ReactPlayer from 'react-player/lazy';
import '../landing/LandingPage.css';
import Logo from '../../assets/Logo.png';
import Ilustra from '../../assets/float.svg';



function LandingPage() {
  return (
    <>
     <div id="landing-content" className="first">
        <div className="image-logo">
          <img id="logo" src={Logo} alt="logo escrito resiliência"/>
        </div>

        <div className="text-image">
          <div className="flex-item-1">
            <h3>capacidade do indivíduo lidar com problemas, adaptar-se a mudanças, superar obstáculos ou resistir à pressão de situações adversas - choque, estresse, algum tipo de evento traumático, entre outros.
            </h3>
          </div>  
          
          <div className="flex-item-1">
            <img id="ilustra" src={Ilustra} alt="ilustração" />
          </div>

        </div>          
      </div>
      
      <div id="landing-content" className="second">
        <ReactPlayer id="video" width='1180px' height='704px' url='https://www.youtube.com/watch?v=kcBtrZPIbRs' />
      </div>

      <div id="landing-content" className="third">
        <div id="alignment">
          <p>a resiliência é a soft skill mais importante na  <br/>vida de uma desenvolvedora.<br/><br/>

          as mulheres nos mostram que a resiliência é necessária desde o <br/> momento em que se decide entrar na área de tecnologia. <br/><br/>

          <a href="https://movile.blog/os-desafios-da-mulher-na-area-de-tecnologia/#:~:text=Compartilhe&text=Desde%20pequenas%2C%20as%20mulheres%20s%C3%A3o,mundo%20s%C3%A3o%20do%20sexo%20feminino." target="_blank" rel="noopener noreferrer">dados apontam que apenas 17% dos programadores no mundo <br/> são do sexo feminino.</a> 
          </p>
          <hr/>

          <h2>Desenvolver a resiliência é de extrema relevância no quesito <br/> profissional, pois quem apresenta alta adaptabilidade tende <br/> a não se apavorar diante de mudanças e mantém <br/> flexibilidade cognitiva mesmo em épocas turbulentas.</h2>
        </div>
      </div>
    
      <div id="landing-content" className="fourth">
        <div id="alignment">
          <p>desenvolva a soft skill mais importante <br/> para o mercado</p>

          <form>            
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Seu melhor email" />

            <button type="submit">ENVIAR</button>
          </form>
        </div>

        
      </div>
    </>
  )}

export default LandingPage;

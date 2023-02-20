class FdsBrand extends HTMLElement {

    constructor() {
        super();
        this.name = 'World';
        this.speed = '60s';
        this.heightimg = '100%';
    }

    // component attributes
    static get observedAttributes() {
        return ['name','speed','heightimg'];
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {

        if (oldValue === newValue) return;
        this[ property ] = newValue;
        
    }

    // connect component
    connectedCallback() {
        
        const shadow = this.attachShadow({ mode: 'closed' });

        //List of all of the screens in carousel
        //let screenStore = shadow.querySelectorAll("#carousel-1 .carousel-screen");
        let screens = document.querySelectorAll('.brands img');
        console.log(screens);       
        let images ='';
        for (let i = 0; i < screens.length; i++) {
            const element = screens[i];
            let src = element.src;
            let alt = element.alt;
            images += `<div class="slide"><img src="${src}" alt="${alt}" /></div>`;
            
        }
        console.log(images);

        shadow.innerHTML = `
        <style>
        
          
          @-webkit-keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }
          .slider {
            background: white;
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
            height: ${this.heightimg};
            margin: auto;
            overflow: hidden;
            position: relative;
            width: 100%;           
          }
          .slider::before, .slider::after {
            background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
            content: "";
            height: ${this.heightimg};
            position: absolute;
            width: 200px;
            z-index: 2;
          }
          .slider::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
          }
          .slider::before {
            left: 0;
            top: 0;
          }
          .slider .slide-track {
            -webkit-animation: scroll ${this.speed} linear infinite;
                    animation: scroll ${this.speed} linear infinite;
            display: flex;
            width: calc(250px * 14);
          }
          .slider .slide {
            height: ${this.heightimg};
            width: 250px;           
          }
          .slider .slide img {
            height: ${this.heightimg};
            width: 250px;
            object-fit: contain;
          }
        </style>
        <div class="slider">
            <div class="slide-track">
                ${images}
            </div>
        </div>`;       
        
        
    }
    
  }
  
  // Registrar el componente con el nombre "my-component"
  customElements.define('fds-brands', FdsBrand);  
  
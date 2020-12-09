class FooterTrending extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: #ff7171;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           .footer-trend{
                position: relative;
                height: 50px;
                background-color: #ff7171;
                bottom: 0px;
                margin-bottom: 0px;
                vertical-align: middle;
                text-align: center;
                width:100%;
                line-height: 50px;
          }
       </style>
       <div class="footer-trend"><b>Submission Dicoding - Belajar Fundamental Front-End Web Development</b></div>`;
    }
}

customElements.define("footer-trending", FooterTrending);
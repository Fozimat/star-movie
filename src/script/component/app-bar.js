class AppBar extends HTMLElement {

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
           h2 {
               padding: 16px;
           }

           ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #ff7171;
          }
          
          li {
            float: left;
          }
          
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 23px 25px;
            text-decoration: none;
          }
          
          li a:hover {
            background-color: #ff9a8c;
          }
       </style>
      
       <ul>
            <li><h2>Star Movie</h2></li>
            <li><a href="index.html"><b>Cari Film</b></a></li>
            <li><a href="semua.html"><b>Trending Film</b></a></li>
        </ul>`;
    }
}

customElements.define("app-bar", AppBar);
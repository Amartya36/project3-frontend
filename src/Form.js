import React from "react";
import "./index.css"

class Converter extends React.Component {
    constructor() {
      super();
      this.state = {
        input: '',
        showParagraph: false,
        showParagraph2:false,
        showvalue:""
      };
    }


    render() {
      return (

        <div>
           <center><h2 id="heading">convert string into UpperCase or Lowercase</h2></center>
          <textarea id="textarea" placeholder="type here..."
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <br />

         
          <div id="buttons">
          <button 
            onClick={() => {
              this.setState({
                showParagraph: !this.state.showParagraph,
              });
            }}
          >
            Display in uppercase
          </button>

        
          <button 
            onClick={() => {
              this.setState({
                showParagraph2: !this.state.showParagraph2,
              });
            }}
          >
            Display in lowercase
          </button>

          
          </div>
          {this.state.showParagraph && this.state.input!=="" &&<p  id="uppercase"> toUpperCase => { this.state.input.toUpperCase() }</p>}
          {this.state.showParagraph2 &&this.state.input!=="" && <p id="lowercase"> toLowerCase => {this.state.input.toLowerCase()}</p> }
        </div>
      );
    }
  }

  export default Converter;
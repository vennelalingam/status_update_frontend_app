import React, { Component } from "react"
import './App.css';
import DisplayMessageList from "./DisplayMessageList";
import PostMessage from "./PostMessage";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: "",
      postedMessages: [
        'Message 1',
        'Message 2',
        'Message 3',
        'Message 4',
        'Message 5'
      ]
    } 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // get the value of typed message from state 
    // and append it inside postedMessages array
    if( this.state.typedText.trim() ) {
      let newMessage = [this.state.typedText, ...this.state.postedMessages];
      this.setState({
        typedText: "",
        postedMessages: newMessage
      })
    }
    console.log("React Frontend Developer")
  }

  textOnChange = (event) => {
    this.setState({
      typedText: event.target.value
    })
    console.log(event.target.value);
  }

  deleteMsg = (i) => {
    let saveMsg = [...this.state.postedMessages];
    saveMsg.splice(i, 1);
    this.setState({
      postedMessages: saveMsg
    })
    // console.log(key)
  }
  
  render() {
    console.log(this.state.postedMessages)
    console.log("From State:", this.state.typedText);
    return (
      <div className="App">
        <div className="wrapper">
          <h3 className="app-title">Status Update App - ReactJs Class & Functional Components</h3>
          {/* Form - TextArea */}
          
          <PostMessage 
            handleSubmit={ this.handleSubmit }
            textOnChange={(event) => this.textOnChange(event) }
            textValue={this.state.typedText}
          />
          {/* {(this.state.typedText) &&  } : alert("Type text to post message") */}
          
          {/* posted messages list  and flex delete post */}
          <DisplayMessageList 
            messages={this.state.postedMessages}
            deleteMsg={ i => this.deleteMsg(i) }
          />
        </div>
      </div>
    );
  }  
}

export default App;

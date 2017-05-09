import React, { Component } from 'react';
import classNames from 'classnames';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfMakeUnicode from 'pdfmake-unicode';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      text: 'Write your unicode text here, make it bold and/or italic style and hit preview button...',
      bold: false,
      italics: false,
      preview: false
    };

    this.docDefinition = {
      content: this.state
    };

    // this part is crucial
    pdfMake.vfs = pdfMakeUnicode.pdfMake.vfs;
  }

  download = () => {

    this.docDefinition = {
      content: this.state
    };

    pdfMake.createPdf(this.docDefinition).download('filename.pdf');
  };


  preview = () => {

    this.docDefinition = {
      content: this.state
    };

    this.setState({
      preview: true
    });

    pdfMake.createPdf(this.docDefinition).getDataUrl(function (dataUrl) {
      let targetElement = document.querySelector('#iframeContainer');
      let frame = document.createElement('iframe');
      frame.src = dataUrl;
      targetElement.innerHTML = '';
      targetElement.appendChild(frame);
    });
  };

  toggleItalics = () => {
    this.setState({
      italics: !this.state.italics
    });

  };

  toggleBold = () => {
    this.setState({
      bold: !this.state.bold
    });
  };

  changeText = (e) => {
    this.setState({text: e.target.value});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PDFMake Unicode</h2>
          <p>Support Unicode Characters in PDFMake library</p>
        </div>
        <div className="App-content">
          <div className="App-editor">
            <div className="App-editor-buttons">
              <div>
                <button className={classNames('App-button', {'is-active': this.state.bold})}
                        onClick={this.toggleBold}>
                  Bold
                </button>
                <button className={classNames('App-button', {'is-active': this.state.italics})}
                        onClick={this.toggleItalics}>Italic
                </button>
              </div>
              <div>
                <button className="App-button" onClick={this.preview}>Preview</button>
                <button className="App-button" onClick={this.download}>Download</button>
              </div>
            </div>
            <textarea className={classNames({'is-bold': this.state.bold, 'is-italic': this.state.italics})}
                      onChange={this.changeText} value={this.state.text}/>
          </div>
          <div className={classNames({
            'App-preview': true, 'is-active': this.state.preview
          })} id="iframeContainer">
          </div>
        </div>
        <div className="App-footer">
          Created with ❤️ by <a href="https://github.com/Landish/" target="_blank">Landish</a>
        </div>
      </div>
    );
  }
}

export default App;

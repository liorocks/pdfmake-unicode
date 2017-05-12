import React, { Component } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfMakeUnicode from 'pdfmake-unicode';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      text: 'Write your unicode text here, make it bold and/or italic style and hit preview button...',
      bold: false,
      italics: false,
      preview: false,
      previewData: ''
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

    pdfMake.createPdf(this.docDefinition)
      .getDataUrl(dataUrl => {
        this.setState({
          previewData: dataUrl,
          preview: true
        });
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
        <Header />
        <Content>
          <Editor
            text={this.state.text}
            onText={this.changeText}
            onBold={this.toggleBold}
            onItalics={this.toggleItalics}
            onDownload={this.download}
            onPreview={this.preview}
            bold={this.state.bold}
            italics={this.state.italics}
          />
          <Preview
            preview={this.state.preview}
            data={this.state.previewData}
          />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;

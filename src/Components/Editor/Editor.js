import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../Button/Button';
import './Editor.css';

const Editor = ({bold, italics, text, onText, onBold, onItalics, onPreview, onDownload}) => {
  return (
    <div className="Editor">
      <div className="Editor-buttons">
        <div>
          <Button text={'Bold'} onClick={onBold} active={bold}/>
          <Button text={'Italic'} onClick={onItalics} active={italics}/>
        </div>
        <div>
          <Button text={'Preview'} onClick={onPreview}/>
          <Button text={'Download'} onClick={onDownload}/>
        </div>
      </div>
      <textarea className={cn({'is-bold': bold, 'is-italic': italics})}
                onChange={onText} value={text}/>
    </div>
  );
};

Editor.propTypes = {
  bold: PropTypes.bool,
  italics: PropTypes.bool,
  text: PropTypes.string,
  onText: PropTypes.func,
  onBold: PropTypes.func,
  onItalics: PropTypes.func,
  onPreview: PropTypes.func,
  onDownload: PropTypes.func
};

export default Editor;

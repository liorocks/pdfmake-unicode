import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Button.css';

const Button = ({onClick, text, active}) => {
  return (
    <button className={cn('Button', {'is-active': active})}
            onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;

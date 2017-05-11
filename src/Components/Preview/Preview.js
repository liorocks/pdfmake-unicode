import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Preview.css'


const Preview = ({preview, data}) => {

  return (
    <div className={cn({'Preview': true, 'is-active': preview})}>
      {data && <iframe src={data}/>}
    </div>
  );
};

Preview.propTypes = {
  preview: PropTypes.bool,
  data: PropTypes.string
};

export default Preview;

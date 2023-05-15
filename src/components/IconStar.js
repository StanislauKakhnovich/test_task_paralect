import React from 'react';
import Star_1 from '../images/Star_1.svg';

function IconStar({name, color, size, className}) {

  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${Star_1}#icon-${name}`} />
    </svg>
  )
}

export default IconStar;
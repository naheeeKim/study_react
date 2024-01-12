import { useState } from 'react';
import styles from "./Button.module.scss";




export default function Button ({
    color,
    size,
    type,
    tag,
    children,
    href,
    target,
    download,
    hoverText,
    hoverType,
    borderColor
}){
    const Tagtype = tag  ? tag : 'button'
    


    return (
      <>
        <span className={`${styles['btn-wrap']}`}>
          <Tagtype 
              className={`${styles.btn}`} 
              data-color={color} 
              data-size={size} 
              data-type={type}
              data-hover-type={hoverType}
              data-hover-text={hoverText}
              data-border-color={borderColor}
              href={href}
              target={target}
              {...(download && { download: true })}
              >
              {children}
          </Tagtype>
        </span>
      </>
    );
}
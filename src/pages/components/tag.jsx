import styles from "./Tag.module.scss";

export default function Tag({children,color,size,type,tag,onclick,className}) { 
  const Tagtype = tag  ? tag : 'span'
    return (
      <>
        <Tagtype className={`${styles.tag} ${className}`} data-color={color} data-size={size} data-type={type} onClick={onclick}>{children}</Tagtype>
      </>
    );
}
  
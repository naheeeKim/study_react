import styles from "./Tag.module.scss";

export default function Tag({children,color,size,type,tag,onclick}) { 
  const Tagtype = tag  ? tag : 'span'
    return (
      <>
        <Tagtype className={`${styles.tag}`} data-color={color} data-size={size} data-type={type} onClick={onclick}>{children}</Tagtype>
      </>
    );
}
  
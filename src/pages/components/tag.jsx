import '../../style/components/tag.scss';


export default function Tag({children,color,disabled,size}) { 
    return (
      <>
        <span className='tag' data-color={color} data-disabled={disabled} data-size={size}>{children}</span>
      </>
    );
}
  
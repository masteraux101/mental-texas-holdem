import React, {ImgHTMLAttributes} from 'react';

type AvatarProperties =
  Pick<ImgHTMLAttributes<HTMLImageElement>,
    'alt' | 'src' | 'className' | 'title'> & {
  highlight?: boolean;
};

export const PLACEHOLDER_SRC = `${process.env.PUBLIC_URL}/avatar-placeholder.svg`

export default function Avatar(props: AvatarProperties) {
  const {
    alt,
    src,
    ...otherAttributes
  } = props;


  return (
    <div className={props.highlight ? 'avatar highlight' : 'avatar'}>
      <img 
      alt={props.alt ?? "Avatar"} src={PLACEHOLDER_SRC} {...otherAttributes} />
    </div>
  );
}

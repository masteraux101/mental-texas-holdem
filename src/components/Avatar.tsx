import React, {ImgHTMLAttributes} from 'react';
import {getAvatarSrcByPlayerId} from '../lib/avatarColor';

type AvatarProperties =
  Pick<ImgHTMLAttributes<HTMLImageElement>,
    'alt' | 'src' | 'className' | 'title'> & {
  highlight?: boolean;
  playerId?: string;
};

export const PLACEHOLDER_SRC = `${process.env.PUBLIC_URL}/avatar-placeholder.svg`

export default function Avatar(props: AvatarProperties) {
  const {
    alt,
    src,
    playerId,
    highlight,
    ...otherAttributes
  } = props;

  // 根据playerId确定头像源，如果没有playerId则使用默认
  const avatarSrc = playerId ? getAvatarSrcByPlayerId(playerId) : PLACEHOLDER_SRC;

  return (
    <div className={highlight ? 'avatar highlight' : 'avatar'}>
      <img 
      alt={alt ?? "Avatar"} src={avatarSrc} {...otherAttributes} />
    </div>
  );
}

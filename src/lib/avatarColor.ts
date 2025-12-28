/**
 * 根据playerId确定性地选择头像颜色
 * 保证同一个playerId始终对应相同的颜色
 */

const AVATAR_COLORS = [
  'yellow',
  'green',
  'red',
  'purple',
  'blue',
  'pink',
  'peach',
  'mint',
];

export function getAvatarColorByPlayerId(playerId: string): string {
  // 将playerId转换为哈希值
  let hash = 0;
  for (let i = 0; i < playerId.length; i++) {
    const char = playerId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 转换为32位整数
  }
  
  // 使用哈希值选择颜色索引
  const index = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

export function getAvatarSrcByPlayerId(playerId: string): string {
  const color = getAvatarColorByPlayerId(playerId);
  // 默认的placeholder或指定颜色的placeholder
  if (color === 'yellow') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-yellow.svg`;
  } else if (color === 'green') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-green.svg`;
  } else if (color === 'red') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-red.svg`;
  } else if (color === 'purple') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-purple.svg`;
  } else if (color === 'blue') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-blue.svg`;
  } else if (color === 'pink') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-pink.svg`;
  } else if (color === 'peach') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-peach.svg`;
  } else if (color === 'mint') {
    return `${process.env.PUBLIC_URL}/avatar-placeholder-mint.svg`;
  }
  return `${process.env.PUBLIC_URL}/avatar-placeholder.svg`;
}

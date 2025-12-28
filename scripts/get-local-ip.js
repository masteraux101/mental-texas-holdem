const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  
  // 优先获取IPv4地址，跳过本地环回地址
  for (const name of Object.keys(interfaces)) {
    const ifaces = interfaces[name];
    
    for (const iface of ifaces) {
      // 跳过IPv6和内部地址
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  
  // 备选方案：返回localhost
  return 'localhost';
}

console.log(getLocalIP());

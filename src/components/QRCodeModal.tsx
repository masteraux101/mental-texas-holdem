import QRCode from 'qrcode.react';

export default function QRCodeModal(props: {
  link: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { link, isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  const handleDownload = () => {
    const element = document.getElementById('qrcode-to-download') as any;
    if (element) {
      const canvas = element.querySelector('canvas');
      if (canvas) {
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = url;
        link.download = 'game-invite-qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="qrcode-modal-overlay" onClick={onClose}>
      <div className="qrcode-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="qrcode-modal-header">
          <h2>Invite via QR Code</h2>
          <button 
            className="qrcode-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        
        <div className="qrcode-modal-body">
          <div id="qrcode-to-download" className="qrcode-container">
            <QRCode 
              value={link} 
              size={256}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>
          
          <p className="qrcode-hint">
            Scan this QR code to open the game invite link
          </p>
          
          <div className="qrcode-link-display">
            <p className="qrcode-link-label">Link:</p>
            <input 
              type="text"
              readOnly
              value={link}
              className="qrcode-link-input"
              onClick={(e) => e.currentTarget.select()}
            />
          </div>
        </div>

        <div className="qrcode-modal-footer">
          <button 
            className="qrcode-download-btn"
            onClick={handleDownload}
          >
            📥 Download QR Code
          </button>
          <button 
            className="qrcode-close-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

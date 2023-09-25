import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCodeGenerator({ url }) {
  // Reference to the container holding the QR code canvas
  const containerRef = useRef(null);

  // Handle the downloading of the QR code as an image
  const handleDownload = () => {
    const container = containerRef.current;
    if (container) {
      // Find the canvas element inside the container
      const canvas = container.querySelector('canvas');
      if (canvas) {
        // Convert the canvas content to a PNG data URL
        const imageURI = canvas.toDataURL("image/png");
        
        // Create a temporary link to trigger the download
        const link = document.createElement('a');
        link.href = imageURI;
        link.download = 'QRCode.png';
        
        // Append the link to the body and simulate a click to start the download
        document.body.appendChild(link);
        link.click();
        
        // Remove the link after download
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div>
      {/* Generate and display the QR code if a URL is provided */}
      {url && 
        <div>
          <div ref={containerRef}>
            <QRCodeCanvas
              value={url}
              size={512}
              bgColor="#ffffff"
              fgColor="#000000"
              level="M" 
              includeMargin={true}
              margin={10} 
            />
          </div>
          
          {/* Button to trigger the QR code download */}
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={handleDownload}>
            Download QR Code
          </button>
        </div>
      }
    </div>
  );
}

export default QRCodeGenerator;

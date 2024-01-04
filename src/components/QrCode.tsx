import { WiFiCredencialsModel } from 'model/WiFiCredencialsModel'
import { isEmpty } from 'lodash'
import { generateWifiQR } from 'utils'
import { useRef } from 'react'
import QRCode from 'qrcode.react'
import domtoimage from 'dom-to-image'

function QrCode({ ssid, securityType, password }: WiFiCredencialsModel) {
  if (isEmpty(ssid) || isEmpty(securityType) || isEmpty(password)) return <></>

  const qrRef = useRef(null)

  const downloadQRCode = () => {
    if (qrRef.current !== null) {
      domtoimage
        .toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.href = dataUrl
          link.download = 'wifi_qr_code.png'
          link.click()
        })
        .catch((error) => {
          console.error('Erro ao gerar QR Code:', error)
        })
    }
  }

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-2">Código QR:</h3>
      <div ref={qrRef}>
        <QRCode
          value={generateWifiQR({ ssid, securityType, password })}
          size={250}
        />
      </div>

      <button
        onClick={downloadQRCode}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
      >
        Baixar QR Code
      </button>
    </div>
  )
}

export default QrCode

import { ChangeEvent, useState } from 'react'
import { WiFiCredencialsModel } from 'model/WiFiCredencialsModel'
import QrCode from './QrCode'

function App() {
  const [stateForm, setStateForm] = useState<WiFiCredencialsModel>({
    ssid: '',
    password: '',
    securityType: ''
  })

  const handleChangeForm = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStateForm((state) => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className="max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Gerador de QR Code para Wi-Fi</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="ssid" className="block mb-1">
            SSID da Rede:
          </label>
          <input
            type="text"
            id="ssid"
            className="w-full border rounded-md px-3 py-2"
            value={stateForm.ssid}
            name="ssid"
            onChange={handleChangeForm}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md px-3 py-2"
            value={stateForm.password}
            name="password"
            onChange={handleChangeForm}
          />
        </div>

        <div>
          <label htmlFor="securityType" className="block mb-1">
            Tipo de Segurança:
          </label>
          <select
            id="securityType"
            className="w-full border rounded-md px-3 py-2"
            value={stateForm.securityType}
            name="securityType"
            onChange={handleChangeForm}
          >
            <option value="" className="text-black"></option>
            <option value="WPA" className="text-black">
              WPA
            </option>
            <option value="WPA2" className="text-black">
              WPA2
            </option>
            <option value="WEP" className="text-black">
              WEP
            </option>
            <option value="Nenhum" className="text-black">
              Nenhum (Não Recomendado)
            </option>
          </select>
        </div>
      </form>

      <div className="flex justify-center">
        <QrCode {...stateForm} />
      </div>
    </div>
  )
}

export default App

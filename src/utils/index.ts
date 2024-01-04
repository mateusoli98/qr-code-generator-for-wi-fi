import { WiFiCredencialsModel } from "model/WiFiCredencialsModel"

export const generateWifiQR = ({ ssid, password, securityType }: WiFiCredencialsModel) => {
    const wifiData = `WIFI:S:${ssid};T:${securityType};P:${password};`

    return wifiData
}

import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('Should be renders input fields', () => {
    const { getByLabelText } = render(<App />)
    const ssidInput = getByLabelText('SSID da Rede:')
    const passwordInput = getByLabelText('Senha:')
    const securityTypeSelect = getByLabelText('Tipo de Segurança:')

    expect(ssidInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(securityTypeSelect).toBeInTheDocument()
  })

  it('Should be initial state is set correctly', () => {
    const { getByLabelText } = render(<App />)
    const ssidInput = getByLabelText('SSID da Rede:') as HTMLInputElement
    const passwordInput = getByLabelText('Senha:') as HTMLInputElement
    const securityTypeSelect = getByLabelText(
      'Tipo de Segurança:'
    ) as HTMLSelectElement

    expect(ssidInput.value).toBe('')
    expect(passwordInput.value).toBe('')
    expect(securityTypeSelect.value).toBe('WPA')
  })
})

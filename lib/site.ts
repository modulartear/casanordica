export const SITE = {
  name: 'Casa Nórdica',
  whatsapp: '5491100000000',
  whatsappLabel: '+54 9 11 0000-0000',
  phoneLabel: '+54 11 0000-0000',
  email: 'hola@casanordica.com.ar',
  address: 'Tu dirección de showroom, CABA',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

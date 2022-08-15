import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'
const Informations = [
  {
    name: 'Telefone',
    value: '(15) 991644070',
    icon: <AiFillPhone />,
    id: 'phone-icon'
  },
  {
    name: 'Email',
    value: 'vini383@gmail.com',
    icon: <AiOutlineMail />,
    id: 'email-icon'
  },
  {
    name: 'Localização',
    value: 'Laranjal Paulista/SP',
    icon: <AiFillEnvironment />,
    id: 'pin-icon'
  }
]
function InformationContainer() {
  return (
    <section id="information">
      {Informations.map(info => (
        <div className="info-card">
          <a id={info.id}>{info.icon}</a>

          <div>
            <h3>{info.name}</h3>
            <p>{info.value}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default InformationContainer

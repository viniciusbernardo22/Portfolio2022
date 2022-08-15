import '../styles/components/socialnetworks.sass'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
const socialNetworks = [
  {
    name: 'linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/vin%C3%ADcius-bernardo-97b45a164/'
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/viniciusbernardo22'
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/whatsup_its_vini/'
  }
]

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialNetworks.map(network => (
        <a
          href={network.url}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks

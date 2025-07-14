import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'
import { getEmailPhone, getContact } from '@/widgets/footer/api'
import { getImageUrl } from '@/shared/utils/getImageUrl'

const Footer = async () => {
  const [socials, contact] = await Promise.all([
    getContact(),
    getEmailPhone()
  ])
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <Link href="/" className="footer__logo-image">
            <Image src="/logo-footer.webp" alt="Улицы России" width={364} height={97} />
          </Link>
          <div className="footer__logo-text">
            общероссийская общественная организация
            <br />
            уличной культуры и спорта
          </div>
        </div>

        <div className="footer__legal">
          ОГРН: 1217700519101, ИНН: 2636219592
        </div>

        <div className="footer__contacts">
          <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer"
             className="footer__email">{contact.email}</a>
          <a href={`tel:${contact.phone}`} target="_blank" rel="noopener noreferrer"
             className="footer__phone">{contact.phone}</a>
          <div className="footer__socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <Image src={getImageUrl(social.image)} width={42} height={42} alt={`Социальная сеть №${index + 1}`}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

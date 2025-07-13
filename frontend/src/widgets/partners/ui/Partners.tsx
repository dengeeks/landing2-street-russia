import './Partners.css'
import SectionTitle from '@/shared/ui/SectionTitle'
import PartnersResponsive from './internal'
import { getPartners } from '../api/getPartners'

const Partners = async () => {
  const partnersData = await getPartners()

  if (partnersData.length === 0) {
    return null
  }

  return (
    <section className="container partners-section section-spacing-top" id="partners">
      <SectionTitle>ПАРТНЁРЫ</SectionTitle>
      <PartnersResponsive data={partnersData} />
    </section>
  )
}

export default Partners

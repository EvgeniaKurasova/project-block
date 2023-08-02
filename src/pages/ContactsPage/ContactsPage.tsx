import React from 'react'
import Header2 from 'Conteiner/Header2/Header2'
import ContactTitlePart from 'components/ContactTitlePart/ContactTitlePart'
import ContactChefPart from 'components/ContactChefPart/ContactChefPart'
import ContactSubmit from 'components/ContactSubmit/ContactSubmit'
import FooterVarTwo from 'components/FooterVarTwo/FooterVarTwo'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ContactsPage = (props: Props) => {
  return (
    <div className='container-block'>
      <Header2/>
      <ContactTitlePart/>
      <ContactChefPart/>
      <ContactSubmit/>
      <FooterVarTwo/>
    </div>
  )
}
export default ContactsPage

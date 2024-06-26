'use client'
import s from './styles.module.css'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { Logo, ContactLink, Burger } from '@/components/atoms'
import { Navbar } from '@/components/molecules'
import { useStoreMobileMenu } from '@/store'

export const Header = () => {
  const { isOpen, setOpen } = useStoreMobileMenu()
  const onClickBurger = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={s.wrapper}>
      <div className={s.bottom}>
        <div className={'container'}>
          <div className={s.bottomInner}>
            <Logo className={s.logo} color={'default'} />
            <Navbar className={s.navbar} />
            <div className={s.links}>
              <ContactLink text={phoneNumbers[0]} link={`tel:${phoneNumbers[0]}`} />
              <ContactLink link={`mailto:${mail}`} text={mail} />
            </div>
            <Burger className={s.burger} onClick={() => onClickBurger()} />
          </div>
        </div>
      </div>
    </header>
  )
}

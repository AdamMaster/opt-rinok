import { FC, ReactNode } from 'react'
import s from './styles.module.css'
import { ContactLink, Heading } from '@/components/atoms'
import { mail, phoneNumbers } from '@/shared/constants/constants'

interface Props {
  className?: string
}

interface Item {
  id: number
  label: string
  children: string | ReactNode
}

export const Contacts: FC<Props> = ({ className }) => {
  const listItems = [
    {
      id: 1,
      label: 'юр. адрес:',
      children: '361531, Россия, Кабардино-Балкарская Республика, г. Баксан, ул. Гагарина 2/7 с.15, помещение 19'
    },
    {
      id: 2,
      label: 'телефон:',
      children: <ContactLink text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} />
    },
    {
      id: 3,
      label: 'e-mail:',
      children: <ContactLink link={`mailto:${mail}`} text={mail} />
    }
  ]

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`} id='contacts'>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.grid}>
            <div className={s.content}>
              <Heading className={s.title} level={'h2'}>
                Контакты
              </Heading>
              <div className={s.list}>
                {listItems.map((item: Item) => (
                  <div className={s.item} key={item.id}>
                    <div className={s.itemKey}>{item.label}</div>
                    <div className={s.itemValue}>{item.children}</div>
                  </div>
                ))}
              </div>
              <div className={s.workSchedule}>Режим работы: Пн-Пт : с 8:00 до 19:00</div>
            </div>
            <div className={s.map}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

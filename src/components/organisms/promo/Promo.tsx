import Image from 'next/image'
import s from './styles.module.css'
import { Button } from '@/components/atoms'
import { FC } from 'react'
import { useStoreModal } from '@/store'
import { Feedback } from '@/components/modal/contents'

interface Props {
  className?: string
}

export const Promo: FC<Props> = ({ className }) => {
  const { setOpen } = useStoreModal()
  const handleClickButton = () => {
    setOpen(<Feedback />)
  }

  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <Image className={s.bg} alt={'promo-bg'} src={'/images/promo-bg.jpg'} layout={'fill'} objectFit={'cover'} />
      <div className={'container'}>
        <div className={s.inner}>
          <h1 className={s.title}>Офощи и фрукты</h1>
          <div className={s.subtitle}>
            Оптовая продажа овощей и фруктов <br /> от надежных производителей{' '}
            <span className={'highlight'}>по всей стране</span>
          </div>
          <Button className={s.button} color={'white'} onClick={() => handleClickButton()}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  )
}
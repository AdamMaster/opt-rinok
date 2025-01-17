import Image from 'next/image'
import s from './styles.module.css'
import { Button } from '@/components/atoms'
import { FC } from 'react'

interface Props {
  className?: string
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <Image
        className={s.bg}
        alt={'яблоки фура'}
        src={'/images/promo-bg.jpg'}
        layout={'fill'}
        objectFit={'cover'}
        loading='eager'
      />
      <div className={'container'}>
        <div className={s.inner}>
          <h1 className={s.title}>Яблоки оптом</h1>
          <div className={s.subtitle}>разных сортов и калибров</div>
          <div className={s.devider}></div>
          <div className={s.otherTitle}>От надежных производителей по всей стране</div>
          <div className={s.otherTitle}>
            Заказы принимаются <span className={'highlight'}>от 10 тон</span>
          </div>
          <Button className={s.button} color={'white'} link='#catalog'>
            Перейти в каталог
          </Button>
        </div>
      </div>
    </section>
  )
}

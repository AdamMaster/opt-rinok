'use client'
import { useStoreModal } from '@/store'
import s from './styles.module.css'
import { Icon } from '../atoms'
import { useEffect, useRef } from 'react'

export const Modal = () => {
  const { isOpen, children, setClose } = useStoreModal()
  const wrapperClassNames = `${s.wrapper} ${isOpen ? s.show : ''}`
  const containerClassNames = `${s.container} ${isOpen ? s.smooth : ''}`
  const wrapper = useRef(null)

  useEffect(() => {
    const onClickDocument = (e: MouseEvent) => {
      if (wrapper.current && e.target === wrapper.current) {
        setClose()
      }
    }

    const onEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setClose()
      }
    }

    document.addEventListener('mousedown', onClickDocument)
    document.addEventListener('keydown', onEscapeKeyDown)

    return () => {
      document.removeEventListener('mousedown', onClickDocument)
      document.removeEventListener('keydown', onEscapeKeyDown)
    }
  }, [])

  // useEffect(() => {
  //   if (isOpen) {
  //     document.documentElement.style.scrollbarGutter = 'stable'
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.documentElement.style.scrollbarGutter = ''
  //     document.body.style.overflow = ''
  //   }
  // }, [isOpen])

  return (
    <div className={wrapperClassNames} ref={wrapper}>
      <div className={containerClassNames}>
        <button className={s.closeButton} onClick={() => setClose()}>
          <Icon id='close' />
        </button>
        {children}
      </div>
    </div>
  )
}

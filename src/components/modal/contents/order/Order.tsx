'use client'
import { Button, Field, Heading } from '@/components/atoms'
import s from './styles.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FC, useEffect } from 'react'
import { useStoreModal } from '@/store'

interface FormProps {
  name?: string
  phone?: string
  city?: string
  productName: string
}

interface Props {
  productFullName: string
}

export const Order: FC<Props> = ({ productFullName }) => {
  const { isOpen } = useStoreModal()
  const { register, setValue, formState, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      productName: productFullName
    }
  })
  const { errors } = formState
  const submit: SubmitHandler<FormProps> = data => {
    console.log(data)
  }

  return (
    <div className={s.wrapper}>
      <Heading className={s.title} level='h3'>
        Оставить заявку
      </Heading>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <div className='fields'>
          <Field
            className={`${s.field} ${errors.name ? 'not-valid' : ''}`}
            id='name'
            placeholder='Имя'
            {...register('name', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('name', value)
            }}
          />
          <Field
            className={`${s.field} ${errors.phone ? 'not-valid' : ''}`}
            mode='phone'
            id='phone'
            placeholder='Телефон'
            {...register('phone', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('phone', value)
            }}
          />
          <Field
            className={`${s.field} ${errors.city ? 'not-valid' : ''}`}
            id='city'
            placeholder='Город'
            {...register('city', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
            onChangeValue={value => {
              setValue('city', value)
            }}
          />
          <Field
            className={s.field}
            id='product-name'
            label='Наименование продукта'
            {...register('productName')}
            readOnly
          />
        </div>
        <Button className={s.button} type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  )
}

import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
      clearInterval(timerId)//Функция clearInterval останавливает таймер, заданный функцией setInterval. принимает идентификатор того таймера, который нужно остановить.
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime =date?.toLocaleTimeString()||<br/>
    const stringDate =date?.toLocaleDateString()||<br/>

    return (
        <div>
            <div className={s.clock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ?  (
                <div className={s.clock}>
                    {stringDate}
                </div>
            ):(
                <div  className={s.clock} />
                )
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

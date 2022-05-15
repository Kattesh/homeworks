import {ChangeEvent, useState} from 'react'

export function ColorPicker() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const sx = {
        background: `rgb(${red},${green},${blue})`,
        height: 100,
        width:100
    }

    const onInput1 = (e: ChangeEvent<HTMLInputElement>) => {
        setRed(+e.target.value)
    }
    const onInput2= (e: ChangeEvent<HTMLInputElement>) => {
        setGreen(+e.target.value)
    }
    const onInput3= (e: ChangeEvent<HTMLInputElement>) => {
        setBlue(+e.target.value)
    }
    return (
        <div>
            <div style={sx} />
            <div>
                <input type="range" max={255} onInput={onInput1}  />
                <input type="range" max={255} onInput={onInput2}/>
                <input type="range" max={255} onInput={onInput3}/>
            </div>
        </div>
    )
}
import React, {ChangeEvent, useEffect, useState} from 'react'
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?:number
    max?:number
    step?:number
    disabled?:boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {

    const initMin = min ? min : 0;
    const initMax = max ? max : 100;
    const stepValue = step ? step : 1;
    const initMinValue = value ? value[0] : initMin;
    const initMaxValue = value ? value[1] : initMax;

    const [minValue, setMinValue] = useState(initMinValue);
    const [maxValue, setMaxValue] = useState(initMaxValue);

    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+e.currentTarget.value, maxValue);
        setMinValue(value);
        onChangeRange && onChangeRange([value, maxValue]);
    };

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+e.currentTarget.value, minValue);
        setMaxValue(value);
        onChangeRange && onChangeRange([minValue, value]);
    };

    useEffect(() => {
        if (initMinValue <= maxValue && !disabled) setMinValue(initMinValue);
    }, [initMinValue, maxValue, disabled]);



    return (
        <div className={s.doubleRange}>
            <div className={s.doubleRangeTrack}/>
            <input
                type={"range"}
                value={minValue}
                onChange={onMinValueChange}
                className={s.doubleRangeThumb}
                // style={{zIndex: minValue === maxValue ? 1 : 0}}
                style={{zIndex: maxValue === minValue ? 0 : 1}}
                min={initMin}
                max={initMax}
                step={stepValue}
                disabled={disabled}
            />
            <input
                type={"range"}
                value={maxValue}
                onChange={onMaxValueChange}
                className={`${s.doubleRangeThumb} ${s.doubleRangeRightThumb}`}
                min={initMin}
                max={initMax}
                step={stepValue}
                disabled={disabled}
            />
        </div>
    );
}

export default SuperDoubleRange;

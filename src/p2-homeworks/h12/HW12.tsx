import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";
import {ColorPicker} from "../../components/colorPicker/ColorPicker";


const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme));
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />
            {/*<ColorPicker/>*/}
            <hr/>
        </div>
    );
}

export default HW12;

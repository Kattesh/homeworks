import React, {useState} from 'react'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import {testRequest} from "./RequestAPI";
import {Preloader} from "../../components/Preloader/Preloader";
import s from './Request.module.css'

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}

function Request() {

    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [spinnerDisplay, setDisplaySpinner] = useState(false)

    const sendRequest = (value: boolean) => {
        setError('');
        setResponse('');
        setDisplaySpinner(true);

        testRequest<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', value)
            .then(data => {
                setDisplaySpinner(false);
                setResponse(data.info);
            })
            .catch(error => {
                setDisplaySpinner(false);
                setError(error.message);
            })
    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={sendRequest}>Click to send a test request to the server</SuperCheckbox>
            <div style={{margin: '20px 0 5px 0'}} className="sub_header">Response:</div>
            <div className={s.responseSectionStyle}>
                {response && <span style={{fontWeight: '900'}}>{response}</span>}
                {error && <span style={{color: 'red'}}>{error}</span>}
                {spinnerDisplay && <Preloader/>}
            </div>
        </div>
    )
}

export default Request
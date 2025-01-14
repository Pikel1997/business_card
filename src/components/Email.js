import React from 'react'
import {EmailStyled} from '../styled/StyledCard'

const Email = (props) => {
    return (
        <EmailStyled S_col={props.S_col}>
            {props.email}
        </EmailStyled>
    )
}

export default Email

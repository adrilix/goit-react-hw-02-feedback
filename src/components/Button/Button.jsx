import PropTypes from 'prop-types';
import {ButtonStyled} from './ButtonStyled'

const Button = ({children}) => {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,

};

export default Button;
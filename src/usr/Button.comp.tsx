import React from 'react';
import { Button as ButtonCUI } from "@chakra-ui/core";
import { ButtonProps, ButtonTypes } from './Button.props';

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 */
const Button = (props: ButtonProps): JSX.Element => {
    const {
        label
    } = props;

    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        // if (props.onClick) {
        //     props.onClick();
        // }
    };

    return (
        <ButtonCUI
            aria-label={label}
        >
            {label}
        </ButtonCUI>
    );
};

Button.propTypes = ButtonTypes;

Button.defaultProps = {
    label: 'Button',
};

export default Button;

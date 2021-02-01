import React, { FC } from 'react';
import { NUMBERS } from 'typings';

// styles
import { Container } from './Numbers.styles';
import Button from './Button';

const NumbersButton: FC = () => {
    return (
        <Container>
            {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
                <Button key={value} value={value} />
            ))}
        </Container>
    )
}

export default NumbersButton;
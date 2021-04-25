import { render } from '@testing-library/react';
import React from 'react';
import Library from './testlibrary';

test('renders an h1', () => {
    const { getByText } = render(<Library />);
    const h1 = getByText(/Testing react testing library/);
    expect(h1).toHaveTextContent(
        'Testing react testing library'
    );
})
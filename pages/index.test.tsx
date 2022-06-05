import * as React from 'react';
import '@testing-library/jest-dom';
import Home from './index';
import { render, screen } from '@testing-library/react';

describe('Home', function () {
  it('should display Hi mom', function () {
    render(<Home />);
    expect(screen.getByTestId('home'));
  });
});

import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { ButtonVariant } from '../definitions';

describe('<Button />', function () {
  const buttonText = 'Button Text';
  const handleClick = jest.fn();

  test('mounts', function () {
    render(<Button>{buttonText}</Button>);
    expect(screen.getByTestId('button-base'));
  });

  test('mounts w/ default text', function () {
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText));
  });

  test('mounts all button variants', function () {
    const buttonVariants: ButtonVariant[] = [
      'normal',
      'outlined',
      'text',
      'custom',
    ];
    buttonVariants.map((variant) => {
      const { container } = render(
        <Button variant={variant}>{buttonText}</Button>
      );
      const className = container.getElementsByClassName(`btn-${variant}`);
      expect(className.length).toBe(1);
    });
  });

  test('calls onClick prop when clicked', () => {
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    fireEvent.click(screen.getByText(buttonText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick prop when clicked multiple times', () => {
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    fireEvent.click(screen.getByText(buttonText));
    fireEvent.click(screen.getByText(buttonText));
    fireEvent.click(screen.getByText(buttonText));
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});

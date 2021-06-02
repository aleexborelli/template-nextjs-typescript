/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { HomeTemplate } from '.';

describe('Home template', () => {
  it('should be rendered in the document', () => {
    render(<HomeTemplate />);

    expect(screen.getByText('Home template')).toBeInTheDocument();
  });
});

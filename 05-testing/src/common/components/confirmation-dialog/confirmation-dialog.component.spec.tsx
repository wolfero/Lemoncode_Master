import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('confirmation dialog component should', () => {
  const onClose = jest.fn();
  const onAccept = jest.fn();
  const props = {
    isOpen: true,
    onAccept,
    onClose,
    title: 'Test Title',
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: <div>Test Content</div>,
  };

  it('render the title and content', () => {
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    const title = getByText('Test Title');
    const content = getByText('Test Content');

    expect(title && content).toBeInTheDocument();
  });

});

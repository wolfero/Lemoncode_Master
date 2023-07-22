import { renderHook, act } from '@testing-library/react';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog hook should', () => {
  const mockedLookup: Lookup = { id: '1', name: 'Test Item' };

  it('handle opening the dialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    act(() => {
      result.current.onOpenDialog(mockedLookup);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(mockedLookup);
  });
  
  it('handle closing the dialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(mockedLookup);
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });


});

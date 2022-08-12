


//==============================================================================
// Add as you go
//==============================================================================

export interface Item {
    id: string
    name: string
    draggedOver: boolean
  }


//==============================================================================
// Events
//==============================================================================

export type ReactDragEvent = React.DragEvent<HTMLDivElement>

export type ReactMouseEvent =
  | MouseEvent
  | React.MouseEvent<HTMLDivElement>
  | React.ChangeEvent<HTMLSelectElement>

export type ReactSubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.FocusEvent<HTMLInputElement>

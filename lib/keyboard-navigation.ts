// Keyboard navigation utilities
export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
} as const;

export function isKeyboardEvent(
  event: React.KeyboardEvent,
  key: string
): boolean {
  return event.key === key;
}

export function isEnterOrSpace(event: React.KeyboardEvent): boolean {
  return isKeyboardEvent(event, KEYS.ENTER) || isKeyboardEvent(event, KEYS.SPACE);
}

export function handleKeyboardNavigation(
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = [KEYS.ENTER, KEYS.SPACE]
): void {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
}

export function focusNextElement(
  currentElement: HTMLElement,
  selector: string = '[tabindex]:not([tabindex="-1"])'
): void {
  const focusableElements = Array.from(
    document.querySelectorAll(selector)
  ) as HTMLElement[];
  const currentIndex = focusableElements.indexOf(currentElement);
  const nextIndex = (currentIndex + 1) % focusableElements.length;
  focusableElements[nextIndex]?.focus();
}

export function focusPreviousElement(
  currentElement: HTMLElement,
  selector: string = '[tabindex]:not([tabindex="-1"])'
): void {
  const focusableElements = Array.from(
    document.querySelectorAll(selector)
  ) as HTMLElement[];
  const currentIndex = focusableElements.indexOf(currentElement);
  const previousIndex =
    currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
  focusableElements[previousIndex]?.focus();
}

export function trapFocus(
  event: React.KeyboardEvent,
  containerElement: HTMLElement
): void {
  if (event.key !== KEYS.TAB) return;

  const focusableElements = Array.from(
    containerElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ) as HTMLElement[];

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement as HTMLElement;

  if (event.shiftKey) {
    if (activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    if (activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

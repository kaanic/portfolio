import '@testing-library/jest-dom';
import 'vitest-axe/extend-expect';

// @ts-ignore
window.HTMLCanvasElement.prototype.getContext = () => {};
import { add } from './add.js';

export const sum = (...args) => args.reduce(add) || 0;


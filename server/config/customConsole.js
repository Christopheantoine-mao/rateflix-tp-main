import chalk from 'chalk';

// Redefine console.log to use chalk for coloring
const originalLog = console.log;
console.log = (...args) => {
  originalLog(chalk.blue(...args));
};

// Redefine console.warn to use chalk for coloring
const originalWarn = console.warn;
console.warn = (...args) => {
  originalWarn(chalk.yellow(...args));
};

// Redefine console.info to use chalk for coloring
const originalInfo = console.info;
console.info = (...args) => {
  originalInfo(chalk.green(...args));
};

// Redefine console.error to use chalk for coloring
const originalError = console.error;
console.error = (...args) => {
  originalError(chalk.red(...args));
};

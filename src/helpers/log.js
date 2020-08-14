// const now = new Date().getTime();

// while (new Date().getTime() - now <= 5000) {
//   // pauses for 1 second
// }
const log = (...args) => console.log('[HELPER LOG]', ...args);

module.exports = {
  log,
};

export default function canIterate(type) {
  try {
    return typeof type[Symbol.iterator] === 'function';
  } catch (error) {
    return false;
  }
}

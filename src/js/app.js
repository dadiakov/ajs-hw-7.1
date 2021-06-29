export default class Validator {
  static validateUsername(name) {
    return !/[^\w-]/.test(name) && /^[^\d-_][\w-]+[^\d-_]$/.test(name) && !/\d{3,}/.test(name);
  }
}

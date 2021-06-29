export default class Validator {
  static validateUsername(name) {
    if (name.length === 1) {
      return /[a-z]/i.test(name);
    }
    return !/[^\w-]/.test(name) && /^[^\d-_]([\w-]+)?[^\d-_]$/.test(name) && !/\d{3,}/.test(name);
  }
}

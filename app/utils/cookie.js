export default class Cookie {
  constructor() {}

  setItem(name, value, expireDays = 14) {
    const date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  getItem(name) {
    const cookieArr = document.cookie.split(';').map(cookie => cookie.trim());
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i];
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length + 1);
      }
    }
  }

  deleteItem(name, path, domain) {
    if (this.getItem(name)) {
      document.cookie =
        name +
        '=' +
        (path ? ';path=' + path : '') +
        (domain ? ';domain=' + domain : '') +
        ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
  }
}

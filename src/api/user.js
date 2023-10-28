import { post } from '@/utils/request';

export default class User {
  /**
   * 登录接口
   * @param {string} username 用户名
   * @param {string} password 密码
   */
  static async login(username, password) {
    return post('/login', {
      username,
      password,
    });
  }
}

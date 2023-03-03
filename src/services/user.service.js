import axios from '@/network/axios'

class UserService {
  async fetchAll() {
    const resp = await axios.get(`/users`)
    return resp.data
  }
}

export const userService = new UserService()
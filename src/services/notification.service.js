import axios from '@/network/axios'

class NotificationService {
  async fetchAll() {
    const resp = await axios.get(`/notifications`)
    return resp.data
  }

  async store(category_id, { message }) {
    const resp = await axios.post(`/notifications/${category_id}`, { message })
    return resp.data
  } 
}

export const notificationService = new NotificationService()
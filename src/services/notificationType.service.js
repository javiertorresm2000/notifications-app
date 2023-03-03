import axios from '@/network/axios'

class NotificationTypeService {
  async fetchAll() {
    const resp = await axios.get(`/notification_types`)
    return resp.data
  }
}

export const notificationTypeService = new NotificationTypeService()
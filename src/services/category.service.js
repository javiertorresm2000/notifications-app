import axios from '@/network/axios'

class CategoryService {
  async fetchAll() {
    const resp = await axios.get(`/categories`)
    return resp.data
  }
}

export const categoryService = new CategoryService()
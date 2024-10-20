import { api } from '@/lib/axios'

interface getProfileBody {
  id: string
  name: string
  email: string
  phone: string
  role: 'manager' | 'costumer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<getProfileBody>('/me')

  return response.data
}

import { Slices } from '@/constants'
import { RootState } from '../store/store'

export const selectUserId = (state: RootState) => state[Slices.user].userId

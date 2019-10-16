import { createSelector } from 'reselect'

const ROLE = state => state.auth.role

export const get_role = createSelector(ROLE, role => role)
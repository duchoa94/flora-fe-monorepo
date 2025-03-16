export type UserRole = {
    id: number,
    name: string,
}

export const DefaultRoles: UserRole[] = [
    {
        id: 1,
        name: 'ADMIN'
    },
    { id: 2, name: 'ACCOUNTANT' },
    { id: 3, name: 'EMPLOYEE' }
]
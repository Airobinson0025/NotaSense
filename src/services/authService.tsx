import bcrypt from 'bcrypt'

export const verifyPassword = async (plainPassword: string, hashedPassword: string) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}
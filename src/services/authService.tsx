import bcrypt from 'bcrypt'

export const verifyPassword = async (plainPassword: string, hashedPassword: string) => {
    const validPassword = await bcrypt.compare(plainPassword, hashedPassword)

    return validPassword
}
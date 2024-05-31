import { signIn } from "@/auth";
import { Button } from "./button";

type Props = {
  children: React.ReactNode;
}

export default function GoogleSignInButton({ children }: Props) {
  const loginWithGoogle = async () => {
    await signIn('google')
  }

  return (
    <Button onClick={loginWithGoogle} className='w-full'>{children}</Button>
  )
}
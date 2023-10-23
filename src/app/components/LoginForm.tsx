'use client'
import { Button, Input } from "@nextui-org/react"
import { FormEvent, useState } from "react";
import Users, { AuthResponse } from "../admin/users/models/User";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { useRouter } from "next/navigation";
import { Check } from "@mui/icons-material";
import { __ } from "../helpers/Dict";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [loginState, setLoginState] = useState<"primary" | "success" | "danger" | "warning" | undefined>("primary");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const storage = typeof window !== 'undefined' ? window.sessionStorage : null;
    
    Users.authenticate(email, password)
      .then((res) => {
        console.log('Then');
        
        Object.keys(res).forEach((key: string) => {
          storage?.setItem(key, res[key as keyof AuthResponse].toString());
        });
        setLoginState("success");
        router.push('/admin/products');
      }).catch((err) => {
        setLoginState("danger");
        setError(err);
        console.error(err);
      })
      .finally(() => {
        console.log('Finally');
        setLoading(false)
      });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Input type="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} min={6} required />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} min={3} required />
      <Button type="submit" color={loginState} isDisabled={!(email && password)} isLoading={loading}>
        {loginState === "success" ? <Check color="primary" /> : __('Login')}
      </Button>
      {error && <span className="error"></span>}
    </form>
  )
}

export default LoginForm
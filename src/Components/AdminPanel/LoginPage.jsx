import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthCheck } from "./useAuthCheck";
import { Input, Button } from "./Elements";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignIn = async () => {
    try {
      await axios.post("http://localhost:8000/sign-in", { email, password }, {withCredentials: true});
      navigate("/dashboard");
    } catch (error) {
      alert("Ошибка входа");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Вход</h2>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSignIn}>Войти</Button>
      </div>
    </div>
  );
}
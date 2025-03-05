import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  useAuthCheck from "./useAuthCheck";
import { Input, Button } from "./Elements";

export function SignUp() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:8000/sign-up", { login, email, password });
      navigate("/login");
    } catch (error) {
      alert("Ошибка регистрации");
    }
  };

  const isAuthenticated = useAuthCheck();

  if (!isAuthenticated) return null

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Регистрация</h2>
        <Input type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSignUp}>Зарегистрироваться</Button>
      </div>
    </div>
  );
}

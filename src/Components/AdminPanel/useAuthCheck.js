import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthCheck() {
  const navigate = useNavigate();
  const isChecked = useRef(false); // Храним состояние выполнения

  useEffect(() => {
    if (isChecked.current) return; // Если уже вызывалось, прерываем выполнение
    isChecked.current = true;

    const login = prompt("Введите логин:");
    const password = prompt("Введите пароль:");

    if (login !== "admin" || password !== "password") {
      alert("Неверные учетные данные");
      navigate("/");
    }
  }, [navigate]);
}

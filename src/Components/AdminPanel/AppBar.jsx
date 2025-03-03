import { Menu } from "lucide-react";

export default function AppBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 16px",
      background: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Кнопка меню */}
      <button style={{
        background: "none",
        border: "none",
        cursor: "pointer"
      }}>
        <Menu style={{ width: "24px", height: "24px" }} />
      </button>
      
      {/* Аватар профиля */}
      <div style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#ccc",
        fontWeight: "bold",
        fontSize: "18px"
      }}>
        U
      </div>
    </div>
  );
}

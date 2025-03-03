import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Edit, Trash2, FolderOpenDot, PlusCircle } from "lucide-react";
import AppBar from "./AppBar";

export default function RoomsList() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  const numberOptions = [
    ...Array.from({ length: 8 }, (_, i) => 101 + i),
    ...Array.from({ length: 8 }, (_, i) => 201 + i),
    ...Array.from({ length: 8 }, (_, i) => 301 + i),
    401, 402, 403,
  ];

  const [newRoom, setNewRoom] = useState({ block: "D", number: 101, sef: "", hash: "" });

  useEffect(() => {
    axios.get("http://localhost:8000/getAll-rooms", { withCredentials: true })
      .then(response => {
        setRooms(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append("xlsx", file);
    
    try {
      const response = await axios.post("http://localhost:8000/upload-XLSX", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      setNewRoom((prev) => ({ ...prev, hash: response.data.hash }));
    } catch {
      alert("Ошибка загрузки файла");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editMode ? `http://localhost:8000/update-room/${selectedRoom.id}` : "http://localhost:8000/create-room";
    const method = editMode ? axios.put : axios.post;
    
    method(url, newRoom, { withCredentials: true })
      .then(() => {
        setShowForm(false);
        setRooms(editMode
          ? rooms.map(room => (room.id === selectedRoom.id ? { ...room, ...newRoom } : room))
          : [...rooms, { ...newRoom }]
        );
        setEditMode(false);
      })
      .catch(() => alert("Ошибка при сохранении комнаты"));
  };

  const handleEdit = (room) => {
    setNewRoom(room);
    setSelectedRoom(room);
    setEditMode(true);
    setShowForm(true);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <AppBar />
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Фильтр по блоку или номеру"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button onClick={() => { setShowForm(true); setEditMode(false); setNewRoom({ block: "D", number: 101, sef: "", hash: "" }); }} style={{ padding: "8px", backgroundColor: "#007bff", color: "white", border: "none" }}>
          <PlusCircle /> {editMode ? "Редактировать комнату" : "Добавить комнату"}
        </button>
      </div>

      {showForm && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
          <h3>{editMode ? "Редактировать комнату" : "Создать новую комнату"}</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <label>Блок:</label>
            <select value={newRoom.block} onChange={(e) => setNewRoom({ ...newRoom, block: e.target.value })} required>
              {["D", "E", "F", "G", "H", "I"].map((blk) => (
                <option key={blk} value={blk}>{blk}</option>
              ))}
            </select>
            
            <label>Номер:</label>
            <select value={newRoom.number} onChange={(e) => setNewRoom({ ...newRoom, number: parseInt(e.target.value, 10) })} required>
              {numberOptions.map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            
            <label>SEF:</label>
            <input type="text" value={newRoom.sef} onChange={(e) => setNewRoom({ ...newRoom, sef: e.target.value })} required />
            
            <label>Загрузить XLSX:</label>
            <input type="file" accept=".xlsx" onChange={handleFileUpload} />
            
            {newRoom.hash && <button type="button" onClick={() => setNewRoom({ ...newRoom, hash: "" })}>Очистить hash</button>}
            
            <button type="submit" style={{ marginTop: "10px", backgroundColor: "#28a745", color: "white", padding: "8px", border: "none" }}>{editMode ? "Сохранить" : "Создать"}</button>
          </form>
          <button onClick={() => setShowForm(false)} style={{ marginTop: "10px", backgroundColor: "#dc3545", color: "white", padding: "8px", border: "none" }}>Отмена</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Блок</th>
            <th>Номер</th>
            <th>SEF</th>
            <th>Hash</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.block}</td>
              <td>{room.number}</td>
              <td>{room.sef}</td>
              <td>{room.hash}</td>
              <td>
                <button onClick={() => handleEdit(room)}><Edit /></button>
                <button><Trash2 /></button>
                <button onClick={() => navigate("/xlsxViewer/" + room.hash)}><FolderOpenDot /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import XlsxViewer from "./XlsxViwer/XlsxViewer";

export default function Modal({ room, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#222] p-6 rounded-xl shadow-lg max-w-5xl w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-2xl">×</button>
        <h2 className="text-white text-center mb-4">Расписание для {room}</h2>
        <XlsxViewer room={room} />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import styles from "./XlsxViewer.module.css";
import AppBar from "../AppBar";

export default function XlsxViewer() {
  const { hash } = useParams(); // Получаем hash из URL
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchXlsx = async () => {
      if (!hash) return; // Проверяем, что hash существует

      try {
        const response = await axios.get(`http://localhost:8000/xlsx/${hash}`, {
          responseType: "arraybuffer",
        });

        const workbook = XLSX.read(new Uint8Array(response.data), { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setData(jsonData);
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
      }
    };

    fetchXlsx();
  }, [hash]);

  return (
    <div>
      <AppBar />
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          {data.length > 0 ? (
            <div className={styles.overflowXAuto}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr className={styles.tableRow}>
                    {Object.keys(data[0]).map((key) => (
                      <th key={key} className={styles.tableHeader}>
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={styles.tbody}>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={styles.tableRow}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} className={styles.tableCell}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className={styles.textCenter}>Загрузка...</p>
          )}
        </div>
      </div>
    </div>
  );
}

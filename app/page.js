"use client";

import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNotifications().then(setData);
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      {data.map((n) => (
        <p key={n.ID}>
          {n.Type} - {n.Message}
        </p>
      ))}
    </div>
  );
}
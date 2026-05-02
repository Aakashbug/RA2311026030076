"use client";

import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { Log } from "../utils/logger";

export default function Home() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
  Log("frontend", "info", "page", "Home page loaded");

  getNotifications()
    .then((res) => {
      setData(res);
      Log("frontend", "info", "page", "Data loaded");
    })
    .catch(() => {
      Log("frontend", "error", "page", "Error loading data");
    });
}, []);

  const filtered = type
    ? data.filter((n) => n.Type === type)
    : data;

  return (
    <div>
      <h1>Notifications</h1>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      {filtered.map((n) => (
        <p key={n.ID}>
          {n.Type} - {n.Message}
        </p>
      ))}
    </div>
  );
}
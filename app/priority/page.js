"use client";

import { useEffect, useState } from "react";
import { getNotifications } from "../../services/api";
import { getTopNotifications } from "../../utils/priority";

export default function PriorityPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNotifications().then((res) => {
      setData(getTopNotifications(res, 10));
    });
  }, []);

  return (
    <div>
      <h1>Top Notifications</h1>
      {data.map((n) => (
        <p key={n.ID}>
          {n.Type} - {n.Message}
        </p>
      ))}
    </div>
  );
}
import axios from "axios";
import { Log } from "../utils/logger";

const BASE_URL = "http://20.207.122.201/evaluation-service";
const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getNotifications = async () => {
  try {
    Log("frontend", "info", "api", "Fetching notifications");

    const res = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    return res.data.notifications;

  } catch (err) {
    Log("frontend", "error", "api", "Failed to fetch notifications");
    throw err;
  }
};
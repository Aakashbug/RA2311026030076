import axios from "axios";

const BASE_URL = "http://20.207.122.201/evaluation-service";

const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const getNotifications = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    return res.data.notifications;

  } catch (error) {
    console.error("Error fetching notifications");
    throw error;
  }
};
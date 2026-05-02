import axios from "axios";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";
const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {
    console.error("Log failed");
  }
};
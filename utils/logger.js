import axios from "axios";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";
const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const Log = (stack, level, pkg, message) => {
  try {

    axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN || ""}`
        }
      }
    ).catch(() => {

    });

  } catch {

  }
};
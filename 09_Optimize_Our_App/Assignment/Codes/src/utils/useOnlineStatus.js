import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const offlineHandler = () => {
      setOnlineStatus(false);
    };
    window.addEventListener("offline", offlineHandler);
  });

  useEffect(() => {
    const onlineHandler = () => {
      setOnlineStatus(true);
    };
    window.addEventListener("online", onlineHandler);
  });

  return onlineStatus;
};

export default useOnlineStatus;

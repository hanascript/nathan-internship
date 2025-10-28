import { useEffect, useState } from 'react';

export default function ItemCountdown({ expiryDate }) {
  const initialTimeLeft = new Date(expiryDate) - Date.now();

  const [countdown, setCountdown] = useState(Math.max(0, initialTimeLeft));

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = new Date(expiryDate) - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setCountdown(0);
        return;
      }
      setCountdown(timeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, [expiryDate]);

  const formatCountdown = countdown => {
    const totalSeconds = Math.floor(countdown / 1000)
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / (60 * 60)) % 24;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      return 'Expired';
    }

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return <span>{formatCountdown(countdown)}</span>;
}

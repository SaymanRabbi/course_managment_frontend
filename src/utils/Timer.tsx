import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
interface CourseAvailabilityTimerProps {
  startDate: Date;
  deadline: Date;
  setAvilabel: (value: boolean) => void;
}

const CourseAvailabilityTimer: React.FC<CourseAvailabilityTimerProps> = ({
  deadline,
  setAvilabel,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(() =>
    calculateRemainingTime(deadline)
  );

  useEffect(() => {
    const storedRemainingTime = Cookies.get("remainingTime");

    if (storedRemainingTime) {
      setRemainingTime(Number(storedRemainingTime));
    }

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        const newRemainingTime = Math.max(0, prevRemainingTime - 1);
        Cookies.set("remainingTime", String(newRemainingTime));

        // Check if the course is still available
        if (newRemainingTime > 0) {
          // Update the availability status using setAvilabel
          setAvilabel(true);
        } else {
          setAvilabel(false);
        }
        return newRemainingTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  function calculateRemainingTime(endDate: Date): number {
    const currentDate = new Date();
    const timeDifference = endDate.getTime() - currentDate.getTime();
    return Math.max(0, Math.floor(timeDifference / 1000));
  }

  function formatTime(seconds: number): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  }

  return (
    <div>
      {remainingTime > 0 ? (
        <h2 className="text-textPrimary text-[16px]">
          {formatTime(remainingTime)}
        </h2>
      ) : (
        <h2>Course is no longer available.</h2>
      )}
    </div>
  );
};

export default CourseAvailabilityTimer;

import React, { useState } from 'react';

const Slot = ({ time, available, onBookSlot, onUnbookSlot }) => {
  const [isBooked, setIsBooked] = useState(false);

  const handleClick = () => {
    if (isBooked) {
      onUnbookSlot(time);
      setIsBooked(false);
    } else {
      onBookSlot(time);
      setIsBooked(true);
    }
  };

  return (
    <div
      className={`slot ${isBooked ? 'booked' : available ? 'available' : 'unavailable'}`}
      onClick={handleClick}
    >
      {time}
    </div>
  );
};

export default Slot;

import React, { useState } from 'react';
import Slot from './Slot';
import './Booking.css'; // Import the CSS file for styling

const Booking = () => {
  const [slots, setSlots] = useState([
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    // Add more slots as needed
  ]);

  const handleBookSlot = (time) => {
    const updatedSlots = slots.map((slot) =>
      slot.time === time ? { ...slot, available: false } : slot
    );
    setSlots(updatedSlots);
  };

  const handleUnbookSlot = (time) => {
    const updatedSlots = slots.map((slot) =>
      slot.time === time ? { ...slot, available: true } : slot
    );
    setSlots(updatedSlots);
  };

  return (
    <div className="booking">
      <h2>Available Slots</h2>
      <div className="slot-list">
        {slots.map((slot) => (
          <Slot
            key={slot.time}
            time={slot.time}
            available={slot.available}
            onBookSlot={handleBookSlot}
            onUnbookSlot={handleUnbookSlot}
          />
        ))}
      </div>
    </div>
  );
};

export default Booking;

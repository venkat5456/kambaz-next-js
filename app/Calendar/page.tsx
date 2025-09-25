"use client";

export default function CalendarPage() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 30; // example: September
  const firstDayOffset = 1; // e.g. September starts on Monday

  const cells: (number | null)[] = [
    ...Array(firstDayOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div id="wd-calendar" style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Calendar – September 2025</h2>

      {/* Days of the week header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {cells.map((day, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              height: "80px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "5px",
              backgroundColor: day ? "#fff" : "#f8f8f8",
            }}
          >
            {day && <span>{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

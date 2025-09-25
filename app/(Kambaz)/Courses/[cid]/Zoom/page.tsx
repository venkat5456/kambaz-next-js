"use client";

export default function ZoomPage() {
  return (
    <div id="wd-zoom">
      <h2>Course Zoom Meetings</h2>
      <ul>
        <li>
          <a
            href="https://northeastern.zoom.us/j/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoom Meeting 1 – Lecture
          </a>
        </li>
        <li>
          <a
            href="https://northeastern.zoom.us/j/9876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoom Meeting 2 – Lab
          </a>
        </li>
        <li>
          <a
            href="https://northeastern.zoom.us/j/111222333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoom Meeting 3 – Office Hours
          </a>
        </li>
      </ul>
    </div>
  );
}

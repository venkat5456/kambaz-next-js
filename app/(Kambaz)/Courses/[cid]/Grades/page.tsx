"use client";

export default function GradesPage() {
  return (
    <div id="wd-grades">
      <h2>Course Grades</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Score</th>
            <th>Out of</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1 – ENV + HTML</td>
            <td>95</td>
            <td>100</td>
          </tr>
          <tr>
            <td>A2 – CSS + BOOTSTRAP</td>
            <td>88</td>
            <td>100</td>
          </tr>
          <tr>
            <td>A3 – JavaScript + React</td>
            <td>92</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

"use client";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      {/* Description */}
      <textarea id="wd-description" rows={5} cols={50}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />

      {/* Table for details */}
      <table>
        {/* Points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>

        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>

        {/* Display Grade */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grade-display">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade-display" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission" defaultValue="Online">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="No Submission">No Submission</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="wd-entry-text" /> Text Entry <br />
            <input type="checkbox" id="wd-entry-url" /> Website URL <br />
            <input type="checkbox" id="wd-entry-media" /> Media Recordings <br />
            <input type="checkbox" id="wd-entry-annotation" /> Student Annotation <br />
            <input type="checkbox" id="wd-entry-upload" /> File Uploads <br />
          </td>
        </tr>

        {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
        </tr>

        {/* Due Date */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due">Due</label>
          </td>
          <td>
            <input id="wd-due" type="date" defaultValue="2024-05-13" />
          </td>
        </tr>

        {/* Available From / Until */}
        <tr>
          <td align="right" valign="top">
            <label>Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
            &nbsp; Until{" "}
            <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
          </td>
        </tr>
      </table>

      <br />
      {/* Buttons */}
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}

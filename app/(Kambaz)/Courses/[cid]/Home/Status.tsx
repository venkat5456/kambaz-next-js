export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>

      {/* Publish / Unpublish */}
      <div>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>

      <br />

      {/* Quick actions */}
      <div>
        <button>Import Existing Content</button>
        <br />
        <button>Import from Commons</button>
        <br />
        <button>Choose Home Page</button>
        <br />
        <button>View Course Stream</button>
        <br />
        <button>New Announcement</button>
        <br />
        <button>New Analytics</button>
        <br />
        <button>View Course Calendar</button>
        <br />
        <button>View Course Notifications</button>
      </div>
    </div>
  );
}


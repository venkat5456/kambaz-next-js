export default function AssignmentEditor({ params }: { params: { cid: string, aid: string } }) {
  return (
    <div id="wd-assignment-editor">
      <h3>Assignment Editor</h3>

      <label>Assignment Name</label><br/>
      <input defaultValue={`Assignment ${params.aid}`} /><br/>

      <label>Description</label><br/>
      <textarea defaultValue="This assignment is available online. Submit a link to your web app running on Vercel." /><br/>

      <label>Points</label><br/>
      <input type="number" defaultValue={100} /><br/>

      <label>Assignment Group</label><br/>
      <select><option>ASSIGNMENTS</option></select><br/>

      <label>Display Grade As</label><br/>
      <select><option>Percentage</option><option>Points</option><option>Letter Grade</option></select><br/>

      <fieldset>
        <legend>Submission Type</legend>
        <label><input type="checkbox" />Text Entry</label><br/>
        <label><input type="checkbox" />Website URL</label><br/>
        <label><input type="checkbox" />Media Recordings</label><br/>
        <label><input type="checkbox" />Student Annotations</label><br/>
        <label><input type="checkbox" />File Uploads</label><br/>
      </fieldset>

      <fieldset>
        <legend>Assign To</legend>
        <input defaultValue="Everyone" /><br/>
        <label>Due</label><input type="date" /><br/>
        <label>Available from</label><input type="date" />
        <label>Until</label><input type="date" /><br/>
      </fieldset>

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}

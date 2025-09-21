// app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx

export default function AssignmentEditor({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Assignment Editor</h1>
      <p>Course ID: {params.cid}</p>
      <p>Assignment ID: {params.aid}</p>

      <label htmlFor="name">Assignment Name</label>
      <input
        id="name"
        defaultValue={`Assignment ${params.aid}`}
        className="border p-1 block mb-4"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        className="border p-1 block w-full h-24 mb-4"
      >
        This assignment is available online. Submit a link to your web
        application running on Vercel.
      </textarea>

      <label htmlFor="points">Points</label>
      <input
        id="points"
        type="number"
        defaultValue={100}
        className="border p-1 block mb-4"
      />
    </div>
  );
}

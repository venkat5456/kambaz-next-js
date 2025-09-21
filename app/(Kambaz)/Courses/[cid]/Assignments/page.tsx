// app/(Kambaz)/Courses/[cid]/Assignments/page.tsx
import Link from "next/link";

export default function Assignments({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-assignments" style={{ padding: "1rem" }}>
      <h1>Assignments</h1>

      {/* Search + Buttons */}
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="border p-1 block mb-4"
      />
      <button id="wd-add-assignment-group" className="mr-2">
        + Group
      </button>
      <button id="wd-add-assignment">+ Assignment</button>

      {/* Group Header */}
      <h3 id="wd-assignments-title" className="mt-4">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      {/* Assignment Links */}
      <ul id="wd-assignment-list" className="list-disc ml-6 mt-2">
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/123`}
            className="wd-assignment-link text-blue-500"
          >
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/124`}
            className="wd-assignment-link text-blue-500"
          >
            A2 - CSS Styling
          </Link>
        </li>
      </ul>
    </div>
  );
}

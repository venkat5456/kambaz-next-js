import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <table width="100%">
        <tbody>
          <tr>
            {/* Main Content: Modules */}
            <td valign="top" width="70%">
              <Modules />
            </td>

            {/* Sidebar: Course Status */}
            <td valign="top" width="30%">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


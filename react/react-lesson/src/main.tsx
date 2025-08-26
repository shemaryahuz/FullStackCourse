import { createRoot } from "react-dom/client";
import "./index.css";

const myElment = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById("root")!).render(
  myElment
);

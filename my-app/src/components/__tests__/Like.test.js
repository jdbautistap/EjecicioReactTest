import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../Like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like", () => {
  it("Likes to be 0", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });
  it("Like 1 clicking like", () => {
    const button = document.getElementById("increment");
    const p = container.querySelector("p");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });

  it("Like -1 clicking dislike", () => {
    const button = document.getElementById("decrement");
    const p = container.querySelector("p");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });
});
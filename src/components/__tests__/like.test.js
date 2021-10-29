import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {
  //verificando el label
  it("Likes:0 value by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  //probar el evento onClic
  it("Increment when click", () => {
    const increment = container.querySelector("#increment");
    const p = container.querySelector("p");
    act(() => {
      increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });

  it("Decrement when click", () => {
    const decrement = container.querySelector("#decrement");
    const p = container.querySelector("p");
    act(() => {
      decrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });
});
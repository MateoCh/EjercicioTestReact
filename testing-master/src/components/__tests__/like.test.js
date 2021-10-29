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

describe("Testing checkbox component", () => {
  //verificando el texto por defecto
  it("0 likes by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  //probar el evento onClic de like
  it("p changes when like is clicked, like number increases", () => {
    const p = container.querySelector("p");
    const increment = container.querySelector("#increment");
    act(() => {
      increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });

  //probar el evento onClic de dislike
  it("p changes when dislike is clicked, like number decreases", () => {
    const p = container.querySelector("p");
    const decrement = container.querySelector("#decrement");
    act(() => {
      decrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });

});

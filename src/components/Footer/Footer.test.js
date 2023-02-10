import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer.js";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

test("Test Footer", () => {
    render(<Footer></Footer>);

    const testTextCopy = document.querySelector("p").innerHTML;
    expect(testTextCopy).not.toBeNull();

    const copyright = screen.getAllByText("Copyright");
    expect(copyright[0]).toBeInTheDocument();
    expect(1).toBe(1);
});

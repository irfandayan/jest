import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowerList from "../FollowersList";

const MockFlollwersList = () => {
  return (
    <BrowserRouter>
      <FollowerList />
    </BrowserRouter>
  );
};

describe("FollowerList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeEach(() => {
    console.log("RUNNING ONCE BEFORE ALL TEST");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEST");
  });

  it("should render follower items", async () => {
    render(<MockFlollwersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render multiple followers items", async () => {
  //     render(<MockFlollwersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});

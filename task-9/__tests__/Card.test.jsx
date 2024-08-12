import { render, screen, waitFor } from "@testing-library/react";
import JobCard from "../app/components/Home/Card";
import Home from "../app/components/Home/page";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] }),
  })
);

describe("JobCard Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders JobCard correctly", () => {
    const job = {
      id: "1",
      logoUrl: "http://example.com/logo.png",
      title: "Software Engineer",
      orgName: "Tech Corp",
      location: "San Francisco, CA",
      description: "An exciting opportunity to work on innovative projects.",
      isBookmarked: false,
    };

    render(<JobCard job={job} index={0} />);

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Tech Corp San Francisco, CA")).toBeInTheDocument();
    expect(
      screen.getByText(
        "An exciting opportunity to work on innovative projects."
      )
    ).toBeInTheDocument();
  });

  test("renders 'No job Found' when no jobs are provided", async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("No job Found")).toBeInTheDocument();
    });
  });
});


import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Is_book from "../app/components/Home/Is_book";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  global.alert = jest.fn();
  fetchMock.resetMocks();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Is_book Component", () => {
  test("renders with correct initial background color when marked is true", () => {
    render(<Is_book id="1" marked={true} />);
    const svgElement = screen.getByTestId("bookmark-icon");
    expect(svgElement).toHaveStyle("fill: black");
  });

  test("renders with correct initial background color when marked is false", () => {
    render(<Is_book id="1" marked={false} />);
    const svgElement = screen.getByTestId("bookmark-icon");
    expect(svgElement).toHaveStyle("fill: white");
  });

  test("toggles background color on button click", () => {
    render(<Is_book id="1" marked={false} />);
    const buttonElement = screen.getByRole("button");
    const svgElement = screen.getByTestId("bookmark-icon");

    expect(svgElement).toHaveStyle("fill: white");
    fireEvent.click(buttonElement);

    expect(svgElement).toHaveStyle("fill: black");
  });

  test("makes POST request when marked is false and button is clicked", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<Is_book marked={false} />);
    fireEvent.click(screen.getByTestId("my-button"));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("posted");
    });
  });

  test('makes DELETE request when marked is true and button is clicked', async () => {
    
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<Is_book marked={true} />);
    fireEvent.click(screen.getByTestId("my-button"));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("Deleted");
    });
});
});

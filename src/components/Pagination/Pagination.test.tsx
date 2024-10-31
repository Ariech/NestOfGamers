import { describe, expect, it, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";
import userEvent from "@testing-library/user-event";

const setCurrentPage = vitest.fn();

const testPageChange = async (initialPage: number, expectedPage: number) => {
  const user = userEvent.setup();

  const { rerender } = render(
    <Pagination
      currentPage={initialPage}
      setCurrentPage={setCurrentPage}
      gamesData={{ next: "/api/games?page=3", results: [] }}
    />
  );

  if (expectedPage > initialPage) {
    await user.click(screen.getByRole("button", { name: "Next" }));
  } else {
    await user.click(screen.getByRole("button", { name: "Previous" }));
  }

  rerender(
    <Pagination
      currentPage={expectedPage}
      setCurrentPage={setCurrentPage}
      gamesData={{ next: "/api/games?page=3", results: [] }}
    />
  );

  expect(screen.getByText(expectedPage.toString())).toHaveTextContent(
    expectedPage.toString()
  );
};

describe("Pagination", () => {
  it("disables next button when there is no next page", () => {
    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        gamesData={{ next: null, results: [] }}
      />
    );
    expect(screen.getByText(/Next/i)).toBeDisabled();
  });

  it("doesn't disable next button when there is a next page", () => {
    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        gamesData={{ next: "/api/games?page=2", results: [] }}
      />
    );
    expect(screen.getByText(/Next/i)).toBeEnabled();
  });

  it("disables previous button when there is no previous page", () => {
    render(
      <Pagination
        currentPage={1}
        setCurrentPage={setCurrentPage}
        gamesData={{ next: null, results: [] }}
      />
    );
    expect(screen.getByText(/Previous/i)).toBeDisabled();
  });

  it("doesn't disable previous button when there is a previous page", () => {
    render(
      <Pagination
        currentPage={2}
        setCurrentPage={setCurrentPage}
        gamesData={{ next: null, results: [] }}
      />
    );
    expect(screen.getByText(/Previous/i)).toBeEnabled();
  });

  it("calls setCurrentPage correctly when Previous button is clicked", async () => {
    await testPageChange(2, 1);
  });

  it("calls setCurrentPage correctly when Next button is clicked", async () => {
    await testPageChange(2, 3);
  });
});

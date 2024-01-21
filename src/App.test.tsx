import { IonApp } from "@ionic/react";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  const { baseElement } = render(<IonApp />);
  expect(baseElement).toBeDefined();
});

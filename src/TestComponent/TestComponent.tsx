import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import styleScss from "./TestComponent.module.scss";
import "./TestComponent.css";
import styleCss from "./TestComponent.module.css";
import "./TestComponent.scss";

export const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={[
      styleScss.testComponent,
      theme === "test" ? styleScss.bgGray : null,
      theme === "secondary" ? styleScss.testComponentSecondary : null,
    ].join(" ")}
  >
    <h1 className={styleScss.heading}>I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
    {theme === "test" ? <p>{theme.toString()}</p> : null}
    <p className="global-test-css">
      This textbox should have a pink background with a black border if the
      global CSS classes are working.
    </p>
    <p className={styleCss.modulesTest}>
      This textbox should have a peach background with a black border if the
      local CSS Module classes are working.
    </p>
    <p className="global-test-scss">
      This textbox should have an aqua background with a black border if the
      global SCSS classes are working.
    </p>
    <p className={styleScss.modulesTest}>
      This textbox should have a peach background with a black border if the
      local SCSS Module classes are working.
    </p>
  </div>
);

import React from "react";

import { Wrapper, List, ListItem, NavLink } from "./styled";

export function BuilderBar(): JSX.Element {
  return (
    <Wrapper id="builderbar">
      <nav>
        <List>
          <ListItem>
            <NavLink href="/">
              <svg viewBox="0 0 24 24" stroke-width="0">
                <path d="M11.295 3.293c-.732.657-5.66 4.659-7.554 6.194-.469.38-.74.95-.74 1.553L3.003 19a2 2 0 0 0 2 2h5v-5a1 1 0 0 1 1-1h2c.552 0 1 .446 1 .998V21h5a2 2 0 0 0 2-2v-7.96c0-.603-.27-1.173-.74-1.553-1.893-1.535-6.821-5.537-7.553-6.194a1 1 0 0 0-1.414 0Z"></path>
              </svg>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/pages/">
              <svg viewBox="0 0 24 24" stroke-width="0">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 4c0-1.105.893-2 1.998-2H12v6c0 1 1 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm16 4a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2v6h6Z"
                ></path>
              </svg>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/pagebuilder/">
              <svg viewBox="0 0 24 24" stroke-width="0">
                <path d="M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm11 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4Zm2 9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5Z"></path>
              </svg>
            </NavLink>
          </ListItem>
        </List>
      </nav>
    </Wrapper>
  );
}

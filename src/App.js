import { useState } from "react";
import { Button, Menu, Navbar } from "react-daisyui";
import { Drawer } from "react-daisyui";

import React from "react";

export const Side = () => {
  return (
    <aside className="bg-base-200 w-80">
      <div className="flex w-full justify-center p-4 items-center font-sans component-preview">
        <Menu>
          <Menu.Item>
            <a>Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Item 2</a>
          </Menu.Item>
          <Menu.Item>
            <a>Item 3</a>
          </Menu.Item>
        </Menu>
      </div>
    </aside>
  );
};

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Drawer
      side={<Side />}
      sideClassName="hello"
      open={visible}
      onClickOverlay={toggleVisible}
    >
      <Navbar>
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            <Menu.Item>
              <a>Navbar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Navbar Item 2</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
      <div className="flex h-36 items-center justify-center">Content</div>

      {/*
      <div className="flex h-56 items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Button color="primary">Click me!</Button>
        </div>
        <Button color="primary" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
      <div>hello?</div>
      */}
    </Drawer>
  );
}

export default App;

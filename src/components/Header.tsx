import ToggleTheme from "./ToggleTheme";

/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  return (
    <header className="flex bg-base-100 justify-between p-2 px-6 items-center">
      <div>
        <a className="btn btn-ghost normal-case text-xl">NextRead</a>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;

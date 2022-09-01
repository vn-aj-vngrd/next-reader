import ToggleTheme from "./ToggleTheme";

/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 px-6 border-b border-gray-200 dark:border-gray-600">
      <div>
        <button className="text-xl">
          Next<span className="font-bold text-blue-500">Read</span>
        </button>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;

/* eslint-disable jsx-a11y/alt-text */
const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">NextRead</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary btn-sm">Light</button>
      </div>
    </header>
  );
};

export default Header;

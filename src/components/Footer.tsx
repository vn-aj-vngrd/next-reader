const Footer = () => {
  return (
    <footer className="flex justify-center p-2 px-6 py-2 text-sm border-t footer bg-neutral text-neutral-content md:justify-between dark:border-gray-600">
      <div>
        <p>
          Created by:{" "}
          <a
            href="https://vanajvanguardia.me"
            target="_blank"
            className="font-medium text-blue-500 hover:underline"
            rel="noreferrer"
          >
            {" "}
            Van AJ Vanguardia
          </a>
        </p>
      </div>
      <div className="hidden md:block">
        <p>
          Next<span className="font-bold text-blue-500">Read</span> | &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

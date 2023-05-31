import "../../styles/components/navBar.css";
const NavBar = () => {
  return (
    <>
      <div className="bg-[#35C164] p-10 flex-col w-14 h-[100vh] items-center flex py-5 font-mono">
        <h2 className="text-white text-2xl pb-9">ALG</h2>
        <box-icon color="#fff" name="menu"></box-icon>
        <nav className="py-5 flex flex-col items-center text-yellow-400">
          <li className="flex flex-col items-center py-2 gap-2 cursor-pointer p-5 hover:bg-[rgba(255,255,255,0.5)]">
            <box-icon color="#fff" name="dashboard" type="solid"></box-icon>
          </li>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

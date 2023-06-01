import { useState } from "react";
import logo from "../../assets/imagen1.png";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const subMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };
  return (
    <div className="bg-[#f4f4f4] flex">
      {/* Container */}
      <div className=" w-[70px] md:w-[200px] h-screen bg-white p-1 flex flex-col text-xxl gap-2">
        {/* Container / Logo */}
        <figure>
          <img src={logo} alt="Aire Limpio Global" className="w-3/4 flex" />
        </figure>
        {/* Container / Menu */}
        <div className="flex flex-col   gap-2 transition-all duration-1000 delay-700">
          <div className="flex justify-center">
            <span>MENU</span>
            <div className="absolute left-[63px] rotate-180 flex bg-[#2fb71d85] rounded md:left-[188px]">
              <box-icon name="chevron-right"></box-icon>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-2 md:items-start items-center">
              <li className=" flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2 " href="#">
                  <box-icon type="solid" name="dashboard"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0 ">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon type="solid" name="report"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Reportes
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon type="solid" name="briefcase-alt"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Ingresos
                  </span>
                </a>
              </li>
              <ul className=" flex flex-col w-full">
                <li className="justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2">
                  <a href="#">Clientes</a>
                </li>
                <li className="justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2">
                  <a href="#">Proveedores</a>
                </li>
                <li className="justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2">
                  <a href="#">Personal</a>
                </li>
              </ul>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon name="task"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Obras en ejecucion
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon name="money"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Presupuesto
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon type="solid" name="user-voice"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Vendedores
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon name="box"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Inventario
                  </span>
                </a>
              </li>
              <li className="flex justify-center md:justify-between hover:bg-[#2fb71d85] hover:text-[#052c02] p-2 relative w-[100%] hover:after:content-['_.'] after:bg-black after:h-[100%]">
                <a className="flex items-center gap-2" href="">
                  <box-icon name="money"></box-icon>
                  <span className="absolute left-[-900px] md:relative md:left-0 transition-all duration-40 delay-0">
                    Contabilidad
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <h2>asds</h2>
      </div>
    </div>
  );
};

export default NavBar;

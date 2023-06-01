import { useState } from 'react';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const subMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="bg-[#35C164] fixed w-[260px] h-[100vh] font-mono">
      <div className="h-[60px] w-[100%] flex flex-col items-center">
        <h1 className="text-white text-2xl">ALG</h1>
        <span className="cursor-pointer  hover:bg-[rgba(255,255,255,0.2)]" onClick={toggleMenu}>
          <box-icon color="#fff" name="menu"></box-icon>
        </span>
      </div>
      {visible && (
        <nav className="pt-8">
          <ul className='flex flex-col'>
            <li className='relative cursor-pointer'>
              <a className='flex items-center'>
                <span className='h-[40px] min-w-[40px] leading-[50px] '>
                  <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                </span>
                <span>Inicio</span>
              </a>
            </li>

            <li className='relative cursor-pointer pt-5' onClick={subMenu}>
              <div className='flex items-center justify-around'>
                <a className='flex items-center'>
                  <span className='h-[40px] min-w-[40px] leading-[50px] '>
                    <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                  </span>
                  <span className=''>Ingreso general</span>
                </a>
                <box-icon name='chevron-down' color='#ffffff' ></box-icon>
              </div>
              {subMenuVisible && (
                <ul className='pt-[6px] pr-[10px] pb-[14px] pl-[30px] flex flex-col bg-[#278d49] rounded-md' onClick={stopPropagation}>
                  <li className='cursor-pointer p-2'>
                    <a className=''>
                      <span className='pr-2'>
                        <box-icon name='user' color='#ffffff' ></box-icon>
                      </span>
                      <span>Clientes</span>
                    </a>
                  </li>

                  <li className='cursor-pointer p-2'>
                    <a className=''>
                      <span className='pr-2'>
                        <box-icon name='user' color='#ffffff' ></box-icon>
                      </span>
                      <span>Proveedores</span>
                    </a>
                  </li>

                  <li className='cursor-pointer p-2'>
                    <a className=''>
                      <span className='pr-2'>
                        <box-icon name='user' color='#ffffff' ></box-icon>
                      </span>
                      <span>Personal</span>
                    </a>
                  </li>

                  <li className='cursor-pointer p-2'>
                    <a className=''>
                      <span className='pr-2'>
                        <box-icon name='user' color='#ffffff' ></box-icon>
                      </span>
                      <span>Clientes</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className='relative cursor-pointer pt-5'>
              <a className='flex items-center'>
                <span className='h-[40px] min-w-[40px] leading-[50px] '>
                  <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                </span>
                <span>Obras en ejecucion</span>
              </a>
            </li>

            <li className='relative cursor-pointer pt-5'>
              <a className='flex items-center'>
                <span className='h-[40px] min-w-[40px] leading-[50px] '>
                  <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>
                </span>
                <span>Preosupuesto</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBar;

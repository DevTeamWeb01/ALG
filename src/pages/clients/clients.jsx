import departamentos from "../../js/departamentos";
import productos from "../../js/productos";
import empresas from "../../js/empresas";

const Clientes = () => {
    return (
      <>
        <div className="bg-[#ccc] m-10 p-8">
          <h1 className="text-center text-2xl">Clientes</h1>
        </div>

        <div className="bg-[#2de46a] flex justify-center p-8">
          <form action="" method="post" className="bg-[#ffffff] grid grid-cols-2 gap-10 p-10 rounded-md">

            {/* ===== usuario ===== */}
            <div className="flex items-center">
              <input type="text" name="usuario" placeholder="Usuario" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== nuemro cliente ===== */}
            <div className="flex items-center">
              <select name="numeroCliente" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Numero cliente</option>
                <option value="70">70</option>
              </select>
            </div>

            {/* ===== codigo cliente ===== */}
            <div className="flex items-center">
              <select name="codigoCliente" id="" className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Codigo cliente</option>
                <option value=""></option>
              </select>
            </div>

            {/* ===== fecha ===== */}
            <div className="flex items-center">
              <input type="date" name="" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8"/>
            </div>

            {/* ===== nombre de la empresa ===== */}
            <div className="flex items-center">
              <input type="text" name="empresa" placeholder="Empresa" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== NIT ===== */}
            <div className="flex items-center">
              <input type="text" name="nit" placeholder="NIT" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== cargo ===== */}
            <div className="flex items-center">
              <input type="text" name="cargo" placeholder="Cargo" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== departamento ===== */}
            <div className="flex items-center">
              <select name="departamento" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Departamento</option>
                { departamentos.map((departamento) => (
                  <option key={departamento} value={departamento}>{departamento}</option>
                )) }
              </select>
            </div>

            {/* ===== direccion ===== */}
            <div className="flex items-center">
              <input type="text" name="direeción" placeholder="Direeción" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== municipio ===== */}
            <div className="flex items-center">
              <select name="municipio" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Municipio</option>
              </select>
            </div>

            {/* ===== tipo de empresa ===== */}
            <div className="flex items-center">
              <select name="empresa" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Tipo de empresa</option>
                { empresas.map((empresa) => (
                  <option key={empresa} value={empresa}>{empresa}</option>
                )) }
              </select>
            </div>

            {/* ===== producto ===== */}
            <div className="flex items-center">
              <select name="producto" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Producto</option>
                { productos.map((producto) => (
                  <option key={producto} value={producto}>{producto}</option>
                )) }
              </select>
            </div>

            {/* ===== celular ===== */}
            <div className="flex items-center">
              <input type="text" name="celular" placeholder="Celular" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== via conexion ===== */}
            <div className="flex items-center">
              <select name="producto" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Via conexión</option>
              </select>
            </div>

            {/* ===== correo ===== */}
            <div className="flex items-center">
              <input type="email" name="correo" placeholder="Correo" className="bg-[#e9e9e9] w-64 rounded-md h-8 pl-4 outline-none" />
            </div>

            {/* ===== atencion ===== */}
            <div className="flex items-center">
              <select name="atencion" id=""  className="w-64 pl-4 bg-[#e9e9e9] rounded-md h-8">
                <option value="" selected="true" disabled>Atendido por</option>
              </select>
            </div>

          </form>
        </div>
      </>
    );
  }

  export default Clientes;

class Main implements EventListenerObject
{
    listaVehiculos: Array<Vehiculo>;
    listavehiculosMuestra: Array<Vehiculo>;

    constructor(array: Array<Vehiculo> = new Array<Vehiculo>())
    {
        this.listaVehiculos = array;
        this.listavehiculosMuestra = new Array<Vehiculo>();
    }

    handleEvent(evt: Event): void
    {
        let boton: HTMLElement = <HTMLElement>evt.target;
        switch (boton.id) 
        {
            case "Agregar":
                
                break;
            
            case "buttonAcept":

                break;
            default:
                break;
        }
    }
    AddVehiculo(objeto: Vehiculo)
    {
        let cuerpo = this.getElement("TablaBody");
        let row = this.CreateElement("tr");
        let tdId = this.CreateElement("td");
        let tdMarca = this.CreateElement("td");
        let tdModelo = this.CreateElement("td");
        let tdPrecio = this.CreateElement("td");
        
        
        this.AppenChild(cuerpo,row);

        this.AppenChild(row, tdId);
        this.AppenChild(tdId, objeto.id);

        this.AppenChild(row, tdMarca);
        this.AppenChild(tdMarca, objeto.marca);

        this.AppenChild(row, tdModelo);
        this.AppenChild(tdModelo, objeto.modelo);

        this.AppenChild(row, tdPrecio);
        this.AppenChild(tdPrecio, objeto.precio);
    }

    AddVehiculoArray()
    {
        let marcaNew = this.getElement("MarcaNuevoVehiculo");
        let modeloaNew = this.getElement("ModeloNuevoVehiculo");
        let precioNew = this.getElement("PrecioVehiculo");

        this.listaVehiculos.push(new Vehiculo(1, marcaNew.value, modeloaNew.value, Number(precioNew.value)));
    }
    getElement(id: string)
    {
        return <HTMLInputElement>document.getElementById(id);
    }
    CreateElement(type: string)
    {
        return <HTMLInputElement>document.createElement(type);
    }
    AppenChild(target:any, obj: any)
    {
        return <HTMLInputElement>target.appendChild(obj);
    }
    UpdateLista()
    {
        let updater = this.getElement("Type");
        this.listavehiculosMuestra = this.listaVehiculos;
    }
    FiltroTipos()
    {

    }
    AddId(object: Vehiculo)
    {
        
    }
}
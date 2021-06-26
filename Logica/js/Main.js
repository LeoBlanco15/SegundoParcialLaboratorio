"use strict";
var Main = /** @class */ (function () {
    function Main(array) {
        if (array === void 0) { array = new Array(); }
        this.listaVehiculos = array;
        this.listavehiculosMuestra = new Array();
    }
    Main.prototype.handleEvent = function (evt) {
        var boton = evt.target;
        switch (boton.id) {
            case "Agregar":
                break;
            case "buttonAcept":
                break;
            default:
                break;
        }
    };
    Main.prototype.AddVehiculo = function (objeto) {
        var cuerpo = this.getElement("TablaBody");
        var row = this.CreateElement("tr");
        var tdId = this.CreateElement("td");
        var tdMarca = this.CreateElement("td");
        var tdModelo = this.CreateElement("td");
        var tdPrecio = this.CreateElement("td");
        this.AppenChild(cuerpo, row);
        this.AppenChild(row, tdId);
        this.AppenChild(tdId, objeto.id);
        this.AppenChild(row, tdMarca);
        this.AppenChild(tdMarca, objeto.marca);
        this.AppenChild(row, tdModelo);
        this.AppenChild(tdModelo, objeto.modelo);
        this.AppenChild(row, tdPrecio);
        this.AppenChild(tdPrecio, objeto.precio);
    };
    Main.prototype.AddVehiculoArray = function () {
        var marcaNew = this.getElement("MarcaNuevoVehiculo");
        var modeloaNew = this.getElement("ModeloNuevoVehiculo");
        var precioNew = this.getElement("PrecioVehiculo");
        this.listaVehiculos.push(new Vehiculo(1, marcaNew.value, modeloaNew.value, Number(precioNew.value)));
    };
    Main.prototype.getElement = function (id) {
        return document.getElementById(id);
    };
    Main.prototype.CreateElement = function (type) {
        return document.createElement(type);
    };
    Main.prototype.AppenChild = function (target, obj) {
        return target.appendChild(obj);
    };
    Main.prototype.UpdateLista = function () {
        var updater = this.getElement("Type");
        this.listavehiculosMuestra = this.listaVehiculos;
    };
    Main.prototype.FiltroTipos = function () {
    };
    Main.prototype.AddId = function (object) {
    };
    return Main;
}());

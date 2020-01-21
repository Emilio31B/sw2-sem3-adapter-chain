
import { BDAdapter,AdapterFactory,Alumno } from "./adapter";

// Fachada
class BDManager{

    dbAdapter : BDAdapter
    constructor(tipo : string){
        let factory = new AdapterFactory();
        this.dbAdapter = factory.obtenerAdapter(tipo);
    }
    crearEstructura(){
        this.dbAdapter.conectar();
        this.crearEstructura();
        this.dbAdapter.cerrar();
    }
    insertar( alumno : Alumno){
        this.dbAdapter.conectar();
        this.dbAdapter.insertarAlumno(alumno);
        this.dbAdapter.cerrar();
    }
}


let mainFachada = () => {
    let bdManager : BDManager = new BDManager(process.argv[2]);
    bdManager.crearEstructura();
    bdManager. insertar({
        codigo : "20202323",
        nombre : "Pepito",
        carrera : "Ing. Industrial"
    });
}

mainFachada();
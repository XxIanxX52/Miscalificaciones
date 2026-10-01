function mostrarAlumnos() {
    let contenedor = document.getElementById("resultado");

    if (listaAlumnos.length === 0) {
        contenedor.innerHTML = "No hay alumnos registrados todavía.";
        return;
    }

    let htmlCompleto = "";

    listaAlumnos.forEach((alumno, indice) => {
        let mensaje = "";
        let estado = "APROBADO";

        if (alumno.promedio <= 5.9) {
            estado = "REPROBADO";
            mensaje = "VETE A LA 11";
        } else if (alumno.promedio <= 6.4) {
            mensaje = "DATE DE BAJA";
        } else if (alumno.promedio <= 6.9) {
            mensaje = "PIENSA EN CONTA";
        } else if (alumno.promedio <= 7.9) {
            mensaje = "BIEN";
        } else if (alumno.promedio <= 8.9) {
            mensaje = "MUY BIEN";
        } else if (alumno.promedio <= 10) {
            mensaje = "EXCELENTE";
        }

        htmlCompleto += `
            <div style="margin-bottom: 20px; padding: 10px; border-left: 4px solid #333;">
                <strong>Alumno #${indice + 1}:</strong> ${alumno.nombre}<br>
                <strong>Edad:</strong> ${alumno.edad}<br>
                <strong>Promedio:</strong> ${alumno.promedio.toFixed(2)}<br><br>
                ${estado}<br><br>
                ${mensaje}
            </div>
            <hr>
        `;
    });

    contenedor.innerHTML = htmlCompleto;
}

function limpiar() {
    
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}

const listaAlumnos= [];

function agregar() {
    
    const nombreAlu= document.getElementById("nombre").value;
    const edadAlu= parseInt(document.getElementById("edad").value);
    const calificacionesAlu= [
        Number(document.getElementById("calificacion1").value),
        Number (document.getElementById("calificacion2").value),
        Number (document.getElementById("calificacion3").value),
        Number (document.getElementById("calificacion4").value)
    ];
    
    if (
    nombreAlu === "" ||
    isNaN(edadAlu) ||
    calificacionesAlu.includes(NaN) 
    ) {

    document.getElementById("resultado").innerHTML =
        "Por favor, completa todos los datos.";

    return;
    }
    
    let promedioAlu = (calificacionesAlu[0] + calificacionesAlu[1] + calificacionesAlu[2] + calificacionesAlu[3]) / 4;
    
    const nuevoAlumno = {
        nombre: nombreAlu,
        edad: edadAlu,
        promedio: promedioAlu
    };
    
    listaAlumnos.push(nuevoAlumno);
    
    // Mensaje de éxito e invocamos tu función limpiar() directamente
    document.getElementById("resultado").innerHTML = `Alumno ${nombreAlu} guardado con éxito`;
    limpiar(); 
}
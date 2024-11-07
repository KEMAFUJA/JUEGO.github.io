// Representación de las escenas en el árbol MVias
const scenes = {

    inicio: {
        text: "¡Bienvenido al mundo Mágico! ¿Que quieres aprender?",
        image: "inicio.jpg",
        options: [
            { text: "Matematicas", value: 0, nextScene: "mat" },
            { text: "Programacion", value: 0, nextScene: "prog" }
        ]
    },

    mat: {
        text: "¡Bienvenido al mundo de las Matemáticas Mágicas! ¿Estás listo para comenzar?",
        image: "inicioMat.jpg",
        options: [
            { text: "Sí, ¡vamos!", value: 0,nextScene: "nivel1" }
        ]
    },
    nivel1: {
        text: "Nivel 1: ¿Cuánto es 3 + 3?",
        image: "nivel1.jpg",
        options: [
            { text: "6", value: 10, nextScene: "nivel2" },
            { text: "5", value: 0, nextScene: "inicio" },
            { text: "4", value: 0, nextScene: "inicio" }
        ]
    },
    nivel2: {
        text: "Nivel 2: Si tienes 5 manzanas y comes 2, ¿cuántas te quedan?",
        image: "nivel2.jpg",
        options: [
            { text: "3", value: 10, nextScene: "nivel3" },
            { text: "5", value: 0, nextScene: "inicio" },
            { text: "2", value: 0, nextScene: "inicio" }
        ]
    },
    nivel3: {
        text: "Nivel 3: ¿Cuál es el doble de 4?",
        image: "nivel3.jpg",
        options: [
            { text: "8", value: 10, nextScene: "nivel4" },
            { text: "6", value: 0, nextScene: "inicio" },
            { text: "10", value: 0, nextScene: "inicio" }
        ]
    },
    nivel4: {
        text: "Nivel 4: ¿Cuánto es 10 - 3?",
        image: "nivel4.jpg",
        options: [
            { text: "7", value: 10, nextScene: "nivel5" },
            { text: "5", value: 0, nextScene: "inicio" },
            { text: "6", value: 0, nextScene: "inicio" }
        ]
    },
    nivel5: {
        text: "Nivel 5: Si tienes 3 docenas de huevos, ¿cuántos huevos tienes en total?",
        image: "nivel5.jpg",
        options: [
            { text: "36", value: 10, nextScene: "nivel6" },
            { text: "24", value: 0, nextScene: "inicio" },
            { text: "30", value: 0, nextScene: "inicio" }
        ]
    },
    nivel6: {
        text: "Nivel 6: ¿Cuál es el resultado de 4 x 3?",
        image: "nivel6.jpg",
        options: [
            { text: "12", value: 10, nextScene: "nivel7" },
            { text: "10", value: 0, nextScene: "inicio" },
            { text: "8", value: 0, nextScene: "inicio" }
        ]
    },
    nivel7: {
        text: "Nivel 7: Si tienes 15 caramelos y los repartes en partes iguales entre 5 amigos, ¿cuántos caramelos recibe cada amigo?",
        image: "nivel7.jpg",
        options: [
            { text: "3", value: 10, nextScene: "nivel8" },
            { text: "5", value: 0, nextScene: "inicio" },
            { text: "2", value: 0, nextScene: "inicio" }
        ]
    },
    nivel8: {
        text: "Nivel 8: ¿Cuánto es 7 + 6?",
        image: "nivel8.jpg",
        options: [
            { text: "13", value: 10, nextScene: "nivel9" },
            { text: "12", value: 0, nextScene: "inicio" },
            { text: "14", value: 0, nextScene: "inicio" }
        ]
    },
    nivel9: {
        text: "Nivel 9: Si restas 9 de 15, ¿cuál es el resultado?",
        image: "nivel9.jpg",
        options: [
            { text: "6", value: 10, nextScene: "nivel10" },
            { text: "5", value: 0, nextScene: "inicio" },
            { text: "7", value: 0, nextScene: "inicio" }
        ]
    },
    nivel10: {
        text: "Nivel 10: ¿Cuál es el siguiente número en esta secuencia? 2, 4, 6, 8, __?",
        image: "nivel10.jpg",
        options: [
            { text: "10", value: 10, nextScene: "nivel11" },
            { text: "9", value: 0, nextScene: "inicio" },
            { text: "12", value: 0, nextScene: "inicio" }
        ]
    },
    nivel11: {
        text: "Nivel 11: ¿Cuánto es 9 + 8?",
        image: "nivel11.jpg",
        options: [
            { text: "17", value: 10, nextScene: "nivel12" },
            { text: "16", value: 0, nextScene: "inicio" },
            { text: "18", value: 0, nextScene: "inicio" }
        ]
    },
    nivel12: {
        text: "Nivel 12: Si tienes una docena de manzanas y comes 3, ¿cuántas te quedan?",
        image: "nivel12.jpg",
        options: [
            { text: "9", value: 10, nextScene: "nivel13" },
            { text: "10", value: 0, nextScene: "inicio" },
            { text: "8", value: 0, nextScene: "inicio" }
        ]
    },
    nivel13: {
        text: "Nivel 13: ¿Cuál es el triple de 3?",
        image: "nivel13.jpg",
        options: [
            { text: "9", value: 10, nextScene: "nivel14" },
            { text: "6", value: 0, nextScene: "inicio" },
            { text: "12", value: 0, nextScene: "inicio" }
        ]
    },
    nivel14: {
        text: "Nivel 14: Si tienes 20 caramelos y das 5, ¿cuántos caramelos te quedan?",
        image: "nivel14.jpg",
        options: [
            { text: "15", value: 10, nextScene: "nivel15" },
            { text: "10", value: 0, nextScene: "inicio" },
            { text: "14", value: 0, nextScene: "inicio" }
        ]
    },
    nivel15: {
        text: "Nivel 15: ¿Cuánto es 5 x 5?",
        image: "nivel15.jpg",
        options: [
            { text: "25", value: 10, nextScene: "finalmat" },
            { text: "20", value: 0, nextScene: "inicio" },
            { text: "30", value: 0, nextScene: "inicio" }
        ]
    },
    finalmat: {
        text: "¡Felicidades! Has completado todos los niveles del juego matemático.",
        image: "final.gif",
        options: [
            { text: "Volver a jugar",value: 0, nextScene: "inicio" }
        ]
    },





    prog: {
        text: "¡Bienvenido al Juego de Programación para Estudiantes! ¿Listo para comenzar?",
        image: "inicioProg.jpg",
        options: [
            { text: "¡Sí, empecemos!",value: 0, nextScene: "niv1" }
        ]
    },
    niv1: {
        text: "Nivel 1: ¿Qué es una variable en programación?",
        image: "niv1.png",
        options: [
            { text: "Un contenedor para almacenar datos", value: 10, nextScene: "niv2" },
            { text: "Una función que realiza cálculos", value: 0, nextScene: "inicio" },
            { text: "Un tipo de bucle", value: 0, nextScene: "inicio" }
        ]
    },
    niv2: {
        text: "Nivel 2: ¿Cuál es el operador de asignación en la mayoría de los lenguajes de programación?",
        image: "niv2.jpg",
        options: [
            { text: "==", value: 0, nextScene: "inicio" },
            { text: "=", value: 10, nextScene: "niv3" },
            { text: ":", value: 0, nextScene: "inicio" }
        ]
    },
    niv3: {
        text: "Nivel 3: ¿Cómo se inicia un comentario de una sola línea en JavaScript?",
        image: "niv3.jpg",
        options: [
            { text: "//", value: 10, nextScene: "niv4" },
            { text: "/*", value: 0, nextScene: "inicio" },
            { text: "<!--", value: 0, nextScene: "inicio" }
        ]
    },
    niv4: {
        text: "Nivel 4: ¿Qué tipo de dato representa el valor true?",
        image: "niv4.png",
        options: [
            { text: "Número", value: 0, nextScene: "inicio" },
            { text: "Cadena", value: 0, nextScene: "inicio" },
            { text: "Booleano", value: 10, nextScene: "niv5" }
        ]
    },
    niv5: {
            text: "Nivel 5: ¿Cuál de estos es un bucle en programación?",
            image: "niv5.jpg",
            options: [
                { text: "for", value: 10, nextScene: "niv6" },
                { text: "if", value: 0, nextScene: "inicio" },
                { text: "else", value: 0, nextScene: "inicio" }
            ]
        },
    niv6: {
        text: "Nivel 6: ¿Cuál es la salida de 'console.log(2 + 2);' en JavaScript?",
        image: "niv6.jpg",
        options: [
            { text: "4", value: 10, nextScene: "niv7" },
            { text: "22", value: 0, nextScene: "inicio" },
            { text: "undefined", value: 0, nextScene: "inicio" }
        ]
    },
    niv7: {
        text: "Nivel 7: ¿Qué palabra clave se usa para definir una función en JavaScript?",
        image: "niv7.jpg",
        options: [
            { text: "def", value: 0, nextScene: "inicio" },
            { text: "fun", value: 0, nextScene: "inicio" },
            { text: "function", value: 10, nextScene: "niv8" }
        ]
    },
    niv8: {
        text: "Nivel 8: ¿Qué es un array?",
        image: "niv8.png",
        options: [
            { text: "Una estructura de datos que almacena múltiples valores", value: 10, nextScene: "niv9" },
            { text: "Un operador de asignación", value: 0, nextScene: "inicio" },
            { text: "Un tipo de bucle", value: 0, nextScene: "inicio" }
            ]
    },
    niv9: {
        text: "Nivel 9: ¿Cuál es la salida de 'console.log('10' + 20);'?",
        image: "niv9.jpg",
        options: [
            { text: "30", value: 0, nextScene: "inicio" },
            { text: "1020", value: 10, nextScene: "niv10" },
            { text: "Error", value: 0, nextScene: "inicio" }
        ]
    },
    niv10: {
        text: "Nivel 10: ¿Qué estructura se usa para tomar decisiones en el código?",
        image: "niv10.jpg",
        options: [
            { text: "Bucles", value: 0, nextScene: "inicio" },
            { text: "Condicionales (if)", value: 10, nextScene: "niv11" },
            { text: "Variables", value: 0, nextScene: "inicio" }
        ]
    },
    niv11: {
        text: "Nivel 11: ¿Qué es una función recursiva?",
        image: "niv11.png",
        options: [
            { text: "Una función que llama a otra función", value: 0, nextScene: "inicio" },
            { text: "Una función que devuelve un array", value: 0, nextScene: "inicio" },
            { text: "Una función que se llama a sí misma", value: 10, nextScene: "niv12" }
        ]
    },
    niv12: {
        text: "Nivel 12: ¿Qué método de array en JavaScript agrega un elemento al final?",
        image: "niv12.png",
        options: [
            { text: "pop", value: 0, nextScene: "inicio" },
            { text: "shift", value: 0, nextScene: "inicio" },
            { text: "push", value: 10, nextScene: "niv13" }
        ]
    },
    niv13: {
        text: "Nivel 13: ¿Cómo accedes al tercer elemento de un array llamado 'arr'?",
        image: "niv13.jpg",
        options: [
            { text: "arr[3]", value: 0, nextScene: "niv14" },
            { text: "arr[2]", value: 10, nextScene: "inicio" },
            { text: "arr(2)", value: 0, nextScene: "inicio" }
        ]
    },
    niv14: {
        text: "Nivel 14: ¿Cuál es el resultado de 'typeof null' en JavaScript?",
        image: "niv14.jpg",
        options: [
            { text: "'object'", value: 10, nextScene: "niv15" },
            { text: "'null'", value: 0, nextScene: "inicio" },
            { text: "'undefined'", value: 0, nextScene: "inicio" }
        ]
    },
    niv15: {
        text: "Nivel 15: ¿Qué hace el método 'map' en un array?",
        image: "niv15.png",
        options: [
            { text: "Modifica el array original", value: 0, nextScene: "inicio" },
            { text: "Elimina elementos del array", value: 0, nextScene: "inicio" },
            { text: "Crea un nuevo array con los resultados de aplicar una función a cada elemento", value: 10, nextScene: "finalprog" },
        ]
    },
    finalprog: {
        text: "¡Felicidades! Has completado todos los niveles del juego de programación.",
        image: "final.gif",
        options: [
            { text: "Volver a jugar", value: 0, nextScene: "inicio" }
        ]
    }
};

// Puntos del jugador y la máquina
let playerPoints = 0;
let machinePoints = 0;

// Función para mostrar una escena
function showScene(sceneKey) {
    const scene = scenes[sceneKey]; // Obtiene la escena actual
    const sceneDiv = document.getElementById("scene"); // Div donde se mostrará la escena
    const optionsDiv = document.getElementById("options"); // Div donde se mostrarán las opciones
    const statusDiv = document.getElementById("status"); // Div del estado del juego
    const imageElement = document.getElementById("scene-image"); // Elemento <img> para la imagen

    if (sceneKey === "inicio") {
        playerPoints = 0;
        machinePoints = 0;
    }

    // Cambia texto de la escena actual
    sceneDiv.innerHTML = `<p>${scene.text}</p>`;

    // Limpia los botones
    optionsDiv.innerHTML = "";

    // Muestra opciones disponibles para el jugador
    scene.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => {
            // Actualiza puntos del jugador
            playerPoints += option.value;
            // Turno de la máquina
            machineTurn(sceneKey);
            // Siguiente escena
            showScene(option.nextScene);
        };
        optionsDiv.appendChild(button);
    });

    // Estado actual
    statusDiv.innerHTML = `
        <p>Puntos del Jugador: ${playerPoints}</p>
        <p>Puntos de la Máquina: ${machinePoints}</p>
    `;

    // Cambia la imagen de la escena
    imageElement.src = scene.image;
}

// Función de evaluación para Minimax
function evaluateScore(scene, machineChoice) {
    // Aquí puedes definir la lógica para evaluar el puntaje de la máquina y el jugador
    return machineChoice.value - playerPoints;
}

// Función de Minimax
function minimax(sceneKey, depth, isMaximizingPlayer) {
    const scene = scenes[sceneKey];
    
    // Caso base: si se llega a un nivel de profundidad o si no hay opciones
    if (depth === 0 || scene.options.length === 0) {
        return 0; // Aquí puede ser una función de evaluación si es necesario
    }

    let bestScore = isMaximizingPlayer ? -Infinity : Infinity;

    // Recorrer todas las opciones posibles
    for (let option of scene.options) {
        // Recursión: llama a minimax para las siguientes jugadas
        let score = evaluateScore(scene, option);  // Este sería el puntaje basado en el movimiento

        // Aquí se hace la recursión para explorar más profundidades
        if (isMaximizingPlayer) {
            bestScore = Math.max(bestScore, score);
        } else {
            bestScore = Math.min(bestScore, score);
        }
    }

    return bestScore;
}

// Función para que la máquina elija una opción usando Minimax
function machineTurn(sceneKey) {
    const scene = scenes[sceneKey];

    if (sceneKey !== "inicio" && sceneKey !== "mat" && sceneKey !== "prog" && sceneKey !== "finalmat" && sceneKey !== "finalprog") {
        // Aquí no entra si 'sceneKey' es igual a cualquiera de los valores especificados.
        if (scene.options.length > 0) {
            let bestOption = null;
            let bestScore = -Infinity;

            // Evaluar todas las opciones posibles usando Minimax
            for (let option of scene.options) {
                let score = minimax(sceneKey, 3, false); // Llamada a Minimax con un límite de profundidad (ej. 3)
                if (score > bestScore) {
                    bestScore = score;
                    bestOption = option;
                }
            }

            // Actualiza puntos de la máquina con la mejor opción
            machinePoints += bestOption.value;
            alert(`La máquina eligió: ${bestOption.text}`);
        }
    }
}

showScene("inicio");

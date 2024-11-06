const scenes = {
    inicio: {
        text: "Te encuentras en un bosque oscuro. ¿Qué camino tomarás?",
        options: [
            { text: "Ir hacia las montañas", nextScene: "montanas" },
            { text: "Ir hacia el pueblo", nextScene: "pueblo" },
            { text: "Ir hacia el río", nextScene: "rio" }
        ]
    },
    montanas: {
        text: "Te acercas a las montañas. Ves una cueva y un camino hacia la cima.",
        options: [
            { text: "Entrar a la cueva", nextScene: "cueva" },
            { text: "Subir a la cima", nextScene: "cima" },
            { text: "Volver al bosque", nextScene: "inicio" }
        ]
    },
    pueblo: {
        text: "Llegas al pueblo y ves la taberna y la casa del alcalde.",
        options: [
            { text: "Visitar la taberna", nextScene: "taberna" },
            { text: "Hablar con el alcalde", nextScene: "alcalde" },
            { text: "Regresar al bosque", nextScene: "inicio" }
        ]
    },
    rio: {
        text: "Llegas al río. Unos bandidos están cerca.",
        options: [
            { text: "Enfrentar a los bandidos", nextScene: "bandidos" },
            { text: "Huir", nextScene: "inicio" }
        ]
    },
    cueva: {
        text: "En la cueva encuentras un cofre lleno de oro. ¡Has ganado!",
        options: []
    },
    cima: {
        text: "Al subir a la cima, el dragón te ataca. ¡Has perdido!",
        options: []
    },
    taberna: {
        text: "En la taberna te encuentras con un extraño que te da información importante.",
        options: [
            { text: "Hablar más con el extraño", nextScene: "extraño" },
            { text: "Regresar al bosque", nextScene: "inicio" }
        ]
    },
    alcalde: {
        text: "El alcalde te pide ayuda para resolver un problema.",
        options: [
            { text: "Aceptar la misión", nextScene: "mision" },
            { text: "Regresar al bosque", nextScene: "inicio" }
        ]
    },
    bandidos: {
        text: "Luchas contra los bandidos y logras vencerlos. ¡Has ganado!",
        options: []
    },
    extraño: {
        text: "El extraño te revela un secreto. Continúas tu aventura.",
        options: [
            { text: "Regresar al bosque", nextScene: "inicio" }
        ]
    },
    mision: {
        text: "Aceptas la misión del alcalde y salvas el pueblo. ¡Has ganado!",
        options: []
    }
};

// Función para mostrar una escena
function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    const sceneDiv = document.getElementById("scene");
    const optionsDiv = document.getElementById("options");

    // Mostrar el texto de la escena
    sceneDiv.innerHTML = scene.text;

    // Limpiar las opciones anteriores
    optionsDiv.innerHTML = "";

    // Mostrar las opciones disponibles
    scene.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => showScene(option.nextScene);
        optionsDiv.appendChild(button);
    });
}

showScene("inicio");

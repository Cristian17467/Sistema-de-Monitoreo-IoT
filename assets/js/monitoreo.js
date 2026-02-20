const servidores = [
    { id: 1, nombre: "Servidor Piso 1", activo: false },
    { id: 2, nombre: "Servidor Piso 2", activo: false },
    { id: 3, nombre: "Servidor Piso 3", activo: false },
    { id: 4, nombre: "Servidor Piso 4", activo: false }
];

const panel = document.getElementById("panelMonitoreo");
const mensaje = document.getElementById("mensajeInactivo");

let charts = {};

// 🔹 Simulación de activación (esto debe venir de tu panel de control real)
function activarServidor(id) {
    const servidor = servidores.find(s => s.id === id);
    servidor.activo = true;
    renderizarServidores();
}

function desactivarServidor(id) {
    const servidor = servidores.find(s => s.id === id);
    servidor.activo = false;
    renderizarServidores();
}

// 🔹 Generar datos aleatorios
function generarDatos() {
    return {
        cpu: Math.floor(Math.random() * 100),
        ram: Math.floor(Math.random() * 100),
        temp: Math.floor(Math.random() * 40) + 40
    };
}

function renderizarServidores() {
    panel.innerHTML = "";
    const activos = servidores.filter(s => s.activo);

    if (activos.length === 0) {
        mensaje.style.display = "block";
        return;
    }

    mensaje.style.display = "none";

    activos.forEach(servidor => {

        const contenedor = document.createElement("div");
        contenedor.classList.add("servidor-box");

        contenedor.innerHTML = `
            <h3>${servidor.nombre}</h3>
            <canvas id="chart-${servidor.id}"></canvas>
            <p id="estado-${servidor.id}"></p>
        `;

        panel.appendChild(contenedor);

        crearGrafica(servidor.id);
    });
}

function crearGrafica(id) {

    const ctx = document.getElementById(`chart-${id}`).getContext("2d");

    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                { label: "CPU (%)", data: [], borderWidth: 2 },
                { label: "RAM (%)", data: [], borderWidth: 2 },
                { label: "Temperatura (°C)", data: [], borderWidth: 2 }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 120 }
            }
        }
    });

    charts[id] = chart;

    setInterval(() => actualizarDatos(id), 3000);
}

function actualizarDatos(id) {

    const servidor = servidores.find(s => s.id === id);
    if (!servidor.activo) return;

    const datos = generarDatos();
    const chart = charts[id];

    const hora = new Date().toLocaleTimeString();

    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets.forEach(ds => ds.data.shift());
    }

    chart.data.labels.push(hora);
    chart.data.datasets[0].data.push(datos.cpu);
    chart.data.datasets[1].data.push(datos.ram);
    chart.data.datasets[2].data.push(datos.temp);

    chart.update();

    const estado = document.getElementById(`estado-${id}`);

    let mensajeEstado = "🟢 ESTABLE";
    if (datos.cpu > 85 || datos.temp > 75) mensajeEstado = "🔴 CRÍTICO";
    else if (datos.cpu > 60) mensajeEstado = "🟡 ALTO";

    estado.innerHTML = `
        CPU: ${datos.cpu}% |
        RAM: ${datos.ram}% |
        TEMP: ${datos.temp}°C |
        Estado: ${mensajeEstado}
    `;
}

/* 🔥 SOLO PARA PRUEBA
   Elimina esto cuando lo conectes con tu panel real */
activarServidor(1);
activarServidor(2);
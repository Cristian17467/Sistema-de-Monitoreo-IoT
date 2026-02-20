const API = "https://69980de6d66520f95f166acc.mockapi.io/api/v1/servidores";

/* ==========================
   ADMIN
========================== */
if(document.body.classList.contains("admin-page")){

async function loadDevices() {
    const res = await fetch(API);
    const data = await res.json();
    const table = document.getElementById("deviceTable");
    table.innerHTML = "";

    data.forEach(d => {
        table.innerHTML += `
        <tr>
            <td>${d.name}</td>
            <td>${d.type}</td>
            <td>${d.value}</td>
            <td class="${d.status ? 'estado-activo':'estado-inactivo'}">
                ${d.status ? "Activo" : "Inactivo"}
            </td>
            <td>
                <button class="btn btn-warning btn-sm"
                    onclick="editDevice('${d.id}','${d.name}','${d.type}','${d.value}','${d.status}')">
                    Editar
                </button>
                <button class="btn btn-danger btn-sm"
                    onclick="deleteDevice('${d.id}')">
                    Eliminar
                </button>
            </td>
        </tr>`;
    });
}

document.getElementById("deviceForm")?.addEventListener("submit", async function(e){
    e.preventDefault();

    const id = document.getElementById("deviceId").value;

    const device = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        value: parseInt(document.getElementById("value").value),
        status: document.getElementById("status").value === "true"
    };

    if(id){
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(device)
        });
    } else {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(device)
        });
    }

    this.reset();
    document.getElementById("deviceId").value = "";
    loadDevices();
});

window.editDevice = function(id,name,type,value,status){
    document.getElementById("deviceId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("type").value = type;
    document.getElementById("value").value = value;
    document.getElementById("status").value = status;
}

window.deleteDevice = async function(id){
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadDevices();
}

loadDevices();
}

/* ==========================
   CONTROL
========================== */

if(document.body.classList.contains("control-page")){

async function load(){
const res=await fetch(API);
const devices=await res.json();
const container=document.getElementById("controls");
container.innerHTML="";

devices.forEach(d=>{
container.innerHTML+=`
<div class="col-md-4">
  <div class="card p-4 mb-4">
    <h5>${d.name}</h5>
    <p>Valor actual: ${d.value}</p>

    <div class="switch-container">
      <span class="${d.status?'estado-activo':'estado-inactivo'}">
        ${d.status?'Activo':'Inactivo'}
      </span>

      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" ${d.status?'checked':''}
        onchange="toggle(${d.id},this.checked)">
      </div>
    </div>

  </div>
</div>`;
});
}

window.toggle = async function(id,state){
await fetch(`${API}/${id}`,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({status:state})
});
load();
}

load();
}
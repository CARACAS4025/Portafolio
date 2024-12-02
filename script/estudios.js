// Datos de estudios
const estudios = [
  {
    title: "Auxiliar en Sistemas Informáticos",
    institution: "Corporación Bolivariana del Valle",
    year: "2023 - 2024",
    description: "Desarrollé habilidades en soporte técnico, configuración de sistemas operativos, manejo de redes informáticas y mantenimiento de hardware y software."
  },
  {
    title: "Técnico Laboral en Asistente en Programación de Software",
    institution: "Politécnico PIO",
    year: "2023 - En curso",
    description: "Estoy adquiriendo conocimientos sólidos en lenguajes de programación, diseño de algoritmos, desarrollo web y bases de datos."
  },
  {
    title: "Diplomado en Inteligencia Artificial",
    institution: "Corporación Bolivariana del Valle",
    year: "2024",
    description: "Exploré los fundamentos de la Inteligencia Artificial, con énfasis en la automatización de procesos y sus aplicaciones prácticas."
  },
  {
    title: "Diplomado en Fundamentación en Administración de Empresas",
    institution: "Corporación Bolivariana del Valle",
    year: "2024",
    description: "Adquirí conocimientos en gestión empresarial, liderazgo, finanzas básicas y herramientas para la toma de decisiones estratégicas."
  }
];

// Función para renderizar estudios
function renderEstudios() {
  const container = document.getElementById("estudios-container");
  estudios.forEach(estudio => {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "col-lg-4");
    col.innerHTML = `
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${estudio.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${estudio.institution} (${estudio.year})</h6>
          <p class="card-text">${estudio.description}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Renderiza los estudios al cargar la página
document.addEventListener("DOMContentLoaded", renderEstudios);

// Datos de experiencia laboral
const experiencias = [
    {
      title: "Desarrollador Frontend Junior",
      company: "Corporación Bolivariana del Valle",
      year: "2023 - 2024",
      description: "Desarrollé interfaces de usuario utilizando HTML, CSS y JavaScript, asegurando la responsividad y funcionalidad en múltiples dispositivos. Colaboré con equipos de diseño para implementar componentes reutilizables."
    },
    {
      title: "Practicante en Soporte Técnico",
      company: "Corporación Bolivariana del Valle",
      year: "2024 - 2024",
      description: "Proporcioné soporte técnico a usuarios, instalé y configuré software, y resolví problemas relacionados con redes y hardware."
    },
    {
      title: "Proyecto Freelance",
      company: "Gestión de Inventarios",
      year: "2024",
      description: "Desarrollé un sistema de gestión de inventarios para una pequeña empresa utilizando tecnologías web como PHP y MySQL."
    }
  ];
  
  // Función para renderizar experiencias
  function renderExperiencias() {
    const container = document.getElementById("experiencias-container");
    experiencias.forEach(exp => {
      const col = document.createElement("div");
      col.classList.add("col-md-6", "col-lg-4");
      col.innerHTML = `
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">${exp.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${exp.company} (${exp.year})</h6>
            <p class="card-text">${exp.description}</p>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }
  
  // Renderiza las experiencias al cargar la página
  document.addEventListener("DOMContentLoaded", renderExperiencias);
  
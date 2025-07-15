const ramos = [
  // PRIMER AÑO
  { nombre: "Matemática para la Gestión I", semestre: 1, requisitos: [] },
  { nombre: "Introducción a la Gestión Pública", semestre: 1, requisitos: [] },
  { nombre: "Historia de las Instituciones Políticas y Administrativas de Chile", semestre: 1, requisitos: [] },
  { nombre: "Tecnologías y Sistemas de Información", semestre: 1, requisitos: [] },
  { nombre: "Bases Jurídicas para la Administración del Estado", semestre: 1, requisitos: [] },
  { nombre: "Inglés I", semestre: 1, requisitos: [] },
  { nombre: "Curso Libre I", semestre: 1, requisitos: [] },

  { nombre: "Matemática para la Gestión II", semestre: 2, requisitos: ["Matemática para la Gestión I"] },
  { nombre: "Evolución y Complejidad de la Administración Pública", semestre: 2, requisitos: ["Introducción a la Gestión Pública"] },
  { nombre: "Ideas y Debates Políticos Contemporáneos", semestre: 2, requisitos: [] },
  { nombre: "Epistemología de las Ciencias Sociales", semestre: 2, requisitos: [] },
  { nombre: "Marco Normativo para la Acción Administrativa I", semestre: 2, requisitos: ["Bases Jurídicas para la Administración del Estado"] },
  { nombre: "Inglés II", semestre: 2, requisitos: ["Inglés I"] },

  // SEGUNDO AÑO
  { nombre: "Estadística para la Gestión I", semestre: 3, requisitos: ["Matemática para la Gestión II"] },
  { nombre: "Dinámicas de la Administración Pública Chilena", semestre: 3, requisitos: ["Evolución y Complejidad de la Administración Pública"] },
  { nombre: "Estudio de los Fenómenos Políticos", semestre: 3, requisitos: ["Ideas y Debates Políticos Contemporáneos"] },
  { nombre: "Metodología de la Investigación de la Administración Pública", semestre: 3, requisitos: ["Epistemología de las Ciencias Sociales"] },
  { nombre: "Marco Normativo para la Acción Administrativa II", semestre: 3, requisitos: ["Marco Normativo para la Acción Administrativa I"] },
  { nombre: "Inglés III", semestre: 3, requisitos: ["Inglés II"] },

  { nombre: "Estadística para la Gestión II", semestre: 4, requisitos: ["Estadística para la Gestión I"] },
  { nombre: "Diseño Organizacional", semestre: 4, requisitos: ["Dinámicas de la Administración Pública Chilena"] },
  { nombre: "La Administración Pública y los Fenómenos Políticos", semestre: 4, requisitos: ["Estudio de los Fenómenos Políticos"] },
  { nombre: "Métodos Cualitativos para la Administración Pública", semestre: 4, requisitos: ["Metodología de la Investigación de la Administración Pública"] },
  { nombre: "Comportamiento Humano en la Organización", semestre: 4, requisitos: [] },
  { nombre: "Inglés IV", semestre: 4, requisitos: ["Inglés III"] },
  { nombre: "Curso Formación General I", semestre: 4, requisitos: [] },

  // TERCER AÑO
  { nombre: "Fenómenos Microeconómicos", semestre: 5, requisitos: ["Estadística para la Gestión II"] },
  { nombre: "Gestión de Procesos en Organizaciones Públicas", semestre: 5, requisitos: ["Diseño Organizacional"] },
  { nombre: "Análisis Político Internacional", semestre: 5, requisitos: ["Estudio de los Fenómenos Políticos"] },
  { nombre: "Métodos Cuantitativos para la Administración Pública", semestre: 5, requisitos: ["Métodos Cualitativos para la Administración Pública"] },
  { nombre: "Bases Contables para la Gestión Pública", semestre: 5, requisitos: [] },
  { nombre: "Marco Analítico de las Políticas Públicas", semestre: 5, requisitos: [] },

  { nombre: "Fenómenos Macroeconómicos", semestre: 6, requisitos: ["Fenómenos Microeconómicos"] },
  { nombre: "Planificación Estratégica de Organizaciones Públicas", semestre: 6, requisitos: [] },
  { nombre: "Negociación y Toma de Decisiones", semestre: 6, requisitos: [] },
  { nombre: "Gestión Territorial y Descentralización", semestre: 6, requisitos: [] },
  { nombre: "Gestión Financiera y Presupuestaria del Estado", semestre: 6, requisitos: ["Bases Contables para la Gestión Pública"] },
  { nombre: "Formulación e Implementación de Políticas Públicas", semestre: 6, requisitos: ["Marco Analítico de las Políticas Públicas"] },
  { nombre: "Gestión de Personas en Organizaciones Públicas", semestre: 6, requisitos: ["Comportamiento Humano en la Organización"] },

  // CUARTO AÑO
  { nombre: "Economía del Sector Público", semestre: 7, requisitos: ["Fenómenos Macroeconómicos"] },
  { nombre: "Control y Evaluación en Organizaciones Públicas", semestre: 7, requisitos: [] },
  { nombre: "Análisis Integrado de los Problemas Públicos", semestre: 7, requisitos: ["*requiere todos los ramos hasta el V semestre"] },
  { nombre: "Contabilidad Gubernamental", semestre: 7, requisitos: ["Gestión Financiera y Presupuestaria del Estado"] },
  { nombre: "Evaluación de Políticas Públicas", semestre: 7, requisitos: ["Formulación e Implementación de Políticas Públicas"] },
  { nombre: "Curso Libre II", semestre: 7, requisitos: [] },

  { nombre: "Gestión de Proyectos Sociales", semestre: 8, requisitos: [] },
  { nombre: "Simulación de Asesoría", semestre: 8, requisitos: [] },
  { nombre: "Comunicación Estratégica y Marketing Político", semestre: 8, requisitos: [] },
  { nombre: "Seminario de Investigación Aplicada", semestre: 8, requisitos: ["*requiere todos los ramos hasta el VII semestre"] },
  { nombre: "Auditoría Gubernamental", semestre: 8, requisitos: ["Contabilidad Gubernamental"] },
  { nombre: "Análisis Empírico de Políticas Públicas", semestre: 8, requisitos: ["Evaluación de Políticas Públicas"] },

  // QUINTO AÑO
  { nombre: "Evaluación de Proyectos Sociales", semestre: 9, requisitos: ["Gestión de Proyectos Sociales"] },
  { nombre: "Dirección y Ética Pública", semestre: 9, requisitos: ["*requiere todos los ramos hasta el VIII semestre"] },
  { nombre: "Electivo I", semestre: 9, requisitos: [] },
  { nombre: "Electivo II", semestre: 9, requisitos: [] },
  { nombre: "Electivo III", semestre: 9, requisitos: [] },
  { nombre: "Electivo IV", semestre: 9, requisitos: [] },
  { nombre: "Curso Formación General II", semestre: 9, requisitos: [] },

  { nombre: "Práctica Profesional", semestre: 10, requisitos: ["*requiere todos los ramos"] },
  { nombre: "Examen de Título", semestre: 10, requisitos: ["*requiere todos los ramos"] }
];

const container = document.getElementById('malla');
const estado = {};

function desbloqueado(ramo) {
  return ramo.requisitos.every(r => !r.startsWith('*') && estado[r]);
}

function actualizar() {
  container.innerHTML = '';
  for (let s = 1; s <= 10; s++) {
    // columna semestre
    const label = document.createElement('div');
    label.className = 'semestre-label';
    label.textContent = `S${s}`;
    container.appendChild(label);
    // ramos
    ramos
      .filter(r => r.semestre === s)
      .forEach(r => {
        const div = document.createElement('div');
        div.className = 'ramo';
        div.textContent = r.nombre;
        if (estado[r.nombre]) div.classList.add('aprobado');
        else if (!desbloqueado(r)) div.classList.add('bloqueado');
        div.onclick = () => {
          if (!desbloqueado(r)) return;
          estado[r.nombre] = !estado[r.nombre];
          actualizar();
        };
        container.appendChild(div);
      });
  }
}

actualizar();

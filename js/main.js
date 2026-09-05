/**
 * RT POWER - Interactividad y lógica del sitio
 * Controla el menú, las pestañas técnicas, el cotizador, WhatsApp,
 * el formulario de contacto y las animaciones de cifras.
 */

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenuMovil();
  iniciarBarraAlDesplazar();
  iniciarPestanasTecnicas();
  iniciarCotizadorProyecto();
  iniciarSelectorWhatsApp();
  iniciarFormularioContacto();
  iniciarAnimacionContadores();
});

/* ==========================================================================
   1. Apertura y cierre del menú móvil
   ========================================================================== */

function iniciarMenuMovil() {
  const botonAbrirMenu = document.getElementById('boton-menu-movil');
  const menuMovil = document.getElementById('menu-movil');
  const botonCerrarMenu = document.getElementById('cerrar-menu-movil');
  const enlacesMenuMovil = document.querySelectorAll('.enlace-menu-movil');

  if (!botonAbrirMenu || !menuMovil) return;

  function abrirMenu() {
    menuMovil.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function cerrarMenu() {
    menuMovil.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  botonAbrirMenu.addEventListener('click', abrirMenu);

  if (botonCerrarMenu) {
    botonCerrarMenu.addEventListener('click', cerrarMenu);
  }

  enlacesMenuMovil.forEach(enlace => {
    enlace.addEventListener('click', cerrarMenu);
  });
}

/* ==========================================================================
   2. Cambio visual de la barra de navegación al desplazarse
   ========================================================================== */

function iniciarBarraAlDesplazar() {
  const barraNavegacion = document.getElementById(
    'barra-navegacion-principal'
  );

  if (!barraNavegacion) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      barraNavegacion.classList.add(
        'bg-slate-950/95',
        'shadow-2xl',
        'backdrop-blur-md',
        'py-3'
      );

      barraNavegacion.classList.remove(
        'bg-transparent',
        'py-5'
      );
    } else {
      barraNavegacion.classList.remove(
        'bg-slate-950/95',
        'shadow-2xl',
        'backdrop-blur-md',
        'py-3'
      );

      barraNavegacion.classList.add(
        'bg-transparent',
        'py-5'
      );
    }
  });
}

/* ==========================================================================
   3. Pestañas interactivas de soluciones eléctricas y CEN
   ========================================================================== */

const datosTecnicos = {
  pmgd: {
    titulo: 'Soluciones Integrales para PMGD y Netbilling',
    insignia: 'NORMATIVA CEN & SEC',

    imagen:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=700&crop=bottom&q=85',

    descripcionImagen:
      'Planta solar PMGD - Integración de media tensión y telemedida',

    descripcion:
      'Desarrollamos soluciones técnicas llave en mano para Pequeños Medios de Generación Distribuida (PMGD) y sistemas Netbilling, asegurando el estricto cumplimiento de los estándares exigidos por el Coordinador Eléctrico Nacional.',

    caracteristicas: [
      'Diseño e ingeniería de conexión conforme a la Norma Técnica de Conexión y Operación (NTCO).',
      'Integración de protecciones eléctricas, reconectadores y celdas de media tensión.',
      'Sistemas de telemedida y comunicación hacia centros de control y distribuidoras.',
      'Tramitación y declaración SEC con Ingenieros Certificados Clase A.'
    ],

    protocolos: [
      'NTCO PMGD',
      'IEC 61850',
      'DNP3',
      'Modbus TCP/RTU'
    ],

    textoBoton: 'Cotizar Proyecto PMGD',

    etapas: [
      {
        numero: '01',
        nombre: 'Levantamiento',
        detalle:
          'Inspección técnica en terreno y revisión de punto de conexión.'
      },
      {
        numero: '02',
        nombre: 'Ingeniería & CEN',
        detalle:
          'Desarrollo de memorias de cálculo, planos y protocolos.'
      },
      {
        numero: '03',
        nombre: 'Integración',
        detalle:
          'Montaje de tableros, equipos de control y telemetría.'
      },
      {
        numero: '04',
        nombre: 'Puesta en Servicio',
        detalle:
          'Pruebas punto a punto con CEN y entrega de as-built.'
      }
    ]
  },

  sitr: {
    titulo: 'SITR - Sistema de Información en Tiempo Real para el CEN',
    insignia: 'TELEMETRÍA CRÍTICA',

    imagen:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',

    descripcionImagen:
      'Gateways industriales y enlace de telemetría redundante',

    descripcion:
      'Implementación integral de la plataforma de transmisión y monitoreo de datos operativos en tiempo real entre la central de generación o subestación y el Coordinador Eléctrico Nacional (CEN).',

    caracteristicas: [
      'Configuración y enlace mediante protocolos DNP3 TCP/IP, ICCP/TASE.2 o IEC 60870-5-104.',
      'Integración de RTUs, gateways industriales y switches rugerizados.',
      'Pruebas de enlace de datos punto a punto en coordinación directa con ingenieros del CEN.',
      'Redundancia en canales de comunicación mediante fibra óptica, enlaces dedicados o 4G/LTE industrial.'
    ],

    protocolos: [
      'DNP3 TCP',
      'ICCP / TASE.2',
      'IEC 60870-5-104',
      'IEC 61850'
    ],

    textoBoton: 'Consultar Integración SITR',
    etapas: [
      {
        numero: '01',
        nombre: 'Diseño de Arquitectura',
        detalle:
          'Definición de RTU, mapa de puntos DNP3 y red de comunicación.'
      },
      {
        numero: '02',
        nombre: 'Configuración Gateway',
        detalle:
          'Mapeo de señales analógicas y digitales de la central.'
      },
      {
        numero: '03',
        nombre: 'Validación CEN',
        detalle:
          'Pruebas de latencia, calidad de datos y homologación con CEN.'
      }
    ]
  },

  pmu: {
    titulo: 'PMU - Unidades de Medición Fasorial',
    insignia: 'ALTA FRECUENCIA & PRECISIÓN',

    imagen:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',

    descripcionImagen:
      'Monitoreo fasorial de alta resolución en subestaciones eléctricas',

    descripcion:
      'Monitoreo sincronizado de fasores de tensión y corriente en tiempo real con alta resolución temporal para análisis dinámico del Sistema Eléctrico Nacional.',

    caracteristicas: [
      'Medición de fasores sincrónicos conforme a la norma IEEE C37.118.',
      'Integración de concentradores de datos fasoriales locales y transmisión remota.',
      'Detección temprana de oscilaciones de potencia y perturbaciones en la red.',
      'Sincronización horaria absoluta vía GPS con precisión de microsegundos.'
    ],

    protocolos: [
      'IEEE C37.118',
      'IEEE C37.238 PTP',
      'IRIG-B',
      'IEC 61850-9-2'
    ],

    textoBoton: 'Solicitar Asesoría en PMU',

    etapas: [
      {
        numero: '01',
        nombre: 'Selección de Equipo',
        detalle:
          'Unidades PMU certificadas con entradas para TT/TC.'
      },
      {
        numero: '02',
        nombre: 'Sincronía GPS',
        detalle:
          'Instalación de antena y reloj maestro de precisión submicrosegundo.'
      },
      {
        numero: '03',
        nombre: 'Transmisión Fasorial',
        detalle:
          'Enlace continuo de datos hacia el concentrador del CEN.'
      }
    ]
  },

  slrp: {
    titulo:
      'SLRP - Sistema de Lectura Remota de Parámetros y Oscilografías',

    insignia: 'AUDITORÍA & PROTECCIÓN',

    imagen:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',

    descripcionImagen:
      'Relés de protección y registro de eventos COMTRADE para CEN',

    descripcion:
      'Plataforma automatizada que permite al Coordinador Eléctrico Nacional acceder de forma remota y segura a los registros oscilográficos y secuencias de eventos de los relés de protección.',

    caracteristicas: [
      'Descarga y conversión automatizada a formato COMTRADE (IEEE C37.111).',
      'Conexión segura y encriptada mediante VPN o SSH para auditoría de eventos posteriores a una falla.',
      'Compatible con relés de marcas líderes como SEL, Siemens, ABB, GE y Schneider.',
      'Almacenamiento local redundante con respaldo histórico para auditorías regulatorias.'
    ],

    protocolos: [
      'COMTRADE IEEE C37.111',
      'IEC 61850 MMS',
      'FTP / SFTP',
      'SNMP'
    ],

    textoBoton: 'Implementar Sistema SLRP',

    etapas: [
      {
        numero: '01',
        nombre: 'Relevamiento de Relés',
        detalle:
          'Identificación de IED y versiones de firmware compatibles.'
      },
      {
        numero: '02',
        nombre: 'Servidor SLRP',
        detalle:
          'Implementación del software de recolección de oscilografías.'
      },
      {
        numero: '03',
        nombre: 'Habilitación CEN',
        detalle:
          'Pruebas de descarga remota y certificación con el Coordinador.'
      }
    ]
  },

  gps: {
    titulo:
      'Sincronización Horaria de Alta Precisión (GPS / PTP / IRIG-B)',

    insignia: 'TIEMPO EXACTO SUBESTACIONES',

    imagen:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',

    descripcionImagen:
      'Relojes maestros GPS o GNSS para sincronismo temporal en microsegundos',

    descripcion:
      'Sistemas maestros de sincronización de tiempo mediante receptores satelitales GPS/GNSS para garantizar la concordancia cronológica exacta de todos los relés, PMU y sistemas SCADA.',

    caracteristicas: [
      'Relojes maestros GPS con salidas PTP, IRIG-B y NTP.',
      'Antenas exteriores de alta ganancia con supresores de transitorios y rayos.',
      'Garantía de sincronismo temporal para análisis forense de fallas.',
      'Cumplimiento de las exigencias de tiempo del Coordinador Eléctrico Nacional.'
    ],

    protocolos: [
      'IEEE 1588 PTP',
      'IRIG-B Demodulado/Modulado',
      'NTP / SNTP',
      'PPS'
    ],

    textoBoton: 'Consultar Relojes y Sincronismo',

    etapas: [
      {
        numero: '01',
        nombre: 'Estudio de Ubicación',
        detalle:
          'Revisión de línea de vista de antena GPS y distribución de señal.'
      },
      {
        numero: '02',
        nombre: 'Montaje y Cableado',
        detalle:
          'Instalación de reloj maestro, cable coaxial y derivadores ópticos.'
      },
      {
        numero: '03',
        nombre: 'Calibración y Pruebas',
        detalle:
          'Medición de variaciones temporales y validación de sincronía en cada IED.'
      }
    ]
  },

  scada: {
    titulo: 'Monitoreo, Control y SCADA Remoto',
    insignia: 'OPERACIÓN & DISPONIBILIDAD',

    imagen:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',

    descripcionImagen:
      'Control y monitoreo de procesos energéticos e industriales en tiempo real',

    descripcion:
      'Sistemas avanzados de supervisión y control para centrales de generación, plantas solares, subestaciones e industrias con paneles de información en tiempo real.',

    caracteristicas: [
      'Desarrollo de pantallas HMI intuitivas con diagramas unilineales interactivos.',
      'Control de interruptores, reconectadores, inversores fotovoltaicos y generadores.',
      'Alarmas tempranas en tiempo real y notificaciones ante eventos críticos.',
      'Acceso web seguro desde distintos dispositivos para operadores y gerencia técnica.'
    ],

    protocolos: [
      'Modbus TCP',
      'OPC UA',
      'MQTT Industrial',
      'DNP3',
      'IEC 60870-5-104'
    ],

    textoBoton: 'Diseñar Sistema SCADA',

    etapas: [
      {
        numero: '01',
        nombre: 'Ingeniería de Control',
        detalle:
          'Definición de señales, comandos de control e interbloqueos de seguridad.'
      },
      {
        numero: '02',
        nombre: 'Desarrollo Visual',
        detalle:
          'Diseño de interfaces HMI/SCADA de alto contraste y usabilidad.'
      },
      {
        numero: '03',
        nombre: 'Comisionamiento',
        detalle:
          'Pruebas de mando remoto y calibración de alarmas críticas.'
      }
    ]
  }
};

function iniciarPestanasTecnicas() {
  const botonesPestana = document.querySelectorAll(
    '.boton-pestana-tecnica'
  );

  const contenedor = document.getElementById(
    'contenido-pestana-tecnica'
  );

  const insigniaPestana = document.getElementById(
    'insignia-pestana-tecnica'
  );

  if (!botonesPestana.length || !contenedor) return;

  function mostrarContenidoPestana(clave) {
    const datos = datosTecnicos[clave] || datosTecnicos.pmgd;
    
      // Cambia la insignia del encabezado según la pestaña seleccionada.
      if (insigniaPestana) {
        insigniaPestana.textContent = datos.insignia;
      }

    const htmlCaracteristicas = datos.caracteristicas
      .map(caracteristica => `
        <li class="flex items-start space-x-3 text-slate-300">
          <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-amber-500/20 text-amber-400">
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>

          <span class="text-sm leading-relaxed">
            ${caracteristica}
          </span>
        </li>
      `)
      .join('');

    const htmlProtocolos = datos.protocolos
      .map(protocolo => `
        <span class="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-sky-300 border border-slate-700">
          ${protocolo}
        </span>
      `)
      .join('');

    const htmlEtapas = datos.etapas
      .map(etapa => `
        <div class="relative pl-6 pb-4 border-l-2 border-slate-700 last:border-0 last:pb-0">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-[9px] font-bold text-slate-950">
            ✓
          </div>

          <div class="text-xs font-mono font-bold text-amber-400">
            ${etapa.numero} · ${etapa.nombre}
          </div>

          <div class="text-xs text-slate-400 mt-0.5 leading-normal">
            ${etapa.detalle}
          </div>
        </div>
      `)
      .join('');

    contenedor.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animar-aparicion">

        <!-- Columna izquierda: descripción y características -->
        <div class="lg:col-span-7 space-y-6 lg:translate-y-4">
          <div>

            <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight">
              ${datos.titulo}
            </h3>

            <p class="text-slate-300 text-base mt-3 leading-relaxed">
              ${datos.descripcion}
            </p>
          </div>

          <div class="bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <svg
                class="w-4 h-4 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              Alcance técnico y entregables
            </h4>

            <ul class="space-y-3">
              ${htmlCaracteristicas}
            </ul>
          </div>

          <div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Protocolos y estándares soportados:
            </div>

            <div class="flex flex-wrap gap-2">
              ${htmlProtocolos}
            </div>
          </div>

          <div class="pt-3 flex flex-wrap gap-3">
            <a
              href="#cotizador"
              onclick="seleccionarServicioCotizador('${clave}')"
              class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 inline-flex items-center gap-2"
            >
              <span>${datos.textoBoton}</span>

              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>


          </div>
        </div>

        <!-- Columna derecha: imagen y etapas de trabajo -->
        <div class="lg:col-span-5 space-y-4">

          <div class="contenedor-tarjeta-imagen border border-slate-700/80 shadow-2xl">
            <img
              src="${datos.imagen}"
              alt="${datos.titulo}"
              class="w-full h-44 sm:h-48 object-cover"
            />

            <div class="capa-tarjeta-imagen absolute inset-0 flex flex-col justify-end p-4">
              <span class="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                RT POWER en Terreno
              </span>

              <p class="text-xs text-slate-200 mt-1 font-medium">
                ${datos.descripcionImagen}
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800 shadow-xl">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Metodología de Trabajo RT POWER
              </div>

              <span class="text-[11px] text-slate-400">
                Paso a paso
              </span>
            </div>

            <div class="space-y-2">
              ${htmlEtapas}
            </div>

            <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span class="text-amber-300 font-semibold">
                Garantía SEC Clase A
              </span>

            </div>
          </div>
        </div>
      </div>
    `;
  }

  botonesPestana.forEach(boton => {
    boton.addEventListener('click', () => {
      botonesPestana.forEach(botonPestana => {
        botonPestana.classList.remove(
          'activa',
          'bg-amber-500',
          'text-slate-950',
          'font-bold',
          'border-amber-500'
        );

        botonPestana.classList.add(
          'bg-slate-900',
          'text-slate-300',
          'border-slate-800'
        );
      });

      boton.classList.add(
        'activa',
        'bg-amber-500',
        'text-slate-950',
        'font-bold',
        'border-amber-500'
      );

      boton.classList.remove(
        'bg-slate-900',
        'text-slate-300',
        'border-slate-800'
      );

      const claveSeleccionada = boton.dataset.pestana;

      mostrarContenidoPestana(claveSeleccionada);
    });
  });

  // Muestra PMGD cuando carga la página.
  mostrarContenidoPestana('pmgd');
}

/*
 * Abre desde una tarjeta visual la pestaña técnica correspondiente
 * y desplaza suavemente el explorador hasta el inicio visible.
 */
window.abrirPestanaTecnica = function (clavePestana) {
  const botonPestana = document.querySelector(
    `.boton-pestana-tecnica[data-pestana="${clavePestana}"]`
  );

  const exploradorTecnico = document.getElementById(
    'explorador-tecnico'
  );

  if (!botonPestana || !exploradorTecnico) return;

  botonPestana.click();

  exploradorTecnico.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

/*
 * Permite que un botón de las pestañas seleccione automáticamente
 * el servicio correspondiente dentro del cotizador.
 */

window.seleccionarServicioCotizador = function (claveServicio) {
  const listaServicios = document.getElementById(
    'cotizacion-servicio'
  );

  if (!listaServicios) return;

  const equivalencias = {
    pmgd: 'PMGD y Netbilling (Normativa CEN)',
    sitr: 'SITR - Transmisión en Tiempo Real CEN',
    pmu: 'PMU - Unidades de Medición Fasorial',
    slrp: 'SLRP - Oscilografías y Registros CEN',
    gps: 'Sincronización Horaria GPS / PTP',
    scada: 'Monitoreo, SCADA & Operación Remota'
  };

  if (equivalencias[claveServicio]) {
    listaServicios.value = equivalencias[claveServicio];

    /*
     * Informa al resto del programa que el valor de la lista cambió.
     * Esto actualiza inmediatamente la vista previa del cotizador.
     */
    listaServicios.dispatchEvent(new Event('change'));
  }
};

/* ==========================================================================
   4. Cotizador interactivo de proyectos
   ========================================================================== */

function iniciarCotizadorProyecto() {
  const formulario = document.getElementById(
    'formulario-cotizacion-proyecto'
  );

  const vistaPrevia = document.getElementById(
    'resumen-cotizacion'
  );

  const botonEnviarWhatsApp = document.getElementById(
    'enviar-cotizacion-whatsapp'
  );

  if (!formulario) return;

  /*
   * Ya existe un único canal comercial para las solicitudes.
   * Por eso se elimina la selección inicial de área y el formulario
   * comienza directamente por la solución requerida.
   */
  const radioDestino = formulario.querySelector(
    'input[name="cotizacion-destino"]'
  );

  const cuadriculaDestino = radioDestino?.closest('.grid');
  const bloqueDestino = cuadriculaDestino?.parentElement;

  if (bloqueDestino) {
    bloqueDestino.remove();
  }

  const etiquetaServicio = formulario.querySelector(
    'label[for="cotizacion-servicio"]'
  );

  if (etiquetaServicio) {
    etiquetaServicio.textContent = '1. Solución Requerida *';
  }

  /*
   * Reemplaza el botón genérico de correo por dos accesos claros:
   * Gmail y Outlook/Hotmail. Ambos abren un mensaje nuevo ya completado.
   */
  const botonCorreoAnterior = document.getElementById(
    'enviar-cotizacion-correo'
  );

  if (botonCorreoAnterior) {
    const contenedorCorreos = document.createElement('div');
    contenedorCorreos.className = 'grid grid-cols-1 sm:grid-cols-2 gap-3';

    contenedorCorreos.innerHTML = `
      <button id="enviar-cotizacion-gmail" class="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2">
        <i data-lucide="mail" class="w-5 h-5 text-amber-400"></i>
        <span>Abrir Gmail</span>
      </button>
      <button id="enviar-cotizacion-outlook" class="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2">
        <i data-lucide="mail-open" class="w-5 h-5 text-sky-400"></i>
        <span>Outlook / Hotmail</span>
      </button>
    `;

    botonCorreoAnterior.replaceWith(contenedorCorreos);

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  const botonEnviarGmail = document.getElementById(
    'enviar-cotizacion-gmail'
  );

  const botonEnviarOutlook = document.getElementById(
    'enviar-cotizacion-outlook'
  );

  function generarMensaje() {
    const nombre =
      document.getElementById('cotizacion-nombre')?.value.trim() ||
      'No especificado';

    const empresa =
      document.getElementById('cotizacion-empresa')?.value.trim() ||
      'No especificada';

    const telefono =
      document.getElementById('cotizacion-telefono')?.value.trim() ||
      'No especificado';

    const correo =
      document.getElementById('cotizacion-correo')?.value.trim() ||
      'No especificado';

    const servicio =
      document.getElementById('cotizacion-servicio')?.value ||
      'Solución Eléctrica General';

    const region =
      document.getElementById('cotizacion-region')?.value.trim() ||
      'Por definir';

    const urgencia =
      document.getElementById('cotizacion-urgencia')?.value ||
      'Normal';

    const detalles =
      document.getElementById('cotizacion-detalles')?.value.trim() ||
      'Solicitud de contacto y evaluación técnica.';

    /*
     * Se evita el uso de emojis para que el texto conserve el mismo aspecto
     * en WhatsApp Web, Windows, Android, iPhone y clientes de correo.
     */
    const texto =
      `SOLICITUD DE COTIZACIÓN - RT POWER\n\n` +
      `Cliente: ${nombre}\n` +
      `Empresa: ${empresa}\n` +
      `Teléfono: ${telefono}\n` +
      `Correo: ${correo}\n` +
      `Servicio requerido: ${servicio}\n` +
      `Ubicación: ${region}\n` +
      `Plazo / urgencia: ${urgencia}\n\n` +
      `Detalles del proyecto:\n${detalles}\n\n` +
      `Enviado desde www.rtpower.cl`;

    return {
      texto,
      nombre,
      servicio
    };
  }

  function actualizarVistaPrevia() {
    if (!vistaPrevia) return;

    const mensaje = generarMensaje();

    vistaPrevia.textContent = mensaje.texto;
  }

  /*
   * Busca todos los campos del formulario y actualiza la vista previa
   * cada vez que el usuario escribe o selecciona una opción.
   */
  const campos = formulario.querySelectorAll(
    'input, select, textarea'
  );

  campos.forEach(campo => {
    campo.addEventListener(
      'input',
      actualizarVistaPrevia
    );

    campo.addEventListener(
      'change',
      actualizarVistaPrevia
    );
  });

  // Genera la primera vista previa al cargar la página.
  actualizarVistaPrevia();

  if (botonEnviarWhatsApp) {
    botonEnviarWhatsApp.addEventListener(
      'click',
      evento => {
        evento.preventDefault();

        const mensaje = generarMensaje();
        const numeroTelefono = '56942584408';
        const mensajeCodificado = encodeURIComponent(mensaje.texto);
        const enlace =
          `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

        window.open(enlace, '_blank', 'noopener,noreferrer');
      }
    );
  }

  function obtenerDatosCorreo() {
    const mensaje = generarMensaje();
    const correoDestino = 'elisabet.tobar@rtpower.cl';
    const asuntoSinCodificar =
      `Cotización RT POWER: ${mensaje.servicio} - ${mensaje.nombre}`;

    return {
      correoDestino,
      asunto: encodeURIComponent(asuntoSinCodificar),
      cuerpo: encodeURIComponent(mensaje.texto)
    };
  }

  if (botonEnviarGmail) {
    botonEnviarGmail.addEventListener('click', evento => {
      evento.preventDefault();

      const correo = obtenerDatosCorreo();
      const enlaceGmail =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(correo.correoDestino)}` +
        `&su=${correo.asunto}` +
        `&body=${correo.cuerpo}`;

      window.open(enlaceGmail, '_blank', 'noopener,noreferrer');
    });
  }

  if (botonEnviarOutlook) {
    botonEnviarOutlook.addEventListener('click', evento => {
      evento.preventDefault();

      const correo = obtenerDatosCorreo();
      const enlaceOutlook =
        `https://outlook.live.com/mail/0/deeplink/compose` +
        `?to=${encodeURIComponent(correo.correoDestino)}` +
        `&subject=${correo.asunto}` +
        `&body=${correo.cuerpo}`;

      window.open(enlaceOutlook, '_blank', 'noopener,noreferrer');
    });
  }
}

/* ==========================================================================
   5. Selector flotante de WhatsApp
   ========================================================================== */

function iniciarSelectorWhatsApp() {
  const botonFlotante = document.getElementById(
    'boton-whatsapp-flotante'
  );

  const selector = document.getElementById(
    'selector-whatsapp'
  );

  const botonCerrarSelector = document.getElementById(
    'cerrar-selector-whatsapp'
  );

  if (!botonFlotante || !selector) return;

  botonFlotante.addEventListener('click', evento => {
    evento.stopPropagation();

    selector.classList.toggle('hidden');
  });

  if (botonCerrarSelector) {
    botonCerrarSelector.addEventListener('click', () => {
      selector.classList.add('hidden');
    });
  }

  /*
   * Cierra la ventana cuando se hace clic en cualquier lugar
   * que no sea el botón ni la propia ventana.
   */
  document.addEventListener('click', evento => {
    const clicFueraDelSelector =
      !selector.contains(evento.target);

    const clicFueraDelBoton =
      !botonFlotante.contains(evento.target);

    if (clicFueraDelSelector && clicFueraDelBoton) {
      selector.classList.add('hidden');
    }
  });
}

/* ==========================================================================
   6. Validación y respuesta visual del formulario de contacto
   ========================================================================== */

function iniciarFormularioContacto() {
  const formulario = document.getElementById(
    'formulario-contacto-principal'
  );

  const cajaAlerta = document.getElementById(
    'alerta-contacto'
  );

  if (!formulario || !cajaAlerta) return;

  formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    const botonEnviar = formulario.querySelector(
      'button[type="submit"]'
    );

    if (!botonEnviar) return;

    const textoOriginal = botonEnviar.innerHTML;

    botonEnviar.disabled = true;

    botonEnviar.innerHTML = `
      <svg
        class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>

        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>

      Enviando solicitud...
    `;

    /*
     * Esta espera simula un envío.
     * Actualmente no envía los datos a un servidor.
     */
    setTimeout(() => {
      cajaAlerta.classList.remove('hidden');

      formulario.reset();

      botonEnviar.disabled = false;
      botonEnviar.innerHTML = textoOriginal;

      setTimeout(() => {
        cajaAlerta.classList.add('hidden');
      }, 7000);
    }, 1000);
  });
}

/* ==========================================================================
   7. Animación de cifras o contadores
   ========================================================================== */

function iniciarAnimacionContadores() {
  const contadores = document.querySelectorAll(
    '.contador-estadistica'
  );

  let animacionIniciada = false;

  function revisarContadores() {
    if (animacionIniciada) return;

    const portada = document.getElementById('inicio');

    if (!portada) return;

    const posicion = portada.getBoundingClientRect();

    const portadaVisible =
      posicion.top <= window.innerHeight &&
      posicion.bottom >= 0;

    if (!portadaVisible) return;

    animacionIniciada = true;

    contadores.forEach(contador => {
      const objetivo = parseInt(
        contador.getAttribute('data-objetivo') || '0',
        10
      );

      const prefijo =
        contador.getAttribute('data-prefijo') || '';

      const sufijo =
        contador.getAttribute('data-sufijo') || '';

      let valorActual = 0;

      const incremento = Math.max(
        1,
        Math.ceil(objetivo / 40)
      );

      const temporizador = setInterval(() => {
        valorActual += incremento;

        if (valorActual >= objetivo) {
          valorActual = objetivo;

          clearInterval(temporizador);
        }

        contador.textContent =
          `${prefijo}${valorActual}${sufijo}`;
      }, 30);
    });
  }

  window.addEventListener(
    'scroll',
    revisarContadores
  );

  revisarContadores();
}
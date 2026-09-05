# ⚡ RT POWER - Landing Page Corporativa

Landing page moderna, responsiva y de alta conversión desarrollada para **RT POWER - Ingeniería y Servicios** (Chile).

---

## 🌟 Características Principales

1. **Protagonismo en Soluciones Eléctricas & Normativa CEN**:
   - Módulos interactivos para **PMGD & Netbilling**, **SITR** (Tiempo Real CEN), **PMU** (Medición Fasorial), **SLRP** (Oscilografías y Eventos), **Sincronización Horaria GPS (PTP/IRIG-B)** y **Monitoreo & SCADA**.
   - Respaldo de ingenieros con certificación **SEC Clase A**.
2. **Control, Automatización y Soluciones Industriales**:
   - Tableros de Fuerza y Control (TTA, CCM), instrumentación, salas de bombas, variadores de frecuencia, ingeniería inversa y mantenimiento predictivo (termografía).
3. **Ferretería y Suministro Especializado**:
   - Venta por volumen, repuestos críticos, importación directa y contratos de abastecimiento continuo.
4. **Cotizador Interactivo de Proyectos**:
   - Asistente rápido de cotización que genera mensajes listos para enviar directamente a WhatsApp o correo electrónico formal, con selector de destinatario según el área.
5. **Doble Canal de Contacto Directo**:
   - **Área Técnica**: Daniel Retamal (`+56 9 6814 15257` / `daniel.retamal@rtpower.cl`).
   - **Área Comercial**: Elisabet Tobar (`+56 9 4258 4408` / `elisabet.tobar@rtpower.cl`).
   - Botón flotante interactivo de WhatsApp con selector inmediato de especialista.

---

## 📂 Estructura del Proyecto

```
rtpower-landing/
│── index.html              # Archivo principal de la landing page
│── css/
│   └── styles.css          # Estilos personalizados, animaciones y tema de marca
│── js/
│   └── main.js             # Lógica interactiva: cotizador, tabs técnicos, menú móvil, WhatsApp
│── assets/                 # Recursos gráficos y multimedia
└── README.md               # Documentación y guía de despliegue
```

---

## 🚀 Cómo Abrir y Probar Localmente

Puedes abrir directamente el archivo `index.html` en tu navegador favorito:
- En Windows: Doble clic sobre `index.html` o clic derecho -> *Abrir con* -> *Google Chrome / Microsoft Edge*.

O bien levantar un servidor local con Python si lo prefieres:
```bash
cd C:\Users\claud\.gemini\antigravity\scratch\rtpower-landing
python -m http.server 8000
```
Y abrir en el navegador `http://localhost:8000`.

---

## 🌐 Publicación en el Dominio Oficial (`www.rtpower.cl`)

Para subir la página a tu servidor web (cPanel, hosting tradicional, Vercel o Netlify):
1. Copia todo el contenido de esta carpeta (`index.html`, `css/`, `js/`, `assets/`) a la raíz de tu servidor (generalmente `public_html` en cPanel o repositorio Git en Vercel/Netlify).
2. ¡Listo! Al ser una web estática optimizada y de carga ultrarrápida, no requiere bases de datos ni configuración compleja de servidores Node.

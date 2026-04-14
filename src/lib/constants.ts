export const COMPANY = {
  name: "All Trade Technology",
  tagline: "Domina tu carga. Protege tu capital.",
  subtitle:
    "Eliminamos los obstáculos entre tu producto y el mundo. Nuestra tecnología y logística propia trabajan en silencio para que importar sea tan fácil como enviar un email.",
  address: "R. Casabella 985, Rafaela, Santa Fe, Argentina (CP 2300)",
  email: "sales@alltradetechnology.com",
  phone: "+54 9 3492 630909",
  whatsapp: "5493492630909",
  hours: "Lunes a Viernes 7:30 a 20:00",
} as const;

export const STATS = [
  { value: "350+", label: "Operaciones gestionadas" },
  { value: "3", label: "Continentes con presencia" },
  { value: "98%", label: "Entregas a tiempo" },
  { value: "24hs", label: "Respuesta a cotizaciones" },
] as const;

export const SERVICES = [
  {
    id: "comex",
    title: "Departamento de Comex Externo",
    description:
      "Nos integramos a tu empresa como tu equipo de comercio exterior. Analizamos, cotizamos y operamos tus compras internacionales defendiendo tus intereses.",
    features: ["Análisis de proveedores", "Gestión integral", "Sin costos fijos"],
  },
  {
    id: "logistica",
    title: "Logística Internacional & Aduana",
    description:
      "Desde la fábrica en origen hasta tu puerta. Coordinamos fletes, seguros y despachos aduaneros con precisión. Sin sorpresas en los costos.",
    features: ["Puerta a puerta", "Seguros incluidos", "Tracking en tiempo real"],
  },
  {
    id: "almacen",
    title: "Almacén & Distribución",
    description:
      "Recibimos tu carga, almacenamos bajo estricto control y preparamos pedidos para envío directo a tus clientes en todo el país.",
    features: ["Picking & packing", "Costos variables", "Cobertura nacional"],
  },
  {
    id: "llave-en-mano",
    title: "Importación Llave en Mano",
    description:
      "¿Detectaste una oportunidad? Buscamos el proveedor, validamos calidad y nacionalizamos el producto. Ideal para probar nuevos mercados.",
    features: ["Búsqueda de proveedor", "Control de calidad", "Operación completa"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Contanos qué necesitás",
    description:
      "Completá el formulario con los datos de tu operación. Producto, origen, volumen estimado.",
  },
  {
    step: 2,
    title: "Recibí tu cotización",
    description:
      "En menos de 24hs te enviamos un análisis completo con costos, tiempos y opciones logísticas.",
  },
  {
    step: 3,
    title: "Aprobá y relajate",
    description:
      "Nos encargamos de todo. Seguí tu operación en tiempo real desde nuestra plataforma.",
  },
] as const;

export const LOCATIONS = [
  {
    country: "Argentina",
    city: "Rafaela, Santa Fe",
    detail: "HQ · Depósitos · Operaciones",
  },
  {
    country: "Estados Unidos",
    city: "Miami, FL",
    detail: "Hub logístico · Consolidación",
  },
  {
    country: "Europa",
    city: "Red de proveedores",
    detail: "Sourcing · Validación de calidad",
  },
] as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Casos de Éxito", href: "#casos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#cotizar" },
] as const;

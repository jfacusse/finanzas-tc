const DATA = {
  tarjeta: {
    tipo: "Visa Signature ****7252",
    diaVencimiento: 8,
    limiteNacional: 5000000,
    limiteInternacional: 3000,
    cupoUtilizadoNacional: 1929970,
    cupoUtilizadoInternacionalUSD: 49.38,
    ultimaActualizacion: "2026-06-02"
  },

  cuotas: [
    {
      descripcion: "MacBook Air 15\" M5",
      tienda: "Apple.com CL",
      fechaCompra: "2026-06-02",
      montoTotal: 1384990,
      nCuotas: 12,
      montoCuota: 115416
    },
    {
      descripcion: "Chi Spa",
      tienda: "Chi Spa",
      fechaCompra: "2026-02-26",
      montoTotal: 360000,
      nCuotas: 10,
      montoCuota: 36000
    },
    {
      descripcion: "AGPRO Lorenza Roj",
      tienda: "Agpro",
      fechaCompra: "2026-03-09",
      montoTotal: 150000,
      nCuotas: 3,
      montoCuota: 50000
    },
    {
      descripcion: "Paris Parque Arauco",
      tienda: "Paris",
      fechaCompra: "2026-04-21",
      montoTotal: 92442,
      nCuotas: 2,
      montoCuota: 46221
    },
    {
      descripcion: "MercadoPago Rawgoal",
      tienda: "MercadoPago",
      fechaCompra: "2026-05-05",
      montoTotal: 24330,
      nCuotas: 3,
      montoCuota: 8110
    }
  ],

  fintual: {
    meta: "MacBook Air M5",
    depositadoInicial: 900000,
    aporteMensual: 45000,
    mesesPlan: 11,
    ventaMacEstimada: 550000,
    totalMeta: 1384990
  },

  meses: [
    {
      periodo: "Mayo 2026",
      montoFacturado: 91381,
      pagado: true,
      gastos: {
        "Restaurantes":    326701,
        "Café/Bebestibles": 35597,
        "Delivery":         36477,
        "Combustible":     126723,
        "Entretenimiento": 161400,
        "Estacionamiento":  25090,
        "Transporte":       14524,
        "Ropa":             24720,
        "Suscripciones":    42988,
        "Tecnología":       24990,
        "Hoteles/Viajes":  117880,
        "Servicios/Seguros":44607,
        "Otro":             46518
      }
    }
  ]
};

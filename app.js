const { createApp } = Vue;

createApp({
  data() {
    return {
      nombreCliente: '',
      categoria: '',
      comidaSeleccionada: '',
      cantidad: '',
      pedidos: [],
      error: '',

      comidas: [
        { nombre: 'Pizza', categoria: 'Comida rápida', precio: 5 },
        { nombre: 'Hamburguesa', categoria: 'Comida rápida', precio: 4 },
        { nombre: 'Pollo frito', categoria: 'Almuerzo', precio: 6 },
        { nombre: 'Arroz con pollo', categoria: 'Almuerzo', precio: 5 },
        { nombre: 'Pastel', categoria: 'Postres', precio: 3 },
        { nombre: 'Helado', categoria: 'Postres', precio: 2 }
      ]
    }
  },

  computed: {
    comidasFiltradas() {
      return this.comidas.filter(c => c.categoria === this.categoria);
    },

    totalGeneral() {
      return this.pedidos.reduce((total, p) => total + p.total, 0);
    }
  },

  methods: {

    agregarPedido() {

      if (!this.nombreCliente || !this.categoria || !this.comidaSeleccionada || this.cantidad <= 0) {
        this.error = "Complete todos los campos correctamente";
        return;
      }

      this.error = "";

      const total = this.comidaSeleccionada.precio * this.cantidad;

      this.pedidos.push({
        nombre: this.nombreCliente,
        categoria: this.categoria,
        comida: this.comidaSeleccionada.nombre,
        cantidad: this.cantidad,
        total: total
      });

      // limpiar
      this.nombreCliente = '';
      this.categoria = '';
      this.comidaSeleccionada = '';
      this.cantidad = '';
    },

    eliminarPedido(index) {
      this.pedidos.splice(index, 1);
    }

  }

}).mount('#app');
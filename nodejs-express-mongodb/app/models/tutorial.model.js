module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          nombre: String,
          apellido: String,
          direccion: String,
          telefono: Number,
          cedula: Number,
          cargo: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };
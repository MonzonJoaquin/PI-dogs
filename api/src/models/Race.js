const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define("race",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
        unique: true
			},
			height: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			weight: {
				type: DataTypes.STRING,
				allowNull: null,
			},
			years_of_life: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
};

/*
ID *
Nombre *
Altura *
Peso *
Años de vida

*/

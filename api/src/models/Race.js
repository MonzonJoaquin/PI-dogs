const { get } = require("express/lib/response");
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
				allowNull: false,
			},
			life_span: {
				type: DataTypes.STRING,
				allowNull: false
			},
			breedGroup: {
				type: DataTypes.STRING,
				defaultValue: "No pertenece a ninguna"
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false
			},
			createdInDB: {
				type: DataTypes.VIRTUAL,
				defaultValue: true,
				get() {
					return true
				}
			}
		},
		{
			timestamps: false,
		}
	);
};

/*
	  D *
Nombre *
Altura *
Peso *
Años de vida

*/

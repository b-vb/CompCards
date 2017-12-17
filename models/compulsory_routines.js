module.exports = (connection, DataTypes) => connection.define('compulsory_routines', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
});

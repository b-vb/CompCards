module.exports = (connection, DataTypes) => connection.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    gender: {
        type: DataTypes.CHAR(1),
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER(2),
        allowNull: true,
    },
    nationality: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    club: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
});

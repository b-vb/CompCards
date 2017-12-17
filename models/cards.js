module.exports = (connection, DataTypes) => connection.define('cards', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    compulsory_routine: {
        type: DataTypes.UUID,
        references: {
            model: 'routines',
            key: 'id',
        },
        allowNull: false,
    },
    optional_routine: {
        type: DataTypes.UUID,
        references: {
            model: 'routines',
            key: 'id',
        },
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
});

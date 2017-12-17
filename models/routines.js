module.exports = (connection, DataTypes) => connection.define('routines', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    element_1: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_2: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_3: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_4: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_5: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_6: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_7: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_8: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_9: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    element_10: {
        type: DataTypes.UUID,
        references: {
            model: 'elements',
            key: 'id',
        },
        allowNull: false,
    },
    diff1: {
        type: DataTypes.INTEGER(3),
        allowNull: true,
    },
    diff2: {
        type: DataTypes.INTEGER(3),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
});

module.exports = (connection, DataTypes) => connection.define('elements', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name_en: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    name_nl: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fig_code: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    position_code: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    diff_trampoline: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    diff_dmt: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
});

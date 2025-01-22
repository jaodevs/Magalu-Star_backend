import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";


@Table({
    tableName: "user",
    timestamps: true,
    paranoid: true,
})

export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;
}
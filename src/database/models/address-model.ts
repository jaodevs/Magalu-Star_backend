import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "./user-model";


@Table({
    tableName: "address",
    timestamps: true,
    paranoid: true,
})
export class Address extends Model<Address> {
       @ForeignKey(() => User)
        @Column({
            type: DataType.INTEGER,
            allowNull: false,
        })
        user: number;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        cep: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        neighborhood: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
       number: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        city: string;

        @Column({
            type: DataType.STRING,
            allowNull: false,
        })
        state: string;

}




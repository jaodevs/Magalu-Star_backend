import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "./user-model";


@Table({
    tableName: 'favoriteProducts',
    timestamps: true,
    paranoid: true,
})
export class FavoriteProducts extends Model<FavoriteProducts> {
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
    title: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    description: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    products: number;
}
import {
  Model,
  Column,
  Table,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
  Scopes
} from "sequelize-typescript";
import { UserGroup } from "./usergroup";
import { Group } from "./group";

@Scopes(() => ({
  groups: {
    include: [
      {
        model: Group,
        through: { attributes: [] },
      },
    ],
  },
}))

@Table
export class User extends Model<User> {

  @Column
  name!: string;

  @Column
  age!: number;

  @Column
  login!: string;

  @Column
  password!: string;

  @Column
  isDeleted!: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @BelongsToMany(() => Group, () => UserGroup, 'userId')
  groups?: Group[];
}

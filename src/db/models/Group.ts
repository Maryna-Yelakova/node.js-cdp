import {
  Model,
  Column,
  Table,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
  // Scopes,
  DataType,
} from "sequelize-typescript";
import { User } from "./user";
import { UserGroup } from "./usergroup";

// @Scopes(() => ({
//   users: {
//     include: [
//       {
//         model: User,
//         through: { attributes: [] },
//       },
//     ],
//   },
// }))

@Table
export class Group extends Model<Group> {

  @Column
  name!: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  permissions!: string[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @BelongsToMany(() => User, () => UserGroup, 'groupId')
  users?: User[];
}

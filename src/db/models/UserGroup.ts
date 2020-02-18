// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const UserGroup = sequelize.define('UserGroup', {
//     userId: DataTypes.INTEGER,
//     groupId: DataTypes.INTEGER,
//   }, {});
//   UserGroup.associate = function(models) {
//     UserGroup.belongsTo(models.User, {foreignKey: 'userId'});
//     UserGroup.belongsTo(models.Group, {foreignKey: 'groupId'});
//   };
//   return UserGroup;
// };
import { Model, Column, Table, ForeignKey, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { User } from "./user";
import { Group } from "./group";

@Table
export class UserGroup extends Model<UserGroup> {

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Group)
  @Column
  groupId!: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

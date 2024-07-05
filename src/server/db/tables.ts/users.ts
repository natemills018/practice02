import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse } from "../../types";
import { User } from "../../types";


export function insert(newBook: { email: string, password: string }) {
    return AlterQuery('INSERT INTO Users SET ?', [newBook])
};

export function find(column: string, value: string) {
    return SelectQuery<User>('SELECT * FROM Users WHERE ?? = ?', [column, value])
}


export function getOne(id: number) {
    return SelectQuery<User>('SELECT * FROM Users WHERE id = ?', [id])
}
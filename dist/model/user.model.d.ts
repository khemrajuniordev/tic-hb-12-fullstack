export declare enum Role {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}
export interface IUser {
    id: number;
    username: string;
    email: string;
    role: Role;
}
export declare class User implements IUser {
    id: number;
    username: string;
    email: string;
    role: Role;
    constructor(id: number, username: string, email: string, role: Role);
}
//# sourceMappingURL=user.model.d.ts.map
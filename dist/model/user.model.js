export var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CUSTOMER"] = "CUSTOMER";
})(Role || (Role = {}));
export class User {
    id;
    username;
    email;
    role;
    constructor(id, username, email, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }
}
//# sourceMappingURL=user.model.js.map
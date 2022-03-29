export class PersonelInfo {
    constructor(
        public department?: string,
        public name?: string,
        public email?: string,
        public phone?: string,
        public hotline?: string,
    ) {}
}

export class BranchInfo {
    constructor(
        public address?: string,
        public city?: string,
        public branchLeader?: string,
        public email?: string,
        public phone?: string,
        public fax?: string,
    ) {}
}

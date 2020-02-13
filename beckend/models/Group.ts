type Permissions = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface Group {
    id: string;
    name: string;
    permission: Array<Permissions>;
}

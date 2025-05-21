export interface Item {
    id: number;
    title: string;
    content: string;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}
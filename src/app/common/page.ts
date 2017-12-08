export class Page {
    content : any; // 列表数据
    first : boolean;
    last : boolean;
    number : number = 1; // 当前页码，后台从0开始，前台从1开始
    numberOfElements : number = 0;
    size : number = 10; // 分页大小
    totalElements : number = 0; // 总条数
    totalPages : number = 0;
}
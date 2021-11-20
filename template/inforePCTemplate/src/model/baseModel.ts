/*
 * @Description:
 * @Autor: sj
 * @Date: 2021-11-17 09:08:49
 * @LastEditors: sj
 * @LastEditTime: 2021-11-17 15:31:50
 */
export interface RequestInter {
  [propName: string]: any
}
/**
 * 查询条件接口
 */
export interface QueryInter extends RequestInter {
  pageSize: number
  pageNum: number
  total: number
  queryPo: any
}
/**
 * 接口返回
 */
export interface ResponseInter<T> {
  // 状态码
  readonly code: number
  // 消息
  readonly errmsg?: string
  // 消息
  readonly msg?: string
  // 数据
  data: T
}
/**
 * 分页数据
 */
export interface PagingInter<T> {
  endRow: number
  firstPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  lastPage: number
  list: [T]
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums?: [number]
  nextPage: number
  pageNum: number
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
}

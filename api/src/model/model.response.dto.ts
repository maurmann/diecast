import { model } from '@prisma/client';

export class Pagination {
  constructor(
    pageSize: number,
    pageNumber: number,
    rows: number,
    pages: number,
  ) {
    this.PageSize = pageSize;
    this.PageNumber = pageNumber;
    this.Rows = rows;
    this.Pages = pages;
  }

  PageSize: number;
  PageNumber: number;
  Rows: number;
  Pages: number;
}

export class ModelResponseDto {
  constructor(data: model[], paginagion: Pagination) {
    this.Data = data;
    this.Pagination = paginagion;
  }

  Data: model[];
  Pagination: Pagination;
}

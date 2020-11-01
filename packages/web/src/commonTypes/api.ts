export interface ApiSuccess<T> {
  ok: true;
  data: T;
}

export interface ApiFail {
  ok: false;
  error: any;
}

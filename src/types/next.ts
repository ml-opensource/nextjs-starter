import * as http from 'http';

export interface NextContext {
  query?: {[key: string]: any};
  req: http.IncomingMessage;
  res: http.ServerResponse;
  pathname: string;
  store: any;
}

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import doQuery from './db';

@Injectable()
export class AppService {

  async getHello() {
    await doQuery("select * from conf");
    return 'Hello World!';
  }
}

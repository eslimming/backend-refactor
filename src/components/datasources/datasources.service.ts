import { Injectable } from '@nestjs/common';
import { json } from 'express';
import doQuery from './../../db';


@Injectable()
export class DatasourcesService {

    // Get all datasources
    async getDatasources(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_get('datasources','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }


    async deleteDatasource(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_del('datasources','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }

    //@TODO Implement this later
    async postModels(ds: any) {
        try {
            return await doQuery(`CALL public.sp_api_post('datasources','${[JSON.stringify(ds)]}');`)
        } catch (err) {
            throw new Error(err);
        }
    }

    //@TODO Implement this later
    async putStoredProcedure(JSON: string) { }



    //

}

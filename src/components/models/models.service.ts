import { Injectable } from '@nestjs/common';
import { json } from 'express';
import doQuery from './../../db';


@Injectable()
export class ModelsService {

    // Get all datasources
    async getModels(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_get('conf','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }


    async deleteModel(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_del('conf','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }

    async postModels(modelo: any) {
        try {
            return await doQuery(`CALL public.sp_api_post('conf','${[JSON.stringify(modelo)]}');`)
        } catch (err) {
            throw new Error(err);
        }
    }

    //@TODO Implement this later
    //async postDatasource(JSON: string) { }

    //@TODO Implement this later
    //async putStoredProcedure(JSON: string) { }



    //

}

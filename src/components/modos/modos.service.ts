import { Injectable } from '@nestjs/common';
import { json } from 'express';
import doQuery from '../../db';


@Injectable()
export class ModosService {

    // Get all datasources
    async getModos(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_get('modos','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }


    // async deleteModos(id: string) {
    //     try {
    //         return await doQuery(`CALL public.sp_api_del('conf','${id}');`)
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    // async postModos(modelo: any) {
    //     try {
    //         return await doQuery(`CALL public.sp_api_post('conf','${[JSON.stringify(modelo)]}');`)
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    //@TODO Implement this later
    //async postDatasource(JSON: string) { }

    //@TODO Implement this later
    //async putStoredProcedure(JSON: string) { }



    //

}

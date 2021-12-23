import { Injectable } from '@nestjs/common';
import doQuery from '../../db';


@Injectable()
export class ScriptinitService {

    // Get all scriptinit
    async getScriptinit(id: string) {
        try {
            return await doQuery(`CALL public.sp_api_get('scriptinit','${id}');`)
        } catch (err) {
            throw new Error(err);
        }
    }


    // async deleteDatasource(id: string) {
    //     try {
    //         return await doQuery(`CALL public.sp_api_del('scriptinit','${id}');`)
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    //@TODO Implement this later
    async postScriptinit(ds: any) {
        try {
            return await doQuery(`CALL public.sp_api_post('scriptinit','${[JSON.stringify(ds)]}');`)
        } catch (err) {
            throw new Error(err);
        }
    }

    //@TODO Implement this later
    //async putStoredProcedure(JSON: string) { }



    //

}

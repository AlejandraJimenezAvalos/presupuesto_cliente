import { RequestManager } from '../managers/requestManager';
import { TypeGeneral } from '../interfaces/TypeGeneralInterface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PopUpManager } from '../managers/popUpManager';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class ModApropiacionHelper {
    constructor(private rqManager: RequestManager,
        private pUpManager: PopUpManager,
        private translate: TranslateService) {
        this.rqManager.setPath('MOVIMIENTOS_CRUD_SERVICE');
    }

    public getModTypes(): Observable<Array<TypeGeneral>> {
        this.rqManager.setPath('MOVIMIENTOS_CRUD_SERVICE');
        return this.rqManager.get(`tipo_movimiento`);
    }

    public modRegister(modificationData: any) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        modificationData.detail.CentroGestor = '1'; // Tomer del TOKEN.
        console.table(modificationData);
        console.info(JSON.stringify(modificationData));
        return this.rqManager.post('modificacion_apropiacion', modificationData).pipe(
            map(
                (res) => {
                    if (res['Type'] === 'error') {
                        this.pUpManager.showErrorAlert(this.translate.instant('mod_apr_error'));
                        return undefined;
                    }
                    return res;
                },
            ),
        );
    }
}
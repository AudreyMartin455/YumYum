import {AbstractEntity} from "../entities/abstract.entity";
import AsyncNedb from 'nedb-async';
import {Logger} from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import {from, Observable} from "rxjs";

export abstract class AbstractDao<D extends AbstractEntity> {
    // the datastore
    db: AsyncNedb<D>;

    //name of the managed collection
    collectionName: string;

    //a logger
    private readonly logger = new Logger(AbstractDao.name);

    protected constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.db = new AsyncNedb<D>({
            filename: `db/${collectionName}.db`,
            autoload: true,
        });
    }

    create(document: D): Observable<D> {
        this.logger.debug(`Create ${this.collectionName}`, document);
        document.createdOn = new Date();
        document.updatedOn = new Date();
        document.uuid = uuidv4();
        return from(this.db.asyncInsert(document));
    }

    update(document: D): Observable<D> {
        this.logger.debug(`Update ${this.collectionName}`, document);
        document.updatedOn = new Date();
        return from(this.db.asyncUpdate({uuid: document.uuid}, document)) as Observable<D>;
    }

    delete(uuid: string): Observable<unknown> {
        return from(this.db.asyncRemove({uuid: uuid}));
    }

    findAll(): Observable<D[]> {
        return from(this.db.asyncFind<D>({}));
    }


    findAllByFilters(filter: Record<string, any>): Observable<D[]> {
        return from(this.db.asyncFind<D>(filter));
    }


    findByUuid(uuid: string): Observable<D> {
        return this.findOne({uuid: uuid});
    }


    findOne(filter: Record<string, any>): Observable<D> {
        return from(this.db.asyncFindOne<D>(filter));
    }


    clearCollection(): Observable<unknown> {
        return from(this.db.asyncRemove({}));
    }
}

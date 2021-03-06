import { Repository, EntityTarget, getConnection } from "typeorm";

export class RepositoryBase<T> {
	public repository: Repository<T>;
	constructor(entity: EntityTarget<T>) {
		this.repository = getConnection().getRepository(entity);
	}
}

import { IDatabaseClusterMongoUserSettings } from "./database-cluster-mongo-user-settings";

export interface IDatabaseClusterUserSettings {
  pg_allow_replication: boolean;
  opensearch_acl: object[]
  acl: object[]
  mongo_user_settings: IDatabaseClusterMongoUserSettings
}

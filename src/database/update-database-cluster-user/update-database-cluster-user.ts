import { IResponse, IContext } from '../../types';
import {
  IDatabaseClusterUser,
  IDatabaseClusterUserSettings
} from '../types';

export interface IUpdateDatabaseClusterUserApiResponse {
  user: IDatabaseClusterUser;
}

export interface IUpdateDatabaseClusterUserApiRequest {
  database_cluster_id: string;
  user_name: string;
  settings?: IDatabaseClusterUserSettings;
}

export type UpdateDatabaseClusterUserResponse = IResponse<IUpdateDatabaseClusterUserApiResponse>;

export const updateDatabaseClusterUser = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  settings,
  user_name,
}: IUpdateDatabaseClusterUserApiRequest): Promise<Readonly<UpdateDatabaseClusterUserResponse>> => {
  const url = `/databases/${database_cluster_id}/users/${user_name}`;
  const body = {settings};

  return httpClient.post<IUpdateDatabaseClusterUserApiResponse>(url, body);
};

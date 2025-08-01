import { updateDatabaseClusterUser } from './update-database-cluster-user';

describe('udpate-database-cluster-user', () => {
  const default_input = {
    database_cluster_id: require('crypto').randomBytes(2),
    user_name: require('crypto').randomBytes(2),
    settings: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateDatabaseClusterUser).toBe('function');
    expect(typeof updateDatabaseClusterUser(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _updateDatabaseClusterUser = updateDatabaseClusterUser(context);
    await _updateDatabaseClusterUser(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/databases/${default_input.database_cluster_id}/users${default_input.user_name}`, {
      settings: default_input.settings
    });
  });

  it('should output axios response', async () => {
    const _updateDatabaseClusterUser = updateDatabaseClusterUser(context);
    const output = await _updateDatabaseClusterUser(default_input);

    expect(output).toBe(default_output);
  });
});

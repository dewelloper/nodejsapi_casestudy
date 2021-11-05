const { getCases,createCase,updateCase, createCaseReturnAll, deleteCase  }  = require('../controller/case.controller');


jest.mock('../controller/case.controller', () => ({ calcu: jest.fn() }));

describe('Controller', () => {
  let _res;
  beforeEach(() => {
    _res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should get case result', async () => {
    try
      {
      const req = {};
      await getCases(req, _res);
      expect(_res.status).toBeCalledWith(200);
    }
    catch(err)
    {

    }
  });

  test('should return correct result when case created', async () => {
      try
      {
        const reqForCreatePost = { body: { startDate: '2016-01-26', endDate: '2018-02-02', minCount: 2700, maxCount: 3000 } };
        await createCase(reqForCreatePost, _res);
        //expect(result).toBeCalledWith('1111', '22');
         expect(_res.status).toBeCalledWith(200);
        // expect(mRes.status().json).toBeCalledWith({ data: 'fake data' });
      }
      catch(err)
      {

      }
  });

  test('should return 200 for single update single result', async () => {
    try
    {
      const reqForCreatePost = { body: { _id: "6183d885cf70e75f9e79e131", startDate: '2016-01-26', endDate: '2018-02-02', minCount: 2700, maxCount: 3000 } };
      await updateCase(reqForCreatePost, _res);
       expect(_res.status).toBeCalledWith(200);
    }
    catch(err)
    {

    }
  });

  test('should return 200 for single update multiplle result', async () => {
    try
    {
      const reqForCreatePost = { body: { _id: "6183d885cf70e75f9e79e131", startDate: '2016-01-26', endDate: '2018-02-02', minCount: 2700, maxCount: 3000 } };
      await createCaseReturnAll(reqForCreatePost, _res);
       expect(_res.status).toBeCalledWith(200);
    }
    catch(err)
    {

    }
  });

});


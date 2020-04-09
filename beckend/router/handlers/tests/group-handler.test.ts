import { groupHandler } from '../group-handler';

const mockRequest = () => {
    return [{
        id: 0,
        name: '',
        permission: []
    }];
};

const mockResponse = () => {
    const res = {} as any;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('Groups', () => {

    it('getGroups should return data', async() => {
        const req = mockRequest();
        const res = mockResponse();
        await groupHandler.getGroups(req, res);
        // const request = true;
        // expect(request).toBeTruthy();

        expect(res.status).toHaveBeenCalledWith(200);
    })
});

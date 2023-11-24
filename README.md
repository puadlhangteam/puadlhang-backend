# PUADLHANG-API

## User Role

- admin
- specialist
- authorized
- anyone

## PATH

### User

| method |         path          |                            description                            | access level |                    req body                    |               res body                |
| :----: | :-------------------: | :---------------------------------------------------------------: | :----------: | :--------------------------------------------: | :-----------------------------------: |
|  GET   |      /user/data       | get user data if data is existed, otherwise create new user data. |  authorized  |                      null                      | [IResUserDTO](./src/types/dto.ts#L19) |
| PATCH  |      /user/data       |                         update user data                          |  authorized  |  [IReqUpdateUserDTO](./src/types/dto.ts#L30)   | [IMessageDTO](./src/types/dto.ts#L33) |
|  POST  | /user/role/specialist |                      apply specialist form.                       |  authorized  | [IReqSpecialistFormDTO](./src/types/dto.ts#L4) | [IMessageDTO](./src/types/dto.ts#L33) |

### Admin

| method |          path          |       description       | access level |                      req body                       |                    res body                     |
| :----: | :--------------------: | :---------------------: | :----------: | :-------------------------------------------------: | :---------------------------------------------: |
|  GET   | /admin/role/specialist | get all specialist form |    admin     |                        null                         | [IResSpecialistFormDTO](./src/types/dto.ts#L13) |
|  POST  | /admin/role/specialist | approve specialist form |    admin     | [IReqSpecialistApprovedDTO](./src/types/dto.ts#L19) |      [IMessageDTO](./src/types/dto.ts#L33)      |

### Solution

| method |              path               |           description           | access level |                   req body                   |                    res body                    |
| :----: | :-----------------------------: | :-----------------------------: | :----------: | :------------------------------------------: | :--------------------------------------------: |
|  GET   |           /solutions            |        get all solutions        |    anyone    |                     null                     | [IResSolutionsDTO\[\]](./src/types/dto.ts#L56) |
|  GET   | /solutions/solution/:solutionId |       get solution by id        |    anyone    |                     null                     |   [IResSolutionDTO](./src/types/dto.ts#L60)    |
|  POST  | /solutions/solution/:solutionId | post review comment in solution |  authorized  |    [IReqComment](./src/types/dto.ts#L50)     |     [IMessageDTO](./src/types/dto.ts#L33)      |
|  POST  |           /solutions/           |       create new solution       |    admin     | [ICreateSolutionDTO](./src/types/dto.ts#L36) |     [IMessageDTO](./src/types/dto.ts#L33)      |
| PATCH  | /solutions/solution/:solutionId |      update solution by id      |    admin     | [IUpdateSolutionDTO](./src/types/dto.ts#L47) |     [IMessageDTO](./src/types/dto.ts#L33)      |
| DELETE | /solutions/solution/:solutionId |      delete solution by id      |    admin     |                     null                     |     [IMessageDTO](./src/types/dto.ts#L33)      |

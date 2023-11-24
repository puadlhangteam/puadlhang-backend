# PUADLHANG-API

## user role

- admin
- specialist
- authorized
- anyone

## PATH

### User

| method |         path          |                            description                            | access level |       req body        |  res body   |
| :----: | :-------------------: | :---------------------------------------------------------------: | :----------: | :-------------------: | :---------: |
|  GET   |      /user/data       | get user data if data is existed, otherwise create new user data. |  authorized  |         null          | IResUserDTO |
| PATCH  |      /user/data       |                         update user data                          |  authorized  |   IReqUpdateUserDTO   | IMessageDTO |
|  POST  | /user/role/specialist |                      apply specialist form.                       |  authorized  | IReqSpecialistFormDTO | IMessageDTO |

### Admin

| method |          path          |       description       | access level |         req body          |                    res body                     |
| :----: | :--------------------: | :---------------------: | :----------: | :-----------------------: | :---------------------------------------------: |
|  GET   | /admin/role/specialist | get all specialist form |    admin     |           null            | [IResSpecialistFormDTO](./src/types/dto.ts#L13) |
|  POST  | /admin/role/specialist | approve specialist form |    admin     | IReqSpecialistApprovedDTO |                   IMessageDTO                   |

### Solution

| method |              path               |           description           | access level |      req body      |       res body       |
| :----: | :-----------------------------: | :-----------------------------: | :----------: | :----------------: | :------------------: |
|  GET   |           /solutions            |        get all solutions        |    anyone    |        null        | IResSolutionsDTO\[\] |
|  GET   | /solutions/solution/:solutionId |       get solution by id        |    anyone    |        null        |   IResSolutionDTO    |
|  POST  | /solutions/solution/:solutionId | post review comment in solution |  authorized  |    IReqComment     |     IMessageDTO      |
|  POST  |           /solutions/           |       create new solution       |    admin     | ICreateSolutionDTO |     IMessageDTO      |
| PATCH  | /solutions/solution/:solutionId |      update solution by id      |    admin     | IUpdateSolutionDTO |     IMessageDTO      |
| PATCH  | /solutions/solution/:solutionId |      update solution by id      |    admin     | IUpdateSolutionDTO |     IMessageDTO      |
| DELETE | /solutions/solution/:solutionId |      delete solution by id      |    admin     |        null        |     IMessageDTO      |

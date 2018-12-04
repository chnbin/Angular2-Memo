export class TableSettingService {
  settingTable(): object {
    let settings = {
      selectMode: 'single',
      hideSubHeader: true,
      actions: {
        add: false,
        edit: false,
        delete: false,
      },

      columns: {
        id: {
          title: 'ID',
          editable: false
        },
        name: {
          title: 'Full Name',
          editable: false
        },
        username: {
          title: 'User Name',
          editable: false
        },
        email: {
          title: 'Email',
          editable: false
        }
      }
    };
    return settings;
  }

  settingData(): object {
    let data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "ey.Padberg@rosamond.bizR"
      }
    ];
    return data;
  }
}
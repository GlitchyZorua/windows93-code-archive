le._apps["dialog-creator"] = {
   exec: function () {
      $window.form('Error Message Creator', {
        schema: {
          title: {
            type: 'string',
            title: 'Title',
            placeholder: 'Windows 93'
          },
          msg: {
            type: 'string',
            title: 'Message',
            placeholder: 'A fatal error has occured.'
          },
          icon: {
            type: 'string',
            title: 'Window Icon',
            placeholder: '/c/sys/skins/w93/win93.png',
            plugin: {
              explorer: {
                path: '/c/sys/skins/w93/'
              }
            }
          },
          img: {
            type: 'string',
            title: 'Error Icon',
            placeholder: '/c/sys/skins/w93/error.png',
            plugin: {
              explorer: {
                path: '/c/sys/skins/w93/'
              }
            }
          },
          help: {
            type: 'string',
            title: 'Help Button',
            placeholder: 'You can\'t get help now, haha!'
          },
          hline: {
            type: 'object',
            title: ' ',
            description: '<hr>' // a tiny little "hack" to print html
          },
          btnOk: {
            type: 'string',
            title: 'OK Button',
            placeholder: 'OK'
          },
          btnCancel: {
            type: 'string',
            title: 'Cancel Button',
            placeholder: 'Cancel'
          },
          hline2: {
            type: 'object',
            title: ' ',
            description: '<hr>'
          },
          prompt: {
            type: 'boolean',
            title: 'Prompt',
          },
          draggable: {
            type: 'boolean',
            title: 'Movable?',
            default: true
          },
          closable: {
            type: 'boolean',
            title: 'Closable?',
            default: true
          },
          note: {
            type: 'object',
            title: ' ',
            description: '<p style="text-align: center">Note: <b>You can use HTML in the error messages!</b></p>'
          },
        }
      }, function (ok, data) {
        if (ok) {
          if (data.prompt) data.prompt = '';
          $alert(data)
        }
      });
   },
   icon: "/c/sys/skins/w93/error.png",
   name: "W93 Dialog Creator",
   categories: "Amusement",
   terminal: false,
   hascli: false
}
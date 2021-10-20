module.exports = {
  methods: {
    MsgSuccess(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'success',       timeout     : seconds,
           title     : Titulo,          message     : Message,
           classMessage: 'text-white',  classTitle: 'text-white',   classToast: 'bg-green-500',
       });
    }, 
    MsgWarning(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'warning',       timeout     : seconds,
           title     : Titulo,          message     : Message,
           classMessage: 'text-black',  classTitle: 'text-black',   classToast: 'bg-yellow-200',
       });
    },
       MsgInfo(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'info',          timeout     : seconds,
           title     : Titulo,          message     : Message,
            classMessage: 'text-black',  classTitle: 'text-black',   classToast: 'bg-blue-200',
       });
    },
       MsgError(Titulo, Message, seconds) {
         this.$toast.show({
           type      : 'danger',        timeout     : seconds,
           title     : Titulo,          message     : Message,
           classMessage: 'text-white',  classTitle: 'text-white',   classToast: 'bg-red-600',
       });
    },
  }
}
/*
    classToast: ,
    classTitle: ,
    classMessage: ,

 

 this.$toast.show({
    title: 'Toast with actions',
    message: 'This toast has multiple actions',
    primary: { label: 'Primary', action: () => alert('primary') },
    secondary: { label: 'Secondary', action: () => alert('secondary') },
    timeout: false,
  })
  */
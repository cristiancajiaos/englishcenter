(function() {
  angular.module("app").constant("basicData", {
    name: "Maureen Cooper English Center",
    shortname: "English Center",
    motto: "Your Future Is Speaking English",

    menuOptions: [
      {
        name: "Inicio",
        uiSref: "main"
      },
      {
        name: "Quiénes Somos",
        uiSref: "about"
      },
      {
        name: "Cursos",
        uiSref: "courses"
      },
      {
        name: "Ubicación",
        uiSref: "location"
      },
      {
        name: "Contacto",
        uiSref: "contact"
      }
    ],

    contactOptions: [
      {
        type: "Direccion",
        content: "Visviri XXX, Las Condes",
        icon: "fa-location-arrow"
      },
      {
        type: "Fono",
        content: "2 22292481",
        icon: "fa-phone"
      },
      {
        type: "Celular",
        content: "+569 92585566",
        icon: "fa-mobile"
      },
      {
        type: "EMail",
        content: "mcooper@englishcenter.cl",
        icon: "fa-envelope"
      }
    ]
  });
})();

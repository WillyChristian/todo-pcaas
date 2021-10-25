export const config = {
  0: [
    [
      [
        {
          etapa: 1,
          src: "/modal/network/img1.png",
          description: "clique com o botão direito sobre o ícone de internet.",
          width: "400",
          height: "200",
        },
        {
          etapa: 2,
          src: "/modal/network/img2.png",
          description: "Escolha a opção 'Change Adapter Options'.",
          width: "600",
          height: "350",
        },
        {
          etapa: 3,
          src: "/modal/network/img3.png",
          description:
            "Com o botão direito do mouse, clicque sobre o ícone de Ethernet e selecione 'propriedades'",
          width: "450",
          height: "300",
        },
        {
          etapa: 4,
          src: "/modal/network/img4.png",
          description:
            "Configure conforme a imagem abaixo, lembrando que as telas aparecem em sequencia. obs.: Os items 2 e 4 devem permanecer sem seleção.",
          width: "550",
          height: "300",
        },
      ],
      [
        {
          etapa: 1,
          src: "/modal/domain/img1.jpg",
          description:
            "clique com o botão direito sobre o ícone deste computador (this pc) e selecione propriedades",
          width: "400",
          height: "200",
        },
        {
          etapa: 2,
          src: "/modal/domain/img2.png",
          description:
            "Configure conforme a imagem abaixo. Atente-se para o passo 4 pois aqui será solicitado a credencial de administrador",
          width: "600",
          height: "250",
        },
      ],
    ],
    [],
  ],
};

/*
Como esta organizado os dados
How data is distibuided
  [
    passo1 = [
      item1 = [
        {
          img: '',
          title: "",
          ...
        },{
          img: "",
          title: "",
          ...
        },
        ....
      ],
      item2= [
        {
          img: '',
          title: "",
          ...
        },{
          img: "",
          title: "",
          ...
        },
      ]

    ]
    passo2 = [
      item1 = {
        [ 
          {...},
          {...},
          ...
        ]
      },
      ...
    ]
    ...
  ]

*/

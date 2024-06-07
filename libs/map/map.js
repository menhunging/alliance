(async () => {
  let posFixX = null;
  let posFixY = null;

  const projects = [
    {
      name: "ru-ms", // Москва
      links: [
        {
          id: "ms-1",
          link: `Концессия "Цифровые Недра"`,
        },
        {
          id: "ms-2",
          link: `Концессия "ЛРТ Подмосковья"`,
        },
        {
          id: "ms-3",
          link: `Концессия "Московский авиационный узел"`,
        },
        {
          id: "ms-4",
          link: `Ивестиционная модель перевозчика  для "ВСМ"`,
        },
        {
          id: "ms-5",
          link: `Концессия "ВСЖМ-1"`,
        },
        {
          id: "ms-6",
          link: `Транспортно-логистический M&A`,
        },
        {
          id: "ms-7",
          link: `Зарубежные инвестпроекты РЖД`,
        },
        {
          id: "ms-8",
          link: `Инвестпрограмма ГТЛК`,
        },
        {
          id: "ms-9",
          link: `Проектное финансирование РЖД-Сити`,
        },
        {
          id: "ms-10",
          link: `Eurasian Rail Alliance Index`,
        },
        {
          id: "ms-11",
          link: `Трафик-облигации ОТЛК ЕРА`,
        },
        {
          id: "ms-12",
          link: `Концессия "Платон"`,
        },
      ],
    },
    {
      name: "ru-ln", // Ленинградская область
      links: [
        {
          id: "ln-1",
          link: `Концессия "Аэродром Левашово"`,
        },
        {
          id: "ln-2",
          link: `Инвестиционные сделки для Газпрома`,
        },
        {
          id: "ln-3",
          link: `Ивестиционная модель перевозчика  для "ВСМ"`,
        },
        {
          id: "ln-4",
          link: `Концессия "ВСЖМ-1"`,
        },
        {
          id: "ln-5",
          link: `Концессия "Северо-Восточный ж/д обход СПБ"`,
        },
      ],
    },
    {
      name: "ru-bu", // Республика Бурятия
      links: [
        {
          id: "bu-1",
          link: `Концессия "Северомуйский тоннель-2"`,
        },
      ],
    },
    {
      name: "ru-sl", // Сахалинская область
      links: [
        {
          id: "sl-1",
          link: `Концессия "Мост на Сахалин"`,
        },
      ],
    },
    {
      name: "ru-kh", // Хабаровский край
      links: [
        {
          id: "kh-1",
          link: `M&A порта "Ванино"`,
        },
      ],
    },
    {
      name: "ru-pr", // Приморский край
      links: [
        {
          id: "pr-1",
          link: `Проектное финансирование Порта "Суходол"`,
        },
        {
          id: "pr-2",
          link: `M&A аэропорта "Кневичи"`,
        },
      ],
    },
    {
      name: "ru-kd", // Краснодарский край
      links: [
        {
          id: "kd-1",
          link: `Инвестпроект "Аэропорт Краснодара"`,
        },
        {
          id: "kd-2",
          link: `Концессия "Порт "Тамань"`,
        },
      ],
    },
    {
      name: "ru-yn", // Ямало-Ненецкий АО
      links: [
        {
          id: "yn-1",
          link: `Концессия "СШХ-2"`,
        },
        {
          id: "yn-2",
          link: `Концессия "СШХ"`,
        },
      ],
    },
    {
      name: "ru-ko", // Республика Коми
      links: [
        {
          id: "ko-1",
          link: `Концессия "СШХ"`,
        },
      ],
    },
    {
      name: "ru-ns", // Новосибирская область
      links: [
        {
          id: "ns-1",
          link: `Концессия «IV мост Новосибирска»`,
        },
        {
          id: "ns-2",
          link: `ГЧП-проект "Сеть поликлиник"`,
        },
      ],
    },
    {
      name: "ru-mm", // Мурманская область
      links: [
        {
          id: "mm-1",
          link: `Концессия "Порт "Лавна"`,
        },
      ],
    },
    {
      name: "ru-am", // Амурская область
      links: [
        {
          id: "am-1",
          link: `Концессия "Эльга–Улак"`,
        },
      ],
    },
    {
      name: "ru-tu", // Республика Тыва
      links: [
        {
          id: "tu-1",
          link: `Концессия "Кызыл–Курагино"`,
        },
      ],
    },
  ];

  const topology = await fetch("../libs/map/map.json").then((response) =>
    response.json()
  );

  const data = [
    ["ru-ms", 12], // Москва
    ["ru-ln", 5], // Ленинградская область
    ["ru-bu", 1], // Республика Бурятия
    ["ru-sl", 1], // Сахалинская область
    ["ru-kh", 1], // Хабаровский край
    ["ru-pr", 2], // Приморский край
    ["ru-kd", 2], // Краснодарский край
    ["ru-yn", 2], // Ямало-Ненецкий АО
    ["ru-ko", 1], // Республика Коми
    ["ru-ns", 2], // Новосибирская область
    ["ru-mm", 1], // Мурманская область
    ["ru-am", 1], // Амурская область
    ["ru-tu", 1], // Республика Тыва

    // ["ru-sc", 1],
    // ["ru-kr", 2],
    // ["ru-2485", 3],
    // ["ru-ar", 4],
    // ["ru-nn", 5],
    // ["ru-ky", 7],
    // ["ru-ck", 2],
    // ["ru-ka", 11],
    // ["ru-kt", 12],
    // ["ru-rz", 14],
    // ["ru-sa", 15],
    // ["ru-ul", 16],
    // ["ru-om", 17],
    // ["ru-sp", 21],
    // ["ru-ki", 22],
    // ["ru-kc", 23],
    // ["ru-in", 24],
    // ["ru-kb", 25],
    // ["ru-no", 26],
    // ["ru-st", 27],
    // ["ru-sm", 28],
    // ["ru-ps", 29],
    // ["ru-tv", 30],
    // ["ru-vo", 31],
    // ["ru-iv", 32],
    // ["ru-ys", 33],
    // ["ru-kg", 34],
    // ["ru-br", 35],
    // ["ru-ks", 36],
    // ["ru-lp", 37],
    // ["ru-2509", 38],
    // ["ru-ol", 39],
    // ["ru-nz", 40],
    // ["ru-pz", 41],
    // ["ru-vl", 42],
    // ["ru-vr", 43],
    // ["ru-sv", 45],
    // ["ru-bk", 46],
    // ["ru-ud", 47],
    // ["ru-mr", 57],
    // ["ru-cv", 58],
    // ["ru-cl", 59],
    // ["ru-ob", 60],
    // ["ru-sr", 61],
    // ["ru-tt", 62],
    // ["ru-to", 63],
    // ["ru-ty", 64],
    // ["ru-ga", 65],
    // ["ru-kk", 66],
    // ["ru-cn", 67],
    // ["ru-kl", 68],
    // ["ru-da", 69],
    // ["ru-ro", 70],
    // ["ru-bl", 71],
    // ["ru-ir", 73],
    // ["ru-ct", 74],
    // ["ru-yv", 75],
    // ["ru-tb", 77],
    // ["ru-tl", 78],
    // ["ru-ng", 79],
    // ["ru-vg", 80],
    // ["ru-kv", 81],
    // ["ru-me", 82],
    // ["ru-ke", 83],
    // ["ru-as", 84],
    // ["ru-mg", 86],
    // ["ru-kn", 88],
    // ["ru-ku", 90],
    // ["ru-al", 91],
    // ["ru-km", 92],
    // ["ru-pe", 93],
    // ["ru-ad", 94],
  ];

  // Create the chart
  Highcharts.mapChart("container", {
    chart: {
      map: topology,
      events: {
        load: function () {
          // this.mapZoom(0.7);
        },
      },
    },

    title: {
      text: "", // убираем текст
    },

    exporting: {
      enabled: false, // убираем burger сверху
    },

    credits: {
      enabled: false, // убираем текст снизу
    },

    colorAxis: {
      visible: false, // убираем строку с цветом
    },

    tooltip: {
      enabled: true,
      useHTML: true,
      style: {
        pointerEvents: "auto",
        display: "none", // Скрыть tooltip
      },

      formatter: function () {
        let self = this.point;
        let region = self["hc-key"];
        let objTemp = [];
        let html = "";

        posFixX = this.point.plotX;
        posFixY = this.point.plotY;

        projects.map(function (item) {
          if (region === item.name) {
            objTemp = [...item.links];
          }
        });

        objTemp.map((item) => {
          html =
            html +
            `<li><span class="links" id="${item.id}">${item.link}</span></li>`;
        });

        return `<div class="tolltip">
            <span class="tolltip__title">Все проекты в ${self.name}</span>
            <ul class="tolltip__list">
            ${html}
            </ul>
        </div>`;
      },
      positioner: function () {
        return {
          x: posFixX,
          y: posFixY,
        };
      },
    },

    series: [
      {
        data: data,
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter: function () {
            if (this.point["hc-key"] === "ru-ms") {
            }

            if (this.point.value) {
              let htmlCount = `<span class="map-icon__count hidden"></span>`;

              if (this.point.value >= 2) {
                htmlCount = `<span class="map-icon__count">
                <span>${this.point.value}</span>
              </span>`;
              }

              console.log(this.point["hc-key"]);

              if (this.point["hc-key"] !== "ru-ms") {
                return `<div class="map-icon">${htmlCount}</div>`;
              } else {
                return `<div class="map-icon map-icon--capital">${htmlCount}`;
              }
            }
          },
        },

        events: {
          mouseOver: function () {
            this.chart.update({
              tooltip: {
                enabled: false,
              },
            });
          },

          mouseOut: function () {
            this.chart.update({
              tooltip: {
                enabled: false,
              },
            });
          },

          click: function (e) {
            this.chart.update({
              tooltip: {
                enabled: true,
              },
            });

            $(".links").on("click", function () {
              let id = $(this).attr("id");
              id = `popup-${id}`;

              console.log(id);

              if ($("#" + id).length > 0) {
                MicroModal.show(id);
              }
            });
          },
        },
      },
    ],
  });
})();
